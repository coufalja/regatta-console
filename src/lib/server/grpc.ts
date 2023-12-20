import protoLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import type { ProtoGrpcType } from '$lib/proto/regatta';
import { env } from '$env/dynamic/private';

const REGATTA_ADDRESS: string | string[] = env.REGATTA_ADDRESS || 'http://localhost:5201';
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
export const credentials: grpc.ChannelCredentials = buildAuthentication(REGATTA_ADDRESS);
export const apiAddress: string = removeProtocolPrefix(REGATTA_ADDRESS);
export function removeProtocolPrefix(name: string) {
	return name.replace(/^https?:\/\//, '');
}

function buildAuthentication(host: string | string[]): grpc.ChannelCredentials {
	let protocolCredentials = grpc.credentials.createInsecure();
	if (hasSecureHost(host)) {
		protocolCredentials = grpc.credentials.createSsl();
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
