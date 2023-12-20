import protoLoader from '@grpc/proto-loader';
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';
import type { ProtoGrpcType } from '$lib/proto/regatta';
import { env } from '$env/dynamic/private';

export const REGATTA_ADDRESS = env.REGATTA_ADDRESS || 'localhost:5201';

const packageDefinition = protoLoader.loadSync('./src/lib/proto/regatta.proto', {
	keepCase: false,
	longs: String,
	bytes: String,
	defaults: true,
	oneofs: true,
	arrays: true
});

export const { regatta } = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
export const cr = credentials.createInsecure();
