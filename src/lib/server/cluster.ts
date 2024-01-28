import type { MemberListRequest } from '$lib/proto/regatta/v1/MemberListRequest';
import type { MemberListResponse } from '$lib/proto/regatta/v1/MemberListResponse';
import type * as grpc from '@grpc/grpc-js';
import type { StatusResponse } from '$lib/proto/regatta/v1/StatusResponse';
import type { ClusterClient } from '$lib/proto/regatta/v1/Cluster';
import type { StatusRequest } from '$lib/proto/regatta/v1/StatusRequest';
import { apiAddress, credentials, regatta, removeProtocolPrefix } from '$lib/server/grpc';
import { struct } from '$lib/server/pb';

export interface Cluster {
	memberList(argument: MemberListRequest, options: grpc.CallOptions): Promise<MemberListResponse>;

	memberList(argument: MemberListRequest): Promise<MemberListResponse>;

	status(
		argument: StatusRequest,
		target: string,
		options: grpc.CallOptions
	): Promise<StatusResponse>;

	status(argument: StatusRequest, target: string): Promise<StatusResponse>;

	status(argument: StatusRequest): Promise<StatusResponse>;
}

class ClusterImpl implements Cluster {
	constructor(private client: ClusterClient) {}

	status(
		argument: StatusRequest,
		target: string,
		options: grpc.CallOptions
	): Promise<StatusResponse>;
	status(argument: StatusRequest, target: string): Promise<StatusResponse>;
	status(argument: StatusRequest): Promise<StatusResponse>;
	status(
		argument: StatusRequest,
		target?: string,
		options?: grpc.CallOptions
	): Promise<StatusResponse> {
		let client: ClusterClient;
		if (!target) {
			client = this.client;
		} else {
			client = new regatta.v1.Cluster(removeProtocolPrefix(target), credentials);
		}
		return new Promise<StatusResponse>((resolve, reject) => {
			client.Status(argument, options || ({} as grpc.CallOptions), (err, value) => {
				if (err) {
					reject(err);
				} else {
					const status = value!;
					if (status.config) {
						// @ts-expect-error this is a crutch, for missing autogen code.
						status.config = struct.decode(status.config);
					}
					resolve(status);
				}
			});
		});
	}

	memberList(argument: MemberListRequest, options: grpc.CallOptions): Promise<MemberListResponse>;
	memberList(argument: MemberListRequest): Promise<MemberListResponse>;
	memberList(argument: MemberListRequest, options?: grpc.CallOptions): Promise<MemberListResponse> {
		return new Promise<MemberListResponse>((resolve, reject) => {
			this.client.MemberList(argument, options || ({} as grpc.CallOptions), (err, value) => {
				if (err) {
					reject(err);
				} else {
					resolve(value!);
				}
			});
		});
	}
}

export const cluster = new ClusterImpl(new regatta.v1.Cluster(apiAddress, credentials));
