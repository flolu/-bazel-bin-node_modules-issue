import * as grpc from '@grpc/grpc-js'

import {ExampleClient, Request} from '@repro/example'

const client = new ExampleClient('repro_server:9090', grpc.credentials.createInsecure())

async function main() {
  const response = await (client as any).add(new Request({a: 40, b: 2}))
  console.log({response})
}

main()
