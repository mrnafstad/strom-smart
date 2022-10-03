<template>
    <div class="calculator">
        Calculator here
        <div class="calculator__col">
            <div class="calculator__row">
                <Input
                    v-model="snitSpotPrice"
                    type="number"
                    label="Snittpris"
                />
                <Input
                    v-model="startGrense"
                    type="number"
                    label="Startgrense støtte"
                />
                <Input
                    v-model="prosentStottes"
                    type="number"
                    label="Prosent som støttes"
                />
                <Input
                    v-model="spotPrisTime"
                    type="number"
                    label="Spotpris denne timen"
                />
            </div>
            <span>Sluttpris strøm: {{ sluttPris.toFixed(2) }} {{ prisEnhet}}</span>
        </div>
        <div class="calculator__col">
            <Input
                v-model="kwH"
                type="number"
                label="kWh denne timen"
            />
            <span>Pris denne timen: {{ prisTime.toFixed(2) }} {{ prisEnhet }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from './Input.vue';
import { usePowerPriceCalculator, useMVAPowerPrices } from '../composables/usePowerPriceCalculator'

const { prisEnhet, prisTime, sluttPris, startGrense, spotPrisTime, snitSpotPrice, prosentStottes, kwH } = usePowerPriceCalculator()
const { includeMVAInAveragePrice, includeMVAInCurrentPrice } = useMVAPowerPrices()

/**
 * entsoe sender nok data i euro/ Mwh
 * https://transparency.entsoe.eu/transmission-domain/r2/dayAheadPrices/show?name=&defaultValue=false&viewType=GRAPH&areaType=BZN&atch=false&dateTime.dateTime=31.08.2022+00:00|CET|DAY&biddingZone.values=CTY|10YNO-0--------C!BZN|10YNO-1--------2&resolution.values=PT15M&resolution.values=PT30M&resolution.values=PT60M&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2)
 *
 */
</script>

<style scoped lang="scss">
.calculator {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__col {
        width: 50vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px;
        border: 1px solid rgba(0, 137, 107, 0.822);
        border-radius: 3px;
    }

    &__row {
        margin: 20px;
    }
}

@media (max-width: 600px) {
    .calculator__col {
        flex-direction: column;
        width: calc(100vw - 100px);
    }
}
</style>