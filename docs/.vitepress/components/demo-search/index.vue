<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-control>
        <tdt-search @search-complete="searchComplete" @poi-click="poiClick" @suggest-click="suggestClick"></tdt-search>
      </tdt-control>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineOptions({
  name: "demo-search"
});
const state = reactive({
  center: [113.280637, 23.125178],
  zoom: 11
});

function searchComplete(result: T.LocalSearchResult) {
  console.log(result);
}
function poiClick(poi: T.LocalSearchPoi) {
  console.log(poi);
}
function suggestClick(suggest: T.LocalSearchSuggest) {
  console.log(suggest);
}
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 600px;
}
</style>
