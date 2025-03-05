<template>
  <button @click="state.edit = !state.edit" class="demo-button">editable:{{ state.edit }}</button>
  <button @click="state.visible = !state.visible" class="demo-button">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-polygon
        :edit="state.edit"
        :opacity="1"
        :path="state.path"
        :visible="state.visible"
        color="black"
      ></tdt-polygon>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({ name: "demo-polygon" });
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  path: [
    [113.22716, 23.14162],
    [113.26973, 23.14225],
    [113.27316, 23.105],
    [113.23265, 23.11131]
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
