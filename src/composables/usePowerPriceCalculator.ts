import { PRICE_UNIT } from './../predefinitions/strings';
import { HELP_START_AT_ORE, HELP_COVERS_FRACTION } from './../predefinitions/numbers';
import { computed, ref } from 'vue';

// Make this reusable with shared states between components

const includeMVAInAveragePrice = ref(false)
const includeMVAInCurrentPrice = ref(false)

const snitSpotPrice = ref<number>(200)
const spotPrisTime = ref<number>(300)
const startGrense = ref<number>(HELP_START_AT_ORE)
const prosentStottes = ref<number>(HELP_COVERS_FRACTION)

const prisEnhet = ref(PRICE_UNIT)

const getPriceWithAddedTax = (price: number, withTaxes: boolean) => {
    return withTaxes ? price*1.25 : price
}

const getPriceWithWithdrawnTax = (price: number, withTaxes: boolean) => {
    return withTaxes ? price/1.25 : price
}

export const usePowerPriceCalculator = () => {

    const sluttPris = computed(() => {
        const stottes = getPriceWithWithdrawnTax(snitSpotPrice.value, includeMVAInAveragePrice.value) - startGrense.value
        return snitSpotPrice.value < startGrense.value ? getPriceWithAddedTax(spotPrisTime.value, includeMVAInCurrentPrice.value) : getPriceWithAddedTax(spotPrisTime.value, includeMVAInCurrentPrice.value) - (stottes) * prosentStottes.value
    })

    const kwH = ref<number>(1)

    const prisTime = computed(() => {
        return sluttPris.value * kwH.value
    })

    return {prisEnhet, prisTime, sluttPris, startGrense, spotPrisTime, snitSpotPrice, prosentStottes, kwH}
}

export const useMVAPowerPrices = () => {
    return { includeMVAInAveragePrice, includeMVAInCurrentPrice}
}