<script setup>

import {ref, defineProps, watch } from "vue";
import { useUserData } from "@/composables/useUserData";
import router from "@/router";
import {useRouter} from "vue-router";

const { user, token } = useUserData();
const routerNav = useRouter();

const props = defineProps({
    initialmembers: Array,
    teamNaming: String
})

const teammates = ref([...props.initialmembers]);

watch(() => props.initialmembers, (newVal) => {
  teammates.value = [...newVal];
});

function addTeammate(){
    teammates.value.push(`Guest ${teammates.value.length}`);
}

function removeTeammate(index) {
    teammates.value.splice(index, 1);
}


function save(){
    fetch("http://localhost:3000/teams/me", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
    body: JSON.stringify({
        name: props.teamNaming,
        members: teammates.value,
    })
    })
    .then((response)=>response.json())
    .then((data) => 
    {
        routerNav.push('/')
    })
}

</script>


<template>

<div class="form-group">
    <label>Membres de l'équipe</label>
        <div v-for="(member, index) in teammates" :key="index" class="member-row">
            <input v-model="teammates[index]" />
            <button
                v-if="member !== `${user.username}`"
                class="remove-button"
                @click="removeTeammate(index)"
            >
                ✕
            </button>
            <span v-if="member === user.username" class="you-tag">(Vous) </span>
        </div>
        <button class="add-button" @click="addTeammate">Ajouter un coéquipier</button>
    </div>

    <br/>
    <button class="save-button" @click="save">Enregistrer</button> 

</template>