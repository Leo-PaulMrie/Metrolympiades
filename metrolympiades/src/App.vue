<script setup>
</script>

<template>
  <div class="layout">
    <!--<AppNavbar/>-->
    <div class="page-content">
      <RouterView />
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


