<template>
  <button @click="openTool('markTool')" class="demo-button">标点</button>
  <button @click="openTool('polygonTool')" class="demo-button">画面</button>
  <button @click="openTool('polylineTool')" class="demo-button">画线</button>
  <button @click="openTool('rectangleTool')" class="demo-button">画矩形</button>
  <button @click="openTool('circleTool')" class="demo-button">画圆</button>
  <button @click="openTool('paintBrushTool')" class="demo-button">画笔</button>
  <br />
  <button @click="clearTool('markTool')" class="demo-button">清除标点</button>
  <button @click="clearTool('polygonTool')" class="demo-button">清除面</button>
  <button @click="clearTool('polylineTool')" class="demo-button">清除线</button>
  <button @click="clearTool('rectangleTool')" class="demo-button">清除矩形</button>
  <button @click="clearTool('circleTool')" class="demo-button">清除圆</button>
  <button @click="clearTool('paintBrushTool')" class="demo-button">清除画笔</button>
  <button @click="clearTool()" class="demo-button">清除全部</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-mousetool ref="mousetoolRef" :markTool="{ follow: true }" @mark-mouseup="onMarkMouseup"></tdt-mousetool>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

defineOptions({ name: "demo-mousetool" });
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11
});

const mousetoolRef = ref();

function openTool(toolName: string) {
  mousetoolRef.value?.open(toolName);
}

function clearTool(toolName?: string) {
  if (toolName) {
    mousetoolRef.value?.clear(toolName);
  } else {
    mousetoolRef.value?.clearAll();
  }
}

function onMarkMouseup(e: T.MarkToolEvent) {
  console.log(e);
}
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
