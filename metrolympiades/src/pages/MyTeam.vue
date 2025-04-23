<script setup>
import TeamModification from "@/components/TeamModification.vue";
import { useUserData } from "@/composables/useUserData";
import { ref, onMounted } from "vue";


const { user, token } = useUserData();

const teamName = ref('');
const teamMembers = ref([]);
const loading = ref(false);

function fetchMyTeam() {
    loading.value = true;
    fetch("http://localhost:3000/teams/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => response.json())
    .then((data) => {
        teamName.value = data.name;
        teamMembers.value = [...data.members];
        addYourself();
    })
    .finally(() => {
        loading.value = false;
    });
}

function addYourself(){
    const currentUser = `${user.username}`;
    if (!teamMembers.value.includes(currentUser)) {
        teamMembers.value.unshift(currentUser); 
    }
 
}

onMounted(()=>{
    fetchMyTeam();
}) 

</script>

<template>
    
    <div v-if="loading" class="loader-container">
        <div class="spinner"></div>
        <p>Chargement de mon équipe...</p>
    </div>

    <div class="container" v-if="!loading"> 
        <div class="header">
            <h1>Mon équipe</h1>
        </div>

        <div class="form-group">
            <label>Nom de l'équipe</label>
            <input v-model="teamName" placeholder="Nom de l'équipe" />
        </div>

        <TeamModification :initialmembers="teamMembers" :teamNaming="teamName" />
    </div>
</template>
