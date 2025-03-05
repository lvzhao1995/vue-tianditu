<template>
  <button @click="state.edit = !state.edit" class="demo-button">editable:{{ state.edit }}</button>
  <button @click="state.visible = !state.visible" class="demo-button">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-rectangle
        :bounds="state.bounds"
        color="black"
        :opacity="1"
        :edit="state.edit"
        :visible="state.visible"
      ></tdt-rectangle>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({ name: "demo-rectangle" });
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  bounds: [
    [113.22716, 23.14162],
    [113.27316, 23.105]
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
