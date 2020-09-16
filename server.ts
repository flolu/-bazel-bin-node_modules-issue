import * as grpc from 'grpc'

import {Request, Response, Example} from '@repro/example'

const server = new grpc.Server()

async function main() {
  const serviceImpl = {
    add: (call: grpc.ServerUnaryCall<Request>, callback: grpc.sendUnaryData<Response>) => {
      const a = call.request?.a
      const b = call.request?.b
      callback(null, new Response({result: a + b}))
    },
  }
  server.addService(Example as any, serviceImpl)
  server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
    server.start()
    console.log('server running on port', port)
  })
}

main()
