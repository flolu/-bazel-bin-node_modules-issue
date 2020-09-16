**The goal of this repo is showcase how to use Typescript, Protobuf and Bazel to implement Client-Server communication.**

> Made possible by [thesayyn](https://github.com/thesayyn)'s awesome [protoc-gen-ts](https://github.com/thesayyn/protoc-gen-ts) plugin.

## Setup

```
yarn install
yarn build
```

## Development

```
yarn dev
```

## Run

```
# start server
yarn start:server
# start client
yarn start:client
```

## TODO

- Migration from grpc to @grpc/grpc-js [thesayyn/protoc-gen-ts#19](https://github.com/thesayyn/protoc-gen-ts/issues/19)

- Compatibility with Typescript strict mode [thesayyn/protoc-gen-ts#20](https://github.com/thesayyn/protoc-gen-ts/issues/20)
