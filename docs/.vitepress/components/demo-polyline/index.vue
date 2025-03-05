<template>
  <button @click="state.edit = !state.edit" class="demo-button">editable:{{ state.edit }}</button>
  <button @click="state.visible = !state.visible" class="demo-button">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-polyline
        :edit="state.edit"
        :opacity="1"
        :path="state.path"
        :visible="state.visible"
        color="black"
      ></tdt-polyline>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({ name: "demo-polyline" });
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  path: [
    [113.32839, 23.14352],
    [113.280637, 23.125178],
    [113.3332, 23.11889]
  ],
  edit: false,
  visible: true
});
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
