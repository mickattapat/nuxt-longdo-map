<!-- Please remove this file from your project -->
<template>
  <div>
    <p>test map</p>
    <longdo-map>
    <longdo-map-polygon :location="locationList" :lineWidth="2" :lineColor="'rgba(0, 0, 0, 1)'"
      :fillColor="'rgba(255, 0, 0, 0.4)'" />
  </longdo-map>
  </div>
</template>

<script>
export default {
  name: 'NuxtLongdoMap',
  data() {
    return {
      locationList: [
        { lon: 99, lat: 14 },
        { lon: 100, lat: 13 },
        { lon: 102, lat: 13 },
        { lon: 103, lat: 14 }
      ]
    }
  }
}
</script>
