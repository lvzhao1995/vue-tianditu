<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-control>
        <tdt-route></tdt-route>
      </tdt-control>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({
  name: "demo-route"
});
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11
});
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 600px;
}
</style>
