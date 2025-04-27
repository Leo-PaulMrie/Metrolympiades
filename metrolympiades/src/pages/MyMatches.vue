<script setup>
  import MyMatchesCard from "@/components/MyMatchesCard.vue";
  import { ref, computed } from "vue";
  import { useUserData } from "@/composables/useUserData";
  import {useRouter} from "vue-router";
  const { user, token } = useUserData();

  const router = useRouter();
  const matches = ref([]);
  const loading = ref(false);

  
  console.log("VAL");
      console.log(user.value.team.name);
  const teamMatches = computed(() =>
    matches.value.filter(
      (match) => match.team1 === user.value.team.name || match.team2 === user.value.team.name
    )
  );

  function fetchMatchesResults() {
    loading.value = true;
    fetch("http://localhost:3000/matches/me", {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        matches.value = data;
        loading.value = false;
      });
  }

function addMatch(){ 
  router.push("/game");
}

fetchMatchesResults();

</script>

<template>
  <div class="title">
    <h1>Mes Matchs</h1>
    <button @click="addMatch" style="cursor:pointer" >Ajouter un match</button>
  </div>

  <div class="cards">
    <div v-if="loading" class="loader-container">
        <div class="spinner"></div>
        <p>Chargement des matchs...</p>
    </div>
    <p v-else-if="!teamMatches.length">Aucun match pour le moment.</p>

    <MyMatchesCard
      v-for="match in teamMatches"
      :key="match.id"
      :match="match"
    />
  </div>
</template>


<style scoped>
  .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: black;
  font-weight: bold;
  margin: 0;
}

button {
  background-color: black;
  color: white;
  border-radius: 0.75em;
  padding-inline: 1em;
  padding-block: 1em;
  font-size: 1em;
  border: none;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #333;
  cursor: pointer;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: center;
  padding: 1em;
}

.cards p {
  font-style: italic;
  color: #666;
}
</style>