import * as grpc from '@grpc/grpc-js'
import * as dotenv from 'dotenv'
dotenv.config({path: '.bazel.env'})

import {Request, Response, Example} from '@repro/example'

const server = new grpc.Server()

const port = process.env.port
if (!port) throw new Error('Please provide "port" environment variable.')

async function main() {
  const serviceImpl = {
    add: (
      call: grpc.ServerUnaryCall<Request, Response>,
      callback: grpc.sendUnaryData<Response>,
    ) => {
      const a = call.request?.a
      const b = call.request?.b
      callback(null, new Response({result: a + b}))
    },
  }
  server.addService(Example as any, serviceImpl)
  server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    server.start()
    console.log('server running on port', port)
  })
}

main()
