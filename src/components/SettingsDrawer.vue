<template>
    <div
        class="settings-drawer"
        :class="{ 'hide-drawer': !showSettings}"
    >
        <div class="settings-drawer--section">
            <Button @click="$emit('closeSettings')">
                Close
            </Button>
        </div>
        <div class="settings-drawer--section">
            Med å skru på bryterne under, indikerer du at prisene du oppgir er inkludert mva.
            <br>
            Om du har disse på eller
            av avhenger av hvor og hvordan verdiene hentes, men typisk er kun én av dem på om gangen.
            <div class="settings-drawer--section-item">
                Fjern mva fra snittpris
                <Toggle v-model="includeMVAInAveragePrice" />
            </div>
            <div class="settings-drawer--section-item">
                Legg på mva i spotpris
                <Toggle v-model="includeMVAInCurrentPrice" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Toggle from '@vueform/Toggle';
import Button from './Button.vue'
import { useMVAPowerPrices } from '../composables/usePowerPriceCalculator';

const { includeMVAInAveragePrice, includeMVAInCurrentPrice } = useMVAPowerPrices()

const props = defineProps<{
    showSettings: boolean
}>()

</script>

<style lang="scss">
$drawer-width: 350px;

.settings-drawer {
    background-color: rgba(0, 137, 107, 1);
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: $drawer-width;
    display: flex;
    flex-direction: column;
    transition: left 300ms ease-in-out;
    font-family: monospace;


    &--section {
        margin: 10px;

        &-item {
            margin: 10px 0;
        }
    }
}

.hide-drawer {
    left: -$drawer-width;
}
</style>
<style src="@vueform/toggle/themes/default.css">

</style>