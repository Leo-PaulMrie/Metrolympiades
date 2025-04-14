<script setup>
import { ref } from "vue";

const username = ref("");
const team_name = ref("");
const mail = ref("");
const pwd = ref("");

function register(){
  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    
  })
}

</script>

<template>

  <div class="form-container">
    <h1>Inscription</h1>

    <form @submit.prevent="register">

      <div class="form-fields">
        <input v-model="username" placeholder="Nom d'utilisateur">
        <input v-model="team_name" placeholder="Nom d'équipe">
        <input v-model="mail" placeholder="Email">
        <input v-model="pwd" placeholder="Mot de passe">
        <button type="submit">J'inscris mon équipe</button>
      </div>

      <div class="login-link">
        <p>Déjà inscrit ?</p>
        <a href="">Me connecter</a>
      </div>
    </form>

  </div>

</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 24px;
  font-size: 28px;
  color: #333;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

button {
  margin-top: 10px;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.login-link {
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link p{
  color: black;
}
/*
.login-link a:hover {
  text-decoration: underline;
}
*/
.login-link a {
  text-decoration: underline;
}
</style>

