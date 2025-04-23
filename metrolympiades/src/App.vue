<script setup>

import AppNavbar from './components/AppNavbar.vue';
import Leaderboard from './pages/Leaderboard.vue';

</script>

<template>
  <div class="layout">
    <AppNavbar/>
    <div class="page-content">
      <RouterView />
    </div>
  </div>
    
</template>

<style scoped>
/* v-if="showNavbar" */
  .layout {
    display: flex;
    min-height: 100vh;
  }

  .page-content {
    flex: 1;
    padding: 1rem;
    background-color: white;
  }

</style>


