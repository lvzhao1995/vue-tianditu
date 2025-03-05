<template>
  <button class="demo-button" @click="state.visible = !state.visible">visible:{{ state.visible }}</button>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-label :position="state.center" :visible="state.visible" text="Hello World!"></tdt-label>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({ name: "demo-label" });
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11,
  visible: true
});
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
