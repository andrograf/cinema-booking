<template>
    <div v-for="r in rooms">
        <div v-for="s in seats">
            <div v-if="s.roomId == r.roomId">
                <p>{{s.name}}</p>
                <p>status: {{s.status}}</p>
                <div v-if="s.status == 'szabad'">
                    <button >Add to cart</button>
                </div>
                <div v-if="s.status == 'foglalt'">
                    <button v-bind:disabled="true">Not available</button>
                </div>
                <div v-if="s.status == 'eladva'">
                    <button v-bind:disabled="true">sold out</button>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
 const {data: rooms} = await useFetch('/api/room');
 const {data: seats} = await useFetch('/api/seat');
</script>