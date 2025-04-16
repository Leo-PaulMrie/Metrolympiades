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
    <div class="navbar_user">
      <b class="title">Metrolympiades</b>
      <b class="team"> user.teamName </b>
    </div>
    <div class="menus">
      <div class="menu-item">
        <TrophyIcon class="icon" />
        <a>Classement général</a>
      </div>
      <div class="menu-item">
        <UserGroupIcon class="icon" />
        <a>Mon équipe</a>
      </div>
      <div class="menu-item">
        <AdjustmentsHorizontalIcon class="icon" />
        <a>Mes matchs</a>
      </div>
      <div class="menu-item">
        <ArrowRightOnRectangleIcon class="icon" />
        <a>Se déconnecter</a>
      </div>
    </div>
  </header>

</template>

<style scoped>
/*
v-if="user"*/

.navbar {
  width: 25em;
  background-color: #1f2937;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  position: sticky;
  top: 0;
}

.navbar_user{
  margin-bottom: 2em;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
}

.team {
  font-size: 1.5rem;
}

.menus {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.5em;
  margin-left: 1em;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.menu-item a {
  color: white;
  text-decoration: none;
}

.icon {
  width: 2.5em;
  height: 2.5em;
}

</style>
