<script setup lang="ts">
import StromCalculator from './components/StromCalculator.vue'
import SettingsDrawer from './components/SettingsDrawer.vue';
import Button from './components/Button.vue'
import { ref } from 'vue';
const APP_TITLE = "StrømSmart"

const showSettings = ref(false)

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
    <Button
      class="strom-smart__main__settings-toggle"
      @click="showSettings = true"
    >
      Settings
    </Button>
    <SettingsDrawer
      :showSettings="showSettings"
      @close-settings="showSettings = false"
    />
  </div>
</template>

<style lang="scss">
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

  &__settings-toggle {
    position: fixed;
    top: 10px;
    left: 10px;
  }
}

h2 {
  color: yellow;
}
</style>
