<template>
    <div v-for="r in rooms">
        <div v-for="s in seats">
            <div v-if="s.roomId == r.roomId">
                <p>{{s.name}}</p>
                <p>status: {{s.status}}</p>
                <div v-if="s.status == 'szabad'">
                    <button onclick="changeStatus()">Add to cart</button>
                </div>
                <div v-if="s.status == 'foglalt'">
                    <button v-bind:disabled="true" title="Check back later!">Not available</button>
                </div>
                <div v-if="s.status == 'eladva'">
                    <button v-bind:disabled="true">{{s.status}}</button>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import { clearInterval } from 'timers';

 const {data: rooms} = await useFetch('/api/room');
 const {data: seats} = await useFetch('/api/seat');

 function changeStatus() {
     console.log("foglalt");
     let date = Date.now();
     let newDate = addMinutes(date, 2);
     let x = setInterval(function(){
         let distance = newDate - date;
         if (distance < 0){
             clearInterval(x);
             console.log("szabad");
        }
    })
 }
 function addMinutes(date, minutes){
    date.setMinutes(date.getMinutes + minutes);
    return date
 }
</script>