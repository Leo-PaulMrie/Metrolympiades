<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const teams = ref([]); 
const activities = ref([]);

const selectedOpponent = ref('');
const selectedActivity = ref('');
const startTime = ref('');
const myScore = ref(0);
const opponentScore = ref(0);

const minDate = computed(() => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const day = String(now.getDate()).padStart(2, '0'); 
  const hours = String(now.getHours()).padStart(2, '0'); 
  const minutes = String(now.getMinutes()).padStart(2, '0'); 
  return `${year}-${month}-${day}T${hours}:${minutes}`;
});

const router = useRouter();

const errorMessage = ref("");

function retrieveOpponents() {
  errorMessage.value = "";

  fetch("http://localhost:3000/teams", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((data) => {

    teams.value = data
      .filter(team => team.name.trim() !== "")

  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des équipes : ", error);
    errorMessage.value = "Erreur lors de la récupération des données.";
  });
}

function retrieveActivities() {
  errorMessage.value = "";

  fetch("http://localhost:3000/activities", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((data) => {

    activities.value = data
      .filter(activity => activity.name.trim() !== "")
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des activités : ", error);
    errorMessage.value = "Erreur lors de la récupération des données.";
  });
}

function createMatch() {
  errorMessage.value = "";

  if (!selectedOpponent.value || !selectedActivity.value || !startTime.value) {
    errorMessage.value = "Tous les champs doivent être remplis.";
    return;
  }
  
  if (new Date(startTime.value) < new Date()) {
    errorMessage.value = "La date et l'heure de début ne peuvent pas être dans le passé.";
    return;
  }

  // const token = localStorage.getItem("jwt_token");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = userData?.token;

  if (!token) {
    errorMessage.value = "Utilisateur non authentifié.";
    return;
  }

  const matchData = {
    team2Id: selectedOpponent.value.id,
    activityId: selectedActivity.value.id,
    startedAt: new Date(startTime.value).toISOString(),
    team1Score: myScore.value,
    team2Score: opponentScore.value,
  };

  fetch("http://localhost:3000/matches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(matchData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de la création du match");
      }
      return response.json();
    })
    .then((data) => {
      router.push("/games")
    })
    .catch((error) => {
      console.error("Erreur lors de la création du match :", error);
      errorMessage.value = "Impossible de créer le match. Veuillez réessayer.";
    });
    
}


function sanitizeScore(type) {
  if (type === 'my') {
    myScore.value = Math.max(0, parseInt(myScore.value) || 0);
  } else if (type === 'opponent') {
    opponentScore.value = Math.max(0, parseInt(opponentScore.value) || 0);
  }
}


retrieveActivities();
retrieveOpponents();
</script>

<template>
  <div class="page-wrapper">
    <div class="form-container">

      <h1>Créer un nouveau match</h1>

      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>


      <form @submit.prevent="createMatch" class="form-fields">
        <label>
          Adversaire
          <select v-model="selectedOpponent">
            <option disabled value="">Sélectionne une équipe</option>
            <option v-for="team in teams" :key="team" :value="team">{{ team.name }}</option>
          </select>
        </label>

        <label>
          Activité
          <select v-model="selectedActivity">
            <option disabled value="">Sélectionne une activité</option>
            <option v-for="activity in activities" :key="activity" :value="activity">{{ activity.name }}</option>
          </select>
        </label>

        <label>
          Heure de début
          <!-- <input type="time" v-model="startTime" /> -->
          <input type="datetime-local" v-model="startTime" />
        </label>

        <label>
          Score - Mon équipe
          <div class="score-control">
            <button type="button" @click="myScore > 0 && myScore--">▼</button><input
                type="number"
                min="0"
                v-model.number="myScore"
                @input="sanitizeScore('my')"
                class="score-input"
            />

            <button type="button" @click="myScore++">▲</button>
          </div>
        </label>

        <label>
          Score - Équipe adverse
          <div class="score-control">
            <button type="button" @click="opponentScore > 0 && opponentScore--">▼</button>
            <input
                type="number"
                min="0"
                v-model.number="opponentScore"
                @input="sanitizeScore('opponent')"
                class="score-input"
            />
            <button type="button" @click="opponentScore++">▲</button>
          </div>
        </label>
        
        <button type="submit" class="submit-btn">Enregistrer</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
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

.page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.form-container {
  width: 100%;
  max-width: 600px;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background-color: #f9f9f9;
  font-family: "Segoe UI", sans-serif;
  box-sizing: border-box;
  position: relative;
  transition: box-shadow 0.3s ease;
}

.form-container:hover {
  box-shadow: 0 6px 36px rgba(0, 0, 0, 0.25);
}

button.submit-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

button.submit-btn:hover {
  background-color: #0056b3;
}

h1 {
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  color: #222;
  text-align: center;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #444;
  font-size: 16px;
}

input, select {
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
  margin-top: 8px;
  background-color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus, select:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  outline: none;
}

.error-message {
  color: red;
  margin-bottom: 10px;
  text-align: center;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


.score-control span {
  font-size: 18px;
  min-width: 32px;
  text-align: center;
  font-weight: bold;
}

.score-control button:hover {
  background-color: #0056b3;
}

.score-input {
  width: 60px;
  text-align: center;
}

.score-control {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  position: relative;
  width: 100%; 
}

.score-control button {
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  line-height: 1;
  flex-shrink: 0; 
  position: relative; 
  z-index: 2; 
}

.score-control input {
  width: 60px;
  text-align: center;
  position: relative;
  z-index: 1; 
}

</style>
