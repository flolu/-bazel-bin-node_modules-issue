import * as grpc from '@grpc/grpc-js'
import * as dotenv from 'dotenv'
dotenv.config({path: '.bazel.env'})

import {ExampleClient, Request, Response} from '@repro/example'

const host = process.env.host
if (!host) throw new Error('Please provide "host" environment variable.')

const port = process.env.port
if (!port) throw new Error('Please provide "port" environment variable.')

const client = new ExampleClient(`${host}:${port}`, grpc.credentials.createInsecure())

setInterval(() => {
  const payload = new Request({a: 40, b: 2})
  const callback: grpc.requestCallback<Response> = (err, response) => {
    if (err) console.log(err)
    else console.log(response.result)
  }
  client['add'](payload, callback)
}, 3000)
