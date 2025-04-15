<script setup>

  import AppNavbar from "@/components/AppNavbar.vue";
  /*import { computed } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const showNavbar = computed(() => {
    return !["/login", "/register"].includes(route.path);
  });*/

</script>

<template>

  <AppNavbar/>

</template>

<style scoped>
/* v-if="showNavbar" */
</style>
