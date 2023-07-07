<template>
    <div>
        <div v-for="r in rooms">
            <h1>{{ r.name }}</h1>
        </div>
        <h3>Chairs</h3>
        <div v-for="r in rooms">
            <div v-for="s in seats">
                <div v-if="s.roomId == r.roomId">
                    <p>{{ s.status }} szek {{ s.chairId }}</p>
                    <chair/>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
 const {data: rooms} = await useFetch('/api/room');
 const {data: seats} = await useFetch('/api/seat');
 
</script>