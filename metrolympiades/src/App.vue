<script setup>
import MyMatches from './pages/MyMatches.vue'
</script>

<template>
  <div class="layout">
    <!--<AppNavbar/>-->
    <div class="page-content">
      <MyMatches />
    </div>
  </div>
    
</template>

<style scoped>
/* v-if="showNavbar" */
  .layout {
    display: flex; /* mettre navbar à gauche */
    min-height: 100vh;
  }

  .page-content {
    flex: 1;
    padding: 1rem;
    background-color: white;
  }

</style>