import protoLoader from '@grpc/proto-loader';
import { credentials, loadPackageDefinition } from '@grpc/grpc-js';
import type { ProtoGrpcType } from '$lib/proto/regatta';
import { promisify } from '$lib/server/promisify';

const packageDefinition = protoLoader.loadSync(
	'./src/lib/proto/regatta.proto',
	{
		keepCase: false,
		longs: String,
		bytes: String,
		defaults: true,
		oneofs: true,
		arrays: true
	}
);

export const { regatta } = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
export const cr = credentials.createInsecure();

export const cluster = promisify(new regatta.v1.Cluster('localhost:5201', cr));
