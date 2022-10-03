<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style>
.button {
    border: 2px solid snow;
    background-color: rgba(0, 137, 107, 1);
    border-radius: 4px;
    color: snow;
    padding: 10px;
    cursor: pointer;
}
</style>