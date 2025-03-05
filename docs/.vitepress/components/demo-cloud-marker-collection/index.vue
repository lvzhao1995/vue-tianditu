<template>
  <div class="mapDiv">
    <tdt-map :center="state.center" :zoom="state.zoom">
      <tdt-cloud-marker-collection
        :lnglats="state.lnglats"
        SizeType="small"
        color="blue"
        @click="onClick"
      ></tdt-cloud-marker-collection>
      <tdt-infowindow v-model:target="state.target" :content="state.content"></tdt-infowindow>
    </tdt-map>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import dataCollection from "./data";

defineOptions({ name: "demo-cloud-marker-collection" });

const state = reactive({
  center: [108.95, 34.27],
  zoom: 4,
  lnglats: dataCollection.data,
  target: null,
  content: ""
});

function onClick(e: any) {
  console.log(e);
  state.target = e.layer;
  state.content = `[${e.lnglat.lng}, ${e.lnglat.lat}]`;
}
</script>

<style scoped>
.mapDiv {
  width: 100%;
  height: 600px;
}
</style>
