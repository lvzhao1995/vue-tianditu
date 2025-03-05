<template>
  <button @click="state.edit = !state.edit" class="demo-button">editable:{{ state.edit }}</button>
  <button @click="state.visible = !state.visible" class="demo-button">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-circle
        :center="state.center"
        :edit="state.edit"
        :opacity="1"
        :radius="3000"
        :visible="state.visible"
        color="black"
      ></tdt-circle>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({ name: "demo-circle" });

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
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
