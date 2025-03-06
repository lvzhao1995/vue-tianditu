<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :map-style="isDark ? 'black' : undefined" :zoom="state.zoom"></tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useData } from "vitepress";

const { isDark } = useData();
defineOptions({ name: "demo-map" });
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
