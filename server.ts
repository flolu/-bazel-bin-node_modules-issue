import * as grpc from '@grpc/grpc-js'

import {Request, Response, Example} from '@repro/example'

const server = new grpc.Server()

async function main() {
  const serviceImpl = {
    add: (
      call: grpc.ServerUnaryCall<Request, Response>,
      callback: grpc.sendUnaryData<Response>,
    ) => {
      const a = call.request?.a
      const b = call.request?.b
      if (!a || !b)
        return callback(
          {
            code: grpc.status.INVALID_ARGUMENT,
            message: 'Please provide two valid numbers.',
            name: 'invalid_numbers',
          },
          null,
        )
      callback(null, new Response({result: a + b}))
    },
  }
  server.addService(Example as any, serviceImpl)
  server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
    console.log({err, port})
    server.start()
  })
}

main()
