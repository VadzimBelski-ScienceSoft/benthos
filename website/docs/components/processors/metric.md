---
title: metric
type: processor
---

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the contents of:
     lib/processor/metric.go
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Expose custom metrics by extracting values from message batches.

```yaml
# Config fields, showing default values
metric:
  type: counter
  path: ""
  labels: {}
  value: ""
```

This processor executes once per batch, in order to execute once per message
place it within a [`for_each`](/docs/components/processors/for_each) processor:

```yaml
for_each:
- metric:
    type: counter_by
    path: count.custom.field
    value: ${!json("field.some.value")}
```

The `path` field should be a dot separated path of the metric to be
set and will automatically be converted into the correct format of the
configured metric aggregator.

The `value` field can be set using function interpolations described
[here](/docs/configuration/interpolation#bloblang-queries) and is used according to the
specific type.

## Fields

### `type`

The metric [type](#types) to create.


Type: `string`  
Default: `"counter"`  

### `path`

The path of the metric to create.


Type: `string`  
Default: `""`  

### `labels`

A map of label names and values that can be used to enrich metrics with aggregators such as Prometheus.
This field supports [interpolation functions](/docs/configuration/interpolation#bloblang-queries).


Type: `object`  
Default: `{}`  

```yaml
# Examples

labels:
  topic: ${!meta("kafka_topic")}
  type: ${!json("doc.type")}
```

### `value`

For some metric types specifies a value to set, increment.
This field supports [interpolation functions](/docs/configuration/interpolation#bloblang-queries).


Type: `string`  
Default: `""`  

## Types

### `counter`

Increments a counter by exactly 1, the contents of `value` are ignored
by this type.

### `counter_parts`

Increments a counter by the number of parts within the message batch, the
contents of `value` are ignored by this type.

### `counter_by`

If the contents of `value` can be parsed as a positive integer value
then the counter is incremented by this value.

For example, the following configuration will increment the value of the
`count.custom.field` metric by the contents of `field.some.value`:

```yaml
metric:
  type: counter_by
  path: count.custom.field
  value: ${!json("field.some.value")}
```

### `gauge`

If the contents of `value` can be parsed as a positive integer value
then the gauge is set to this value.

For example, the following configuration will set the value of the
`gauge.custom.field` metric to the contents of `field.some.value`:

```yaml
metric:
  type: gauge
  path: gauge.custom.field
  value: ${!json("field.some.value")}
```

### `timing`

Equivalent to `gauge` where instead the metric is a timing.

