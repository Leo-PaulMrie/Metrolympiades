<script setup>
  import { TrophyIcon, UserGroupIcon, AdjustmentsHorizontalIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/outline"
  import { useRouter } from "vue-router";
  import { useUserData } from "@/composables/useUserData";

  const { user, refreshUser } = useUserData();

  function logout() {
    router.push("/login");
    localStorage.removeItem("user");
    refreshUser();
  }

  const router = useRouter();
  
</script>

<template>

<header class="navbar">
    <div class="navbar_user">
      <b class="title">Metrolympiades</b>
      <b class="team" v-if="user"> {{ user.team.name }} </b>
    </div>
    <div class="menus">
      <div class="menu-item" v-if="!user" @click="router.push('/login')">
        <ArrowRightOnRectangleIcon class="icon" />
        <a>Se connecter</a>
      </div>
      <div class="menu-item" @click="router.push('/')">
        <TrophyIcon class="icon" />
        <a>Classement général</a>
      </div>
      <div class="menu-item" v-if="user" @click="router.push('/team')">
        <UserGroupIcon class="icon" />
        <a>Mon équipe</a>
      </div>
      <div class="menu-item" v-if="user" @click="router.push('/games')">
        <AdjustmentsHorizontalIcon class="icon" />
        <a>Mes matchs</a>
      </div>
      <div class="menu-item" v-if="user" @click="logout()">
        <ArrowLeftOnRectangleIcon class="icon" />
        <a>Se déconnecter</a>
      </div>
    </div>
  </header>

</template>

<style scoped>

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
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
}

.team {
  font-size: 1.5rem;
  margin: 1em;
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
