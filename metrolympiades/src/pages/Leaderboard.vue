<script setup>
import {ref} from "vue";

const leaderboards = ref([]);

const loading = ref(false);

function fetchLeaderboard(){
    loading.value = true;
    fetch("http://localhost:3000/ranking")
    .then((response) => response.json())
    .then((data) =>{
        leaderboards.value = data;
        loading.value = false;
        console.log(leaderboards.value)
    });
}

fetchLeaderboard();

</script>

<template>

    <div v-if="loading" class="loader-container">
        <div class="spinner"></div>
        <p>Chargement du classement...</p>
    </div>

    <div v-if="!loading" class="leaderboard">
        <h1> Classement général </h1>
        <ul>
            <li v-for="(leaderboard,index) in leaderboards" :key="leaderboard.team">
                <span class="rank">
                    <span v-if="index === 0">🥇</span>
                    <span v-else-if="index === 1">🥈</span>
                    <span v-else-if="index === 2">🥉</span>
                    <span v-else>{{ index + 1 }}</span>
                </span>
                <span class="team">{{ leaderboard.team }}</span>
                <span class="points">{{ leaderboard.points }}pts</span>
            </li>
        </ul>
    </div>

</template>