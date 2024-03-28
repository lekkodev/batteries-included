// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file plugins/config/v1beta1/plugins.proto (package plugins.config.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message plugins.config.v1beta1.BannerConfigCta
 */
export class BannerConfigCta extends Message<BannerConfigCta> {
  /**
   * @generated from field: string text = 1;
   */
  text = "";

  /**
   * @generated from field: string url = 2;
   */
  url = "";

  /**
   * @generated from field: bool external = 3;
   */
  external = false;

  constructor(data?: PartialMessage<BannerConfigCta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.config.v1beta1.BannerConfigCta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "external", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BannerConfigCta {
    return new BannerConfigCta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BannerConfigCta {
    return new BannerConfigCta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BannerConfigCta {
    return new BannerConfigCta().fromJsonString(jsonString, options);
  }

  static equals(a: BannerConfigCta | PlainMessage<BannerConfigCta> | undefined, b: BannerConfigCta | PlainMessage<BannerConfigCta> | undefined): boolean {
    return proto3.util.equals(BannerConfigCta, a, b);
  }
}

/**
 * @generated from message plugins.config.v1beta1.BannerConfig
 */
export class BannerConfig extends Message<BannerConfig> {
  /**
   * @generated from field: string text = 1;
   */
  text = "";

  /**
   * @generated from field: plugins.config.v1beta1.BannerConfigCta cta = 2;
   */
  cta?: BannerConfigCta;

  /**
   * @generated from field: bool permanent = 3;
   */
  permanent = false;

  constructor(data?: PartialMessage<BannerConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.config.v1beta1.BannerConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "cta", kind: "message", T: BannerConfigCta },
    { no: 3, name: "permanent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BannerConfig {
    return new BannerConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BannerConfig {
    return new BannerConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BannerConfig {
    return new BannerConfig().fromJsonString(jsonString, options);
  }

  static equals(a: BannerConfig | PlainMessage<BannerConfig> | undefined, b: BannerConfig | PlainMessage<BannerConfig> | undefined): boolean {
    return proto3.util.equals(BannerConfig, a, b);
  }
}

/**
 * @generated from message plugins.config.v1beta1.BannerStyleConfig
 */
export class BannerStyleConfig extends Message<BannerStyleConfig> {
  /**
   * @generated from field: string class_name = 1;
   */
  className = "";

  /**
   * @generated from field: string text_class_name = 2;
   */
  textClassName = "";

  /**
   * @generated from field: string cta_class_name = 3;
   */
  ctaClassName = "";

  /**
   * @generated from field: string close_class_name = 4;
   */
  closeClassName = "";

  constructor(data?: PartialMessage<BannerStyleConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "plugins.config.v1beta1.BannerStyleConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text_class_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cta_class_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "close_class_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BannerStyleConfig {
    return new BannerStyleConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BannerStyleConfig {
    return new BannerStyleConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BannerStyleConfig {
    return new BannerStyleConfig().fromJsonString(jsonString, options);
  }

  static equals(a: BannerStyleConfig | PlainMessage<BannerStyleConfig> | undefined, b: BannerStyleConfig | PlainMessage<BannerStyleConfig> | undefined): boolean {
    return proto3.util.equals(BannerStyleConfig, a, b);
  }
}

