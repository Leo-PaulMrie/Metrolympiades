<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Eye, EyeOff } from 'lucide-vue-next';


const router = useRouter();

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const errorMessage = ref(""); //


const isLoading = ref(false);

function login() {
  isLoading.value = true;
  errorMessage.value = "";




  fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        errorMessage.value = "Email ou mot de passe incorrect"; 
        throw new Error("Email ou mot de passe incorrect");
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/leaderboard");
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>


<template>
  <div class="page-wrapper">
    <div class="form-container">
      <form class="login_link" @submit.prevent="login">
        <h1>Se connecter</h1>
       <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <div class="form-fields">
          <input
            type="email"
            id="email"
            name="email"
            autocomplete="email"
            required
            v-model="email"
          placeholder="Email"
          />
        
          <div class="password-field">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              name="password"
              autocomplete="current-password"
              required
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
        <button type="submit" :class="{ loading: isLoading }">
          Connexion
        </button>
        <div class="register-link">
          <p> Pas encore de compte? </p>
          <router-link to="/register" class="login_link"> Je m'inscris </router-link>
        </div>
        
      </form>
    </div>
  </div>
  </template>
  

<style scoped>
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

#email, #password {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  padding: 0.2em;
}
.login_link {
  display: block;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 0.9rem;
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

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.register-link {
  margin-top: 24px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6em;
  color: #333;
}

.register-link p {
  margin: 0;
}

.register-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
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

.error-message {
  color: red;
  margin-bottom: 10px;
  text-align: center;
}

</style>