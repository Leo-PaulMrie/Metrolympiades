<script setup>
  import MyMatchesCard from "@/components/MyMatchesCard.vue";
  import { ref, computed } from "vue";
  import { useUserData } from "@/composables/useUserData";

  const { user, token } = useUserData();

  const matches = ref([]);
  const loading = ref(false);
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
        console.log(user.value)
        matches.value = data;
        loading.value = false;
      });
  }

  fetchMatchesResults();
</script>

<template>
  <div class="title">
    <h1>Mes Matchs</h1>
    <button>Ajouter un match</button>
  </div>

  <div class="cards">
    <p v-if="loading && !teamMatches.length">Chargement...</p>
    <p v-else-if="!teamMatches.length">Aucun match pour le moment.</p>

    <MyMatchesCard
      v-for="match in teamMatches"
      :key="match.id"
      :match="match"
    />
  </div>
</template>


<style scoped>
  h1{
    color: black;
    font-weight: bold;
    margin-right: 7em;
  }

  button{
    background-color: black;
    color: white;
    border-radius: 0.75em;
    padding-inline: 1em;
    padding-block: 1em;
    font-size: 1em;
  }

  .title{
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  }

  .cards{
    display: flex;
    justify-content: center;
    padding: 1em;
  }
</style>