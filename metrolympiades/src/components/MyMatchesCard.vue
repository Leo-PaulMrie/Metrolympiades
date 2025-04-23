<script setup>
  const props = defineProps(["match"]);
</script>

<template>
  <div class="card">

    <div class="header">
      <span class="activity"> {{ match.activity }} </span>
      <span class="time"> {{ match.startedAt.slice(11, 16) }} </span>
    </div>

    <div class="teams">
      <div class="team">
        <span class="team-name"> {{ match.team1 }} </span>
        <span class="score"> {{ match.team1Score }} </span>
      </div>

      <div class="team">
        <span class="team-name"> {{ match.team2 }} </span>
        <span class="score"> {{ match.team2Score }} </span>
      </div>
    </div>

  </div> 
</template>

<style scoped>
  .card {
    border-radius: 1.25em;
    padding: 1.25em 1.5em;
    width: 18.75em;
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 1.25em; 
    background: #ffffff;
    box-shadow: 0 0.375em 1.125em rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: translateY(-0.1875em);
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    color: #555;
    font-weight: 500;
  }

  .teams {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
  }

  .team {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 0;
    border-bottom: 0.0625em solid #eee;
  }

  .team:last-child {
    border-bottom: none;
  }

  .team-name {
    color: #888;
    font-size: 1.05rem;
    transition: color 0.3s ease;
  }

  .bold {
    font-weight: 600;
    color: #333;
  }
    
  .score {
    font-weight: 700;
    font-size: 1.2rem;
    color: #222;
  }

  .activity {
    font-size: 1.2rem;
  }
</style>
