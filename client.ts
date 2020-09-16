import * as grpc from 'grpc'

import {ExampleClient, Request, Response} from '@repro/example'

const client = new ExampleClient('repro_server:9090', grpc.credentials.createInsecure())

setInterval(() => {
  const payload = new Request({a: 40, b: 2})
  const callback: grpc.requestCallback<Response> = (_err, response) => console.log(response.result)
  client['add'](payload, callback)
}, 3000)
