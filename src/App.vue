<script setup lang="ts">
import StromCalculator from './components/StromCalculator.vue'
const APP_TITLE = "StrømSmart"

/**
 * Kanskje bruke elvia sitt nettleie api etter hvert?
 */
</script>

<template>
  <div class="strom-smart__main">
    <h2>
      {{
          APP_TITLE
      }}
    </h2>
    <StromCalculator />
  </div>
</template>

<style>
body {
  margin: 0;
}

.strom-smart__main {
  height: calc(100vh - 20px);
  width: 100vw;
  background-color: #242424;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: snow;
}

h2 {
  color: yellow;
}
</style>
