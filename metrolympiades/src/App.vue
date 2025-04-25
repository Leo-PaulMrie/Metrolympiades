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

  template{
    height: 100%;
  }

  .layout {
    display: flex;
    height: 100%;
  }

  .page-content {
    flex: 1;
    padding: 1rem;
    background-color: white;
  }

</style>


