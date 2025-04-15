<script setup>
  import { TrophyIcon, UserGroupIcon, AdjustmentsHorizontalIcon, ArrowRightOnRectangleIcon } from "@heroicons/vue/24/outline"
  /*import { useUserData } from "@/composables/useUserData";

  const { user } = useUserData();

  function logout() {
    localStorage.removeItem("user");
    location.reload();
  }*/
</script>

<template>

  <header class="navbar">

    <div class="navbar_user" >
      <b> Metrolympiades </b>
      <!--<h2>{{ user.teamName }}</h2>-->
    </div>

    <div class="menus">
      <TrophyIcon />
      <a>Classement général</a>
      <UserGroupIcon />
      <a>Mon équipe</a>
      <AdjustmentsHorizontalIcon />
      <a>Mes matchs</a>
      <ArrowRightOnRectangleIcon />
      <a>Se déconnecter</a>
    </div>

  </header>

</template>

<style scoped>
/*
v-if="user"*/

 /* .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    background-color: var(--color-bg-primary);
    z-index: 1;
  }

  .navbar__user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }*/

  .menus {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
  }

</style>
