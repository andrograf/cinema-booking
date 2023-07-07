<template>
    <div>
        <div v-for="r in rooms">
            <h1>{{ r.name }}</h1>
        </div>
        <h3>Chairs</h3>
        <chair/>
        
    </div>
</template>

<script setup>
 const {data: rooms} = await useFetch('/api/room');
 const {data: seats} = await useFetch('/api/seat');

</script>