<template>
    <div>
        <div v-for="r in rooms">
            <h1>{{ r.name }}</h1>
        </div>
        <h3>Chairs</h3>
        <div v-for="r in rooms">
            <div v-for="ch in chairs">
                <div v-if="ch.roomId == r.roomId">
                    <chair status="{{ ch.status }}" chairNum="{{ chair.chairId }}"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 const {data: rooms} = await useFetch('/api/room');
 const {data: chairs} = await useFetch('/api/chair/chair');

</script>

<style scoped>

</style>