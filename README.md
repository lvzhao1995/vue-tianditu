# vue-tianditu2

- 天地图 vue 组件库

- [vue-tianditu2 文档](https://lvzhao1995.github.io/vue-tianditu/)

## 说明

由于原项目[vue-tianditu](https://github.com/SoulLyoko/vue-tianditu)长时间未更新，目前在typescript支持方面有一些问题，所以fork了一份，并修复了部分问题。去除了Vue 2支持，调整了类型声明文件和构建配置，更新了依赖项。

## 安装

```sh
npm i vue-tianditu2
# or
yarn add vue-tianditu2
```

## 快速上手

### 全局引入

全部引入，解放双手

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { install } from "vue-tianditu2";

const app = createApp(App);
app.use(install, {
  v: "4.0", //目前只支持4.0版本
  tk: "your map token"
});
app.mount("#app");
```

```html
<!-- App.vue -->
<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom"></tdt-map>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  import type { LngLat } from "vue-tianditu2";

  const state = reactive({
    center: [113.280637, 23.125178]  as LngLat,
    zoom: 12
  });
</script>

<style>
  .mapDiv {
    width: 100%;
    height: 100%;
  }
</style>
```

### 按需引入

按需引入，配合 ts 获得类型提示。

- 使用组件时传入接口参数

**`loadConfig`仅第一次生效，后续调用忽略此参数。**


```html
<!--App.vue-->
<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom" :loadConfig="loadConfig"></tdt-map>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  import { TdtMap, type LngLat } from "vue-tianditu2";

  const loadConfig = { v: "4.0", tk: "your map token" };
  const state = reactive({
    center: [113.280637, 23.125178] as LngLat,
    zoom: 12
  });
</script>

<style>
  .mapDiv {
    width: 100%;
    height: 100%;
  }
</style>
```

- 单独调用`useApiLoader`

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { useApiLoader } from "vue-tianditu2";

const app = createApp(App);
useApiLoader( {
  v: "4.0", //目前只支持4.0版本
  tk: "your map token"
});
app.mount("#app");
```

```html
<!--App.vue-->
<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom"></tdt-map>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  import { TdtMap, type LngLat } from "vue-tianditu2";

  const state = reactive({
    center: [113.280637, 23.125178] as LngLat,
    zoom: 12
  });
</script>

<style>
  .mapDiv {
    width: 100%;
    height: 100%;
  }
</style>
```

### API 加载器

甚至可以把它当作无情的 API 加载工具

```ts
import { useApiLoader } from "vue-tianditu2";

useApiLoader({
  v: "4.0",
  tk: "your map token",
  plugins: ["D3", "CarTrack", "HeatmapOverlay", "BufferTool", "ImageOverLayer"]
}).then(() => {
  new T.Map({ ... });
});
```

## 辅助函数

```ts
import { toLngLat, toBounds, toPoint, toIcon } from "vue-tianditu2";
```

### 说明

| 函数名                                                | 返回值      | 描述                                                                                                                                            |
|----------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| toLngLat(lnglat:[number,number])                   | T.LngLat | 转换为经纬度对象。<br>参数说明:<br>lnglat:经纬度数组                                                                                                            |
| toBounds(bounds:[[number,number],[number,number]]) | T.Bounds | 转换为地理范围对象。<br>参数说明:<br>bounds:地理范围数组                                                                                                          |
| toPoint(point:[number,number])                     | T.Point  | 转换为像素坐标点对象。<br>参数说明:<br>point:像素坐标点数组                                                                                                         |
| toIcon(icon:IconOption\|string)                    | T.Icon   | 转换为图标对象。<br>参数说明:<br>`icon:string//图片地址` 或 `{iconUrl:string,//图片地址`<br>`iconSize:[number,number],//图片大小`<br>`iconAnchor:[number,number]//偏移}` |

## 调用原生API

由于API是通过`useApiLoader`异步加载的，所以需要在API加载完成后才能使用天地图原生的API，有以下三种方式:

- 不使用组件，只使用API加载器

```html

<template>
  <div id="mapContainer"></div>
</template>

<script>
  import { useApiLoader } from "vue-tianditu2";
  // 加载API
  useApiLoader({
    v: "4.0",
    tk: "your map token",
    plugins: ["D3", "CarTrack", "HeatmapOverlay", "BufferTool", "ImageOverLayer"]
  }).then(() => {
    const map = new T.Map("mapContainer", { ... });
    const marker = new T.Marker({ ... });
    map.addOverlay(marker);
  });
</script>
```

- 使用组件，监听组件的初始化事件

```html

<template>
  <tdt-map @init="mapInit"></tdt-map>
</template>

<script>
  function mapInit(map) {
    // 此时原生API中的T已存在window中
    const marker = new T.Marker({ ... })
    map.addOverlay(marker);
  }
</script>
```

- 注册了组件，使用API加载器异步等待API加载完成

```js
// 不用传参数，异步等待之前注册组件时带参数加载的API加载完成
useApiLoader({}).then(() => {
  const marker = new T.Marker({ ... });
});
```
