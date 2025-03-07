## [3.0.1](https://github.com/lvzhao1995/vue-tianditu/compare/v3.0.0...v3.0.1) (2025-03-07)


### Bug Fixes

* **types:** 类型调整 ([7e5884d](https://github.com/lvzhao1995/vue-tianditu/commit/7e5884d386408ba2b45d478efd769211e08972c1))



# [3.0.0](https://github.com/lvzhao1995/vue-tianditu/compare/v3.0.0-beta.0...v3.0.0) (2025-03-06)


### Bug Fixes

* **map:** 修复地图参数类型错误的问题 ([58d17a4](https://github.com/lvzhao1995/vue-tianditu/commit/58d17a498ce21526f8012759e279fca1dbd4d847))
* **tilelayer:** 修复一处类型错误 ([c07156f](https://github.com/lvzhao1995/vue-tianditu/commit/c07156f802248abad72c187386b03378321d08e5))



# [3.0.0-beta.0](https://github.com/lvzhao1995/vue-tianditu/compare/v2.7.6...v3.0.0-beta.0) (2025-03-05)


### Bug Fixes

* 修复使用时的typescript错误 ([6af25f2](https://github.com/lvzhao1995/vue-tianditu/commit/6af25f228b39a6688c1e94dabca31398de125554))


### chore

* 去除h函数的兼容处理，直接使用vue导出的渲染函数 ([8d67d58](https://github.com/lvzhao1995/vue-tianditu/commit/8d67d58828ab23529241bf343a896e7548b63439))


### BREAKING CHANGES

* 不再支持Vue 2



## [2.7.6](https://github.com/SoulLyoko/vue-tianditu/compare/v2.7.5...v2.7.6) (2022-05-09)

### Bug Fixes

- 地图拖拽冒泡 ([ce9a1e2](https://github.com/SoulLyoko/vue-tianditu/commit/ce9a1e2f3838f90e00524648d7530f69095eda9c))
- **infowindow:** 解决vue2中content属性的html类型警告 ([15f5fac](https://github.com/SoulLyoko/vue-tianditu/commit/15f5fac80b532add916aff531a21ebefea3c5935))
- **mousetool:** 修改marktool的鼠标事件 ([4456395](https://github.com/SoulLyoko/vue-tianditu/commit/4456395ee70d04eaee42c07c8e5610af733af933)), closes [#54](https://github.com/SoulLyoko/vue-tianditu/issues/54)

### Features

- 新增搜索组件事件 ([b4ee795](https://github.com/SoulLyoko/vue-tianditu/commit/b4ee79541bf3e59ee17f503c7fe534855d95e3f1)), closes [#52](https://github.com/SoulLyoko/vue-tianditu/issues/52)

## [2.7.5](https://github.com/SoulLyoko/vue-tianditu/compare/v2.7.4...v2.7.5) (2022-03-25)

### Bug Fixes

- 修复Copright控件不能添加的问题，并新增position属性 ([7fd3934](https://github.com/SoulLyoko/vue-tianditu/commit/7fd39340ee39ace508e4686a39729f79bf4ba496)), closes [#44](https://github.com/SoulLyoko/vue-tianditu/issues/44)

### Features

- 组件MarkerClusterer新增clusterclick事件 ([31211e2](https://github.com/SoulLyoko/vue-tianditu/commit/31211e2d5ab6ea5cccb53d4ab64095b0da0b6f6b)), closes [#36](https://github.com/SoulLyoko/vue-tianditu/issues/36)

## [2.7.4](https://github.com/SoulLyoko/vue-tianditu/compare/v2.7.3...v2.7.4) (2022-01-21)

## [2.7.3](https://github.com/SoulLyoko/vue-tianditu/compare/v2.7.2...v2.7.3) (2022-01-21)

### Features

- 控件 MapType 支持 position ([dad1794](https://github.com/SoulLyoko/vue-tianditu/commit/dad17944788d0b97dac69b667b67d660b49919d0)), closes [#40](https://github.com/SoulLyoko/vue-tianditu/issues/40)

### Bug Fixes

- 控件 MapType 的 mapTypes 属性失效问题 ([aa2f2d4](https://github.com/SoulLyoko/vue-tianditu/commit/aa2f2d4edfbb858d2659011bd3fe4c0e7576eb71)), closes [#40](https://github.com/SoulLyoko/vue-tianditu/issues/40)

## [2.7.2](https://github.com/SoulLyoko/vue-tianditu/compare/v2.7.1...v2.7.2) (2022-01-18)

### Bug Fixes

- markerClusterer 事件提交 extData, `e.layer.extData` ([ad5c922](https://github.com/SoulLyoko/vue-tianditu/commit/ad5c922d7c3568abc13fcf1bf0f8cc1af0929e5a))

## [2.7.1](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.9...v2.7.1) (2021-12-23)

### Bug Fixes

- build docs error ([f26710f](https://github.com/SoulLyoko/vue-tianditu/commit/f26710f234b78051fc9af985bba51f59d0f16498))
- docs render error ([66023e2](https://github.com/SoulLyoko/vue-tianditu/commit/66023e27bc92cc200e2d291de4ba8fd190241536))
- scripts ([0d746f3](https://github.com/SoulLyoko/vue-tianditu/commit/0d746f359095afda7525157f5227c80806a6b025))
- TdtSearch 在 Vue2 的显示问题 ([4ec7c88](https://github.com/SoulLyoko/vue-tianditu/commit/4ec7c8843fcc295858e51d07b3f5e4b643ef737d))

### Features

- TdtRoute ([295b32e](https://github.com/SoulLyoko/vue-tianditu/commit/295b32ec083d3e9a31e55dc141f95fdd2e1de6c3))

## [2.6.9](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.8...v2.6.9) (2021-12-07)

### Bug Fixes

- change window to globalThis ([2bc235c](https://github.com/SoulLyoko/vue-tianditu/commit/2bc235c2b7dbce7067e406978ad509e27c303f9c))
- globalThis.document ([519ba05](https://github.com/SoulLyoko/vue-tianditu/commit/519ba059ec555fe651fbbf05eb4f9a37c18c6271))

### Features

- TdtCartrack ([587f1b7](https://github.com/SoulLyoko/vue-tianditu/commit/587f1b7d70b8762cf28d3e34e211b1df80c7628c))

## [2.6.8](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.7...v2.6.8) (2021-11-22)

### Bug Fixes

- 优化 TdtSearch 样式 ([1c1ecd2](https://github.com/SoulLyoko/vue-tianditu/commit/1c1ecd26b4855cf1fe7bf928672bbc2f5d0996b0))
- TdtInfowindow 插槽显示问题 ([4627826](https://github.com/SoulLyoko/vue-tianditu/commit/4627826dbca59fa1d2b056b90352e5e78c4cd080))

## [2.6.7](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.6...v2.6.7) (2021-11-19)

### Bug Fixes

- TdtControl 循环渲染的问题 ([c06fbf0](https://github.com/SoulLyoko/vue-tianditu/commit/c06fbf0c2cdae8efe9cb4aeb8560b46cb9d47247))

### Features

- 新增内部函数 h-demi 兼容 vue2 渲染函数 ([59df021](https://github.com/SoulLyoko/vue-tianditu/commit/59df021eb89e04053cea1a562f2358a1a82c82dc))
- 新增支持 vue2 测试示例 ([e5eed07](https://github.com/SoulLyoko/vue-tianditu/commit/e5eed0768c0b1d8bf6aa29650d14441deee8075c))

## [2.6.6](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.5...v2.6.6) (2021-11-17)

### Bug Fixes

- TdtControl 中 slots.default 在 vue2 的错误 ([fb5b24a](https://github.com/SoulLyoko/vue-tianditu/commit/fb5b24a8e01b4cfcc034d2fc1fd72907cde2e73e))
- TdtSearch 对 Vue2 的兼容性 ([7aa1fde](https://github.com/SoulLyoko/vue-tianditu/commit/7aa1fdef7dcc7017e2f99e306b7f9086eb0fadc8))

## [2.6.5](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.4...v2.6.5) (2021-11-16)

### Bug Fixes

- initMousetool type error ([5c3387c](https://github.com/SoulLyoko/vue-tianditu/commit/5c3387c27c1c4e27a5409e91891a77778127951b))

### Features

- **docs:** 搜索组件文档 ([58d9582](https://github.com/SoulLyoko/vue-tianditu/commit/58d95829f7eeb80382f2cafadd78dd6997ff7fcc))
- TdtSearch 搜索组件 ([3c61cc5](https://github.com/SoulLyoko/vue-tianditu/commit/3c61cc55620f70e0c9be9034747d6658289138c6))

## [2.6.4](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.3...v2.6.4) (2021-11-12)

### Features

- **docs:** docs ([99e2feb](https://github.com/SoulLyoko/vue-tianditu/commit/99e2feb51c2055f6a8e2ebd7b3e1f31ee5c7f69a))
- markerClusterer,cloudMarkerCollection,gridlineLayer ([2925ada](https://github.com/SoulLyoko/vue-tianditu/commit/2925adab5322ddb642aa3bcec595c3f378fce87a))

## [2.6.3](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.2...v2.6.3) (2021-11-10)

### Bug Fixes

- 优化 mousetool 的 paintBrushTool 属性参数 ([891f957](https://github.com/SoulLyoko/vue-tianditu/commit/891f957840f1868ff7e5dfba86c866dd03771fdb))

### Features

- 信息窗口支持插槽 ([675e822](https://github.com/SoulLyoko/vue-tianditu/commit/675e8227764b393c1fbb7ac5b621049336690964))

## [2.6.2](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.1...v2.6.2) (2021-11-09)

### Features

- overlay visible prop ([ad4b3de](https://github.com/SoulLyoko/vue-tianditu/commit/ad4b3dea0ebe76d43c470be88bebf0b2e33c7829))
- paintBrushTool ([fef1a6c](https://github.com/SoulLyoko/vue-tianditu/commit/fef1a6cf902a44f467d2b73e14d6afdc9bb5e66c))

## [2.6.1](https://github.com/SoulLyoko/vue-tianditu/compare/v2.6.0...v2.6.1) (2021-11-09)

### Bug Fixes

- 修复 async setup 的问题 ([04faddc](https://github.com/SoulLyoko/vue-tianditu/commit/04faddce692eba94d2c4454f4ffe8b6a04ebc9e2))

# [2.6.0](https://github.com/SoulLyoko/vue-tianditu/compare/v2.5.1...v2.6.0) (2021-11-09)

## [2.5.1](https://github.com/SoulLyoko/vue-tianditu/compare/v2.5.0...v2.5.1) (2021-11-06)

### Bug Fixes

- 加载 api 的地址改为 https ([b47c4ce](https://github.com/SoulLyoko/vue-tianditu/commit/b47c4ce236bff61226520cef728da54d3a6ccada))

# [2.5.0](https://github.com/SoulLyoko/vue-tianditu/compare/v2.4.0...v2.5.0) (2021-11-05)

### Features

- 移除 initApiLoader,新增 useApiLoader ([bd93691](https://github.com/SoulLyoko/vue-tianditu/commit/bd936915da66f71797b68cdb738d031a6c226821))

# [2.4.0](https://github.com/SoulLyoko/vue-tianditu/compare/v2.3.0...v2.4.0) (2021-11-05)

### Features

- 新增类型定义 ([87d1781](https://github.com/SoulLyoko/vue-tianditu/commit/87d1781e4cfedea84cff780568237befde2d4ca1))
- **docs:** update changelog ([0074623](https://github.com/SoulLyoko/vue-tianditu/commit/0074623bd3a1337f6d067137cd7c6181171a3975))

# [2.3.0](https://github.com/SoulLyoko/vue-tianditu/compare/v2.2.1...v2.3.0) (2021-10-23)

### Bug Fixes

- 打开信息窗口的方式改为 target ([869aeb4](https://github.com/SoulLyoko/vue-tianditu/commit/869aeb49297b958b1d939bb02493e5015d9620f7))

## [2.2.1](https://github.com/SoulLyoko/vue-tianditu/compare/v2.1.1...v2.2.1) (2021-10-23)

### Features

- new component `tdt-mousetool` ([ff7a0c2](https://github.com/SoulLyoko/vue-tianditu/commit/ff7a0c25a015733d62951ca28a85ebc47cba83e1))

## [2.1.1](https://github.com/SoulLyoko/vue-tianditu/compare/v2.1.0...v2.1.1) (2021-10-16)

### Bug Fixes

- support vue2(test) ([5373e61](https://github.com/SoulLyoko/vue-tianditu/commit/5373e610ac67fe8760245ab711f24714038dc32b))

# [2.1.0](https://github.com/SoulLyoko/vue-tianditu/compare/v2.0.5...v2.1.0) (2021-10-16)

### Features

- support vue2(test) ([57d5eaa](https://github.com/SoulLyoko/vue-tianditu/commit/57d5eaaa07786c109bae4227cfbcff6baa638d52))

## [2.0.5](https://github.com/SoulLyoko/vue-tianditu/compare/v2.0.4...v2.0.5) (2021-10-15)

### Features

- 调整初始化组件的方式，实现组件的动态加载 ([4b952a9](https://github.com/SoulLyoko/vue-tianditu/commit/4b952a92344f366906ce135b456ad01da39b572e))

## [2.0.4](https://github.com/SoulLyoko/vue-tianditu/compare/v2.0.3...v2.0.4) (2021-10-15)

### Bug Fixes

- **docs:** tilelayer ([6377eaa](https://github.com/SoulLyoko/vue-tianditu/commit/6377eaabc838470cb436f8ebfccb0205f25a5add))
- rename and export tilelayer components ([3b93ba3](https://github.com/SoulLyoko/vue-tianditu/commit/3b93ba34a16a7a5efdca00438d14d93297d5109c))

### Features

- **docs:** overlay,tilelayer ([ae401d4](https://github.com/SoulLyoko/vue-tianditu/commit/ae401d467e6359435fbd08247056fd199c48ffe4))

## [2.0.3](https://github.com/SoulLyoko/vue-tianditu/compare/v2.0.2...v2.0.3) (2021-10-14)

## [2.0.2](https://github.com/SoulLyoko/vue-tianditu/compare/v2.0.1...v2.0.2) (2021-10-13)

### Features

- tilelayer component ([0b02e92](https://github.com/SoulLyoko/vue-tianditu/commit/0b02e923ad2c22687e99ca8fbb57da265c412a49))

## [2.0.1](https://github.com/SoulLyoko/vue-tianditu/compare/v2.0.0-beta.1...v2.0.1) (2021-08-12)

### Features

- new component "tdt-control" ([86c439c](https://github.com/SoulLyoko/vue-tianditu/commit/86c439c5de89795a96972b67f7fb74c518630acb))

# 2.0.0-beta.1 (2021-08-10)

- refactor with vue3
