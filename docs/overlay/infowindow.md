# 信息窗口

## 示例

<demo-infowindow></demo-infowindow>

::: details 查看代码
<<< @/.vitepress/components/demo-infowindow/index.vue
:::

## 属性

| 属性             | 类型                 | 默认值   | 说明                                                                  |
|----------------|--------------------|-------|---------------------------------------------------------------------|
| minWidth       | Number             | 50    | 弹出框的最小宽度                                                            |
| maxWidth       | Number             | 300   | 弹出框的最大宽度                                                            |
| maxHeight      | Number             |       | 设置后，如果内容超过弹出窗口的给定高度则产生一个可以滚动的容器                                     |
| autoPan        | Boolean            | false | 是否开启信息窗口打开时地图自动移动（默认关闭）                                             |
| closeButton    | Boolean            | true  | 控制弹出窗口中出现的关闭按钮                                                      |
| offset         | Array              | [0,7] | 弹出窗口位置的补偿值在同一图层中打开弹出窗口时对于控制锚点比较有用                                   |
| autoPanPadding | Array              | [5,5] | 在地图视图自动平移产生后弹出窗口和地图视图之间的边缘                                          |
| closeOnClick   | Boolean            | false | 是否开启点击地图关闭信息窗口（默认关闭）                                                |
| content        | String/HTMLElement | ""    | 信息窗口的内容可以是字符串或 HTML                                                 |
| target         | Object/Array       |       | 打开信息窗口的覆盖物对象或经纬度数组，传入数组时自行调整 offset 参数。支持.sync(vue2)和 v-model(vue3) |

## 事件

| 事件         | 参数                     | 描述                |
|------------|------------------------|-------------------|
| close      | ({type,target,lnglat}) | 信息窗口被关闭时触发此事件     |
| open       | ({type,target,lnglat}) | 信息窗口被打开时触发此事件     |
| clickclose | ({type,target})        | 点击信息窗口的关闭按钮时触发此事件 |

## 插槽

| 名称      | 说明              |
|---------|-----------------|
| default | 传入默认插槽则作为信息窗口显示 |
