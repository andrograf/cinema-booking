<template>
    <div>
        <p>{{chairNum}}.chair</p>
        <p>status: {{status}}</p>
        <div v-if="status == 'szabad'">
            <button >Add to cart</button>
        </div>
        <div v-if="status == 'foglalt'">
            <button v-bind:disabled="true">Not available</button>
        </div>
        <div v-if="status == 'eladva'">
            <button v-bind:disabled="true">sold out</button>
        </div>
    </div>
</template>



<script setup>

</script>