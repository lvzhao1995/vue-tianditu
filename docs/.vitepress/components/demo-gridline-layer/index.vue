<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-gridline-layer></tdt-gridline-layer>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({ name: "demo-gridline-layer" });

const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11
});
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 300px;
}
</style>
