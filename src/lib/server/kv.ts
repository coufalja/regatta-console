import type { DeleteRangeRequest } from '$lib/proto/regatta/v1/DeleteRangeRequest';
import type * as grpc from '@grpc/grpc-js';
import type { DeleteRangeResponse } from '$lib/proto/regatta/v1/DeleteRangeResponse';
import type { PutRequest } from '$lib/proto/regatta/v1/PutRequest';
import type { PutResponse } from '$lib/proto/regatta/v1/PutResponse';
import type { RangeRequest } from '$lib/proto/regatta/v1/RangeRequest';
import type { RangeResponse } from '$lib/proto/regatta/v1/RangeResponse';
import { cr, regatta, REGATTA_ADDRESS } from '$lib/server/grpc';
import type { KVClient } from '$lib/proto/regatta/v1/KV';

export interface KV {
	deleteRange(
		argument: DeleteRangeRequest,
		options: grpc.CallOptions
	): Promise<DeleteRangeResponse>;

	deleteRange(argument: DeleteRangeRequest): Promise<DeleteRangeResponse>;

	put(argument: PutRequest, options: grpc.CallOptions): Promise<PutResponse>;

	put(argument: PutRequest): Promise<PutResponse>;

	range(argument: RangeRequest, options: grpc.CallOptions): Promise<RangeResponse>;

	range(argument: RangeRequest): Promise<RangeResponse>;
}

class KVImpl implements KV {
	constructor(private client: KVClient) {}

	deleteRange(
		argument: DeleteRangeRequest,
		options: grpc.CallOptions
	): Promise<DeleteRangeResponse>;
	deleteRange(argument: DeleteRangeRequest): Promise<DeleteRangeResponse>;
	deleteRange(
		argument: DeleteRangeRequest,
		options?: grpc.CallOptions
	): Promise<DeleteRangeResponse> {
		return new Promise<DeleteRangeResponse>((resolve, reject) => {
			this.client.DeleteRange(
				this.fixArgs({ kind: 'delete', ...argument }),
				options || ({} as grpc.CallOptions),
				(err, value) => {
					if (err) {
						reject(err);
					} else {
						resolve(value!);
					}
				}
			);
		});
	}

	put(argument: PutRequest, options: grpc.CallOptions): Promise<PutResponse>;
	put(argument: PutRequest): Promise<PutResponse>;
	put(argument: PutRequest, options?: grpc.CallOptions): Promise<PutResponse> {
		return new Promise<PutResponse>((resolve, reject) => {
			this.client.Put(
				this.fixArgs({ kind: 'put', ...argument }),
				options || ({} as grpc.CallOptions),
				(err, value) => {
					if (err) {
						reject(err);
					} else {
						resolve(value!);
					}
				}
			);
		});
	}

	range(argument: RangeRequest, options: grpc.CallOptions): Promise<RangeResponse>;
	range(argument: RangeRequest): Promise<RangeResponse>;
	range(argument: RangeRequest, options?: grpc.CallOptions): Promise<RangeResponse> {
		return new Promise<RangeResponse>((resolve, reject) => {
			this.client.Range(
				this.fixArgs({ kind: 'range', ...argument }),
				options || ({} as grpc.CallOptions),
				(err, value) => {
					if (err) {
						reject(err);
					} else {
						resolve(value!);
					}
				}
			);
		});
	}

	private fixArgs(argument: Args) {
		const isRange = (p: Args) => p.kind === 'range';
		const isDelete = (p: Args) => p.kind === 'delete';
		const isPut = (p: Args) => p.kind === 'put';

		if (typeof argument.table === 'string') {
			argument.table = Buffer.from(argument.table, 'utf-8');
		}
		if (typeof argument.key === 'string') {
			argument.key = Buffer.from(argument.key, 'utf-8');
		}

		if (isRange(argument)) {
			if (typeof argument.rangeEnd === 'string') {
				argument.key = Buffer.from(argument.rangeEnd, 'utf-8');
			}
			return argument;
		}

		if (isPut(argument)) {
			if (typeof argument.value === 'string') {
				argument.key = Buffer.from(argument.value, 'utf-8');
			}
			return argument;
		}

		if (isDelete(argument)) {
			if (typeof argument.rangeEnd === 'string') {
				argument.key = Buffer.from(argument.rangeEnd, 'utf-8');
			}
			return argument;
		}

		throw new Error('unknown request type');
	}
}

interface Args extends RangeRequest, DeleteRangeRequest, PutRequest {
	kind: string;
}

export const kv = new KVImpl(new regatta.v1.KV(REGATTA_ADDRESS, cr));
