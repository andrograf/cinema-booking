<template>
    <div>
      <h1>Home</h1>
      <div v-for="r in rooms">
        <NuxtLink to="/room/{{r.roomId}}">Book seats</NuxtLink>
      </div>
    </div>
  </template>
  
<script setup>
 const {data: rooms} = await useFetch('~/server/api/room')


</script>
  
  <style scoped>
  p {
    margin-top: 20px;
  }
  </style>
  