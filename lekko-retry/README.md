# Run example
```
npm install
npm run index
```

# Limitations
- requires unreleased `lekko` CLI
- path to Node SDK is hardcoded as `../../node-server-sdk`
- relies on `retry/retry-config.star` present in default repo location, example content:
```
default_config_v1beta1 = proto.package("default.config.v1beta1")

export(
    Config(
        description = "my config description",
        default = default_config_v1beta1.RetryConfig(
            retries = 10,
            factor = 2,
            min_timeout = 1000,
            max_timeout = 10000,
            randomize = True,
        ),
        overrides = [
            ("env == \"dev\"", default_config_v1beta1.RetryConfig(
                retries = 1,
                factor = 2,
                min_timeout = 10,
                max_timeout = 10000,
                randomize = True,
            )),
        ],
    ),
)
```
which requires proto message in `proto/default/config/v1beta1/example.proto`:
```
message RetryConfig {
  int32 retries = 1;
  int32 factor = 2;
  int32 min_timeout = 3;
  int32 max_timeout = 4;
  bool randomize = 5;
}
```
