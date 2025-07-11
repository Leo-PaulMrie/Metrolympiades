
// Un composable est une fonction JavaScript réutilisable qui peut être utilisée dans un composant Vue.
// Il permet de séparer la logique de l'interface utilisateur de la logique métier.
// Les composables sont stockés dans le dossier src/composables et commencent généralement par le préfixe use.
//
// Ce composable permet de récupérer les données de l'utilisateur stockées dans le local storage.
// Il renvoie l'objet user et le token de l'utilisateur.
// Si l'utilisateur n'est pas connecté, les valeurs renvoyées seront null.


import { ref, computed } from "vue";

const localStorageData = ref(JSON.parse(localStorage.getItem("user")));

export function useUserData() {
  const user = computed(() => localStorageData.value);
  const token = computed(() => localStorageData.value.token);

  function refreshUser() {
    localStorageData.value = JSON.parse(localStorage.getItem("user"));
  }

  return {
    user,
    token,
    refreshUser,
  };
}