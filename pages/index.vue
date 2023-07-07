<template>
    <div>
      <h1>Home</h1>
      <h3>Book seats</h3>
      <div v-for="r in rooms">
        <NuxtLink :to="`/room/${r.roomId}`">{{ r.name }}</NuxtLink>
      </div>
    </div>
  </template>
  
<script setup>
 const {data: rooms} = await useFetch('/api/room');
</script>
  
  <style scoped>
  p {
    margin-top: 20px;
  }
  </style>
  