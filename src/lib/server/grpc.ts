import protoLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import type { ProtoGrpcType } from '$lib/proto/regatta';
import { env } from '$env/dynamic/private';
import * as fs from 'fs';

const REGATTA_ADDRESS: string | string[] = env.REGATTA_ADDRESS || 'http://localhost:5201';
const REGATTA_KEY_PATH: string | undefined = env.REGATTA_KEY_PATH;
const REGATTA_CERT_PATH: string | undefined = env.REGATTA_CERT_PATH;
const REGATTA_CA_PATH: string | undefined = env.REGGATA_CA_PATH;
const secureProtocolPrefix = 'https:';

const packageDefinition = protoLoader.loadSync('./src/lib/proto/regatta.proto', {
	keepCase: false,
	longs: String,
	bytes: String,
	defaults: true,
	oneofs: true,
	arrays: true
});

export const { regatta } = grpc.loadPackageDefinition(
	packageDefinition
) as unknown as ProtoGrpcType;
export const credentials: grpc.ChannelCredentials = buildAuthentication(REGATTA_ADDRESS, {
	key: REGATTA_KEY_PATH,
	cert: REGATTA_CERT_PATH,
	ca: REGATTA_CA_PATH
});
export const apiAddress: string = removeProtocolPrefix(REGATTA_ADDRESS);

export function removeProtocolPrefix(name: string) {
	return name.replace(/^https?:\/\//, '');
}

function buildAuthentication(
	host: string | string[],
	certOptions?: { key?: string; cert?: string; ca?: string }
): grpc.ChannelCredentials {
	let protocolCredentials = grpc.credentials.createInsecure();
	if (hasSecureHost(host)) {
		if (!certOptions) {
			throw new Error('certOptions must be defined when using a secured connection');
		}
		const cacert = fs.readFileSync(certOptions.ca!);
		const key = fs.readFileSync(certOptions.key!);
		const cert = fs.readFileSync(certOptions.cert!);
		protocolCredentials = grpc.credentials.createSsl(cacert, key, cert);
	}
	return protocolCredentials;
}

function hasSecureHost(host: string | string[]): boolean {
	if (typeof host === 'string') {
		return host.startsWith(secureProtocolPrefix);
	}
	const countSecure = host.filter((host) => host.startsWith(secureProtocolPrefix)).length;
	if (countSecure === 0) {
		return false;
	}
	if (countSecure < host.length) {
		throw new Error('regatta cannot be configured with a mix of secure and insecure hosts');
	}
	return true;
}
