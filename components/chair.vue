<template>
    <div>
        <p>chair</p>
        <p>status: {{status}}</p>
        <button onclick="increase()">Reserve</button>
    </div>
  </template>



<script setup>
let status;
let count = 0;
function increase(){
    count++;
    alert(count);
}
function reset(){
    count = 0;
}
switch(count){
    case 1:
        status = "reserved";
        setTimeout(reset, 120000);
        break;
    case 2:
        status = "sold";
        break;
    default:
        status = "free";
        break;
}
</script>