<template>
  <button class="demo-button" @click="state.draggable = !state.draggable">draggable:{{ state.draggable }}</button>
  <button class="demo-button" @click="state.visible = !state.visible">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-marker :draggable="state.draggable" :position="state.marker1" :visible="state.visible"></tdt-marker>
      <tdt-marker :draggable="state.draggable" :icon="state.icon" :position="state.marker2"></tdt-marker>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { withBase } from "vitepress";
import { reactive } from "vue";

defineOptions({ name: "demo-marker" });
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  draggable: false,
  visible: true,
  marker1: [113.280637, 23.125178],
  marker2: [113.300037, 23.125178],
  icon: {
    iconUrl: withBase("/marker_red.png"),
    iconSize: [18, 26],
    iconAnchor: [9, 26]
  }
});
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
