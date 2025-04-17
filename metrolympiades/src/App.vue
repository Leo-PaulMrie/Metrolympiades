<script setup>
import { ref } from "vue";
import { Eye, EyeOff } from 'lucide-vue-next';

const username = ref("");
const teamName = ref("");
const mail = ref("");


const password = ref("");
const showPassword = ref(false);

const errorMessage = ref(""); 

function register(){

  errorMessage.value = "";

  if(!username.value.trim() || !teamName.value.trim() || !mail.value.trim() || !password.value.trim()){
    errorMessage.value = "Veuillez remplir tous les champs.";
    return;
  }
  fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: mail.value,
	    username: username.value,
	    password: password.value,
	    teamName: teamName.value
    })
  })
  .then((response)=>response.json())
  .then((data) => 
  {
    localStorage.setItem("userData", JSON.stringify(data))
    console.log("response : ", data)
  })
}

</script>

<template>

  <div class="page-wrapper">
    <div class="form-container">
      <h1>Inscription</h1>
      <form @submit.prevent="register">
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        <div class="form-fields">
          <input v-model="username" placeholder="Nom d'utilisateur">
          <input v-model="teamName" placeholder="Nom d'équipe">
          <input v-model="mail" placeholder="Email">
          <!-- <input v-model="password" placeholder="Mot de passe" type="password"> -->

          <div class="password-field">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Mot de passe"
            />

            <button
              type="button"
              class="hide-icon-btn"
              @click="showPassword = !showPassword"
              :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'"
            >
              <Eye v-if="!showPassword" size="20" />
              <EyeOff v-else size="20" />
            </button>
          </div>
        </div>
        
        <button type="submit">J'inscris mon équipe</button>

        <div class="login-link">
          <p>Déjà inscrit ?</p>
          <a href="">Me connecter</a>
        </div>
      </form>
    </div>
  </div>
  

</template>

<style scoped>
/* Reset the css style */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



.error-message {
  color: red;
  margin-bottom: 10px;
  text-align: center;
}

.page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.form-container {
  width: 100%;
  max-width: 420px;
  padding: 35px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background-color: #f9f9f9;
  font-family: "Segoe UI", sans-serif;
  box-sizing: border-box;
  margin: auto; 
}

.form-container:hover {
  box-shadow: 0 6px 36px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;
}


h1 {
  margin-bottom: 24px;
  font-size: 30px;
  font-weight: 600;
  color: #222;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

input {
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  outline: none;
}

.password-field {
  position: relative;
  display: flex;
  align-items: center;
}

.password-field input {
  padding-right: 44px;
}

.hide-icon-btn {
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.hide-icon-btn:hover {
  color: #000;
  transition: color 0.2s ease-in-out;
}

button[type="submit"] {
  margin: 20px auto 0 auto; 
  padding: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
  display: block; 
}


button[type="submit"]:hover {
  background-color: #0056b3;
}

.login-link {
  margin-top: 24px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6em;
  color: #333;
}

.login-link p {
  margin: 0;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}

</style>

