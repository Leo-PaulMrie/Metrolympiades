<script setup>
/*import { TrashIcon, HeartIcon } from "@heroicons/vue/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/vue/24/solid";
import { useUserData } from "@/composables/useUserData";
import { computed } from "vue";

const props = defineProps(["post"]);
const emit = defineEmits(["delete", "like"]);

const { user, token } = useUserData();

const isAuthor = computed(() => props.post.author.id === user.id);

const likedPost = computed(() => props.post.likes.some((like) => like.userId === user.id));

function likePost() {
  // On update le post en local de manière 'optimiste' avant de faire la requête cf. src/pages/HomePage.vue
  emit("like", props.post.id);
  // Amélioration possible: Implémenter un debounce pour éviter de faire trop de requêtes si l'utilisateur spam le bouton like
  fetch(`https://posts-crud-api.vercel.app/posts/${props.post.id}/like`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Erreur lors de la requête");
    }
  });
}

function deletePost() {
  // Même chose que pour le like, on delete le post en local avant de faire la requête cf. src/pages/HomePage.vue
  emit("delete", props.post.id);
  fetch(`https://posts-crud-api.vercel.app/posts/${props.post.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Erreur lors de la requête");
    }
  });
}*/
</script>

<template>

  <div class="card">

    <div class="header">
      <span class="activity">Volleyball</span>
      <span class="time">16h30</span>
    </div>

    <div class="teams">

      <div class="team">
        <span class="team-name">teamName</span>
        <span class="score">3</span>
      </div>

      <div class="team">
        <span class="team-name">Bug Busters</span>
        <span class="score">1</span>
      </div>

    </div>

  </div>
  

  

  <!--
  <article class="card">
    <header>
      <img
        :src="post.author.avatarUrl"
        :alt="`${post.author.username} avatar picture`"
        width="36"
        height="36"
        class="avatar"
      />
      <RouterLink :to="{ name: 'user', params: { username: post.author.username } }">{{
        post.author.username
      }}</RouterLink>
      <small>{{ new Date(post.createdAt).toLocaleDateString() }}</small>
    </header>

    <p>{{ post.content }}</p>

    <footer>
      <div class="likes">
        <button class="btn-icon" :class="{ active: likedPost }" @click="likePost">
          <component :is="likedPost ? SolidHeartIcon : HeartIcon" /> -->
          <!-- <SolidHeartIcon v-if="post.liked" />
          <HeartIcon v-else /> -->
        <!--</button> -->
        <!-- Amélioration possible: abréger le nombre de likes si supérieur à 999 (ex: 1.2k) -->
        <!--<small>{{ post.likes.length }}</small>
      </div>
      <div class="spacer"></div>
      <button @click="deletePost" class="btn-icon" v-if="isAuthor">
        <TrashIcon />
      </button>
    </footer>
  </article> -->

  
</template>

<style scoped>

.card {
  border-radius: 1.25em;
  padding: 1.25em 1.5em;
  width: 18.75em;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.25em; 
  background: #ffffff;
  box-shadow: 0 0.375em 1.125em rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-0.1875em);
}

.header {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
}

.teams {
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

.team {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0;
  border-bottom: 0.0625em solid #eee;
}

.team:last-child {
  border-bottom: none;
}

.team-name {
  color: #888;
  font-size: 1.05rem;
  transition: color 0.3s ease;
}

.bold {
  font-weight: 600;
  color: #333;
}
  
.score {
  font-weight: 700;
  font-size: 1.2rem;
  color: #222;
}

.activity {
  font-size: 1.2rem;
}

</style>
