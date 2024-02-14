// @generated by protoc-gen-es v1.7.2
// @generated from file default/config/v1beta1/example.proto (package default.config.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum default.config.v1beta1.DogBreed
 */
export declare enum DogBreed {
  /**
   * @generated from enum value: DOG_BREED_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DOG_BREED_POMERANIAN = 1;
   */
  POMERANIAN = 1,

  /**
   * @generated from enum value: DOG_BREED_GOLDEN_RETRIEVER = 2;
   */
  GOLDEN_RETRIEVER = 2,

  /**
   * @generated from enum value: DOG_BREED_POODLE = 3;
   */
  POODLE = 3,

  /**
   * @generated from enum value: DOG_BREED_MALTESE = 4;
   */
  MALTESE = 4,
}

/**
 * @generated from message default.config.v1beta1.Foo
 */
export declare class Foo extends Message<Foo> {
  /**
   * @generated from field: string bar = 1;
   */
  bar: string;

  constructor(data?: PartialMessage<Foo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "default.config.v1beta1.Foo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Foo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Foo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Foo;

  static equals(a: Foo | PlainMessage<Foo> | undefined, b: Foo | PlainMessage<Foo> | undefined): boolean;
}

/**
 * @generated from message default.config.v1beta1.Dog
 */
export declare class Dog extends Message<Dog> {
  /**
   * @generated from field: default.config.v1beta1.DogBreed breed = 1;
   */
  breed: DogBreed;

  constructor(data?: PartialMessage<Dog>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "default.config.v1beta1.Dog";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Dog;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Dog;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Dog;

  static equals(a: Dog | PlainMessage<Dog> | undefined, b: Dog | PlainMessage<Dog> | undefined): boolean;
}

/**
 * @generated from message default.config.v1beta1.Context
 */
export declare class Context extends Message<Context> {
  /**
   * @generated from field: string breed = 1;
   */
  breed: string;

  /**
   * @generated from field: string repo = 2;
   */
  repo: string;

  /**
   * @generated from field: string env = 3;
   */
  env: string;

  /**
   * @generated from field: string rpc = 4;
   */
  rpc: string;

  /**
   * @generated from field: string team = 5;
   */
  team: string;

  /**
   * @generated from field: string username = 6;
   */
  username: string;

  /**
   * @generated from field: string teamname = 7;
   */
  teamname: string;

  /**
   * @generated from field: string feature = 8;
   */
  feature: string;

  constructor(data?: PartialMessage<Context>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "default.config.v1beta1.Context";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Context;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Context;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Context;

  static equals(a: Context | PlainMessage<Context> | undefined, b: Context | PlainMessage<Context> | undefined): boolean;
}

/**
 * @generated from message default.config.v1beta1.CacheConfig
 */
export declare class CacheConfig extends Message<CacheConfig> {
  /**
   * @generated from field: string cache_type = 1;
   */
  cacheType: string;

  /**
   * @generated from field: string server = 2;
   */
  server: string;

  /**
   * @generated from field: int32 duration = 3;
   */
  duration: number;

  /**
   * @generated from field: int32 max_idle_conns = 4;
   */
  maxIdleConns: number;

  constructor(data?: PartialMessage<CacheConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "default.config.v1beta1.CacheConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CacheConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CacheConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CacheConfig;

  static equals(a: CacheConfig | PlainMessage<CacheConfig> | undefined, b: CacheConfig | PlainMessage<CacheConfig> | undefined): boolean;
}

/**
 * @generated from message default.config.v1beta1.RetryConfig
 */
export declare class RetryConfig extends Message<RetryConfig> {
  /**
   * @generated from field: int32 retries = 1;
   */
  retries: number;

  /**
   * @generated from field: int32 factor = 2;
   */
  factor: number;

  /**
   * @generated from field: int32 min_timeout = 3;
   */
  minTimeout: number;

  /**
   * @generated from field: int32 max_timeout = 4;
   */
  maxTimeout: number;

  /**
   * @generated from field: bool randomize = 5;
   */
  randomize: boolean;

  constructor(data?: PartialMessage<RetryConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "default.config.v1beta1.RetryConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RetryConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RetryConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RetryConfig;

  static equals(a: RetryConfig | PlainMessage<RetryConfig> | undefined, b: RetryConfig | PlainMessage<RetryConfig> | undefined): boolean;
}

