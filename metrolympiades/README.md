# 🏆 Metrolympiades

## 📖 Présentation

Metrolympiades est une entreprise spécialisée dans l'organisation de journées team building en entreprise, centrées autour du sport.  
Jusqu’ici gérée via Excel et papier, cette année une application web a été développée pour organiser les matchs, enregistrer les scores et afficher les classements en temps réel.

Cette application est développée en Vue.js. Elle interagit avec une API REST locale pour gérer les équipes, les matchs et les scores.

## 🎮 Fonctionnalités

- 📥 **Inscription et connexion d’un chef d’équipe**
- 📝 **Gestion de son équipe** (ajout / suppression de membres, modification du nom)
- 🏟️ **Gestion de ses matchs** (création et consultation des matchs avec horaires, épreuves et scores)
- 🏅 **Classement général** accessible à tous (même aux non connectés)
- 🔐 **Routes protégées** : certaines pages (gestion de l’équipe, de ses matchs) accessibles uniquement après connexion

## 🛠️ Installation et lancement

### Prérequis :

- Node.js
- npm
- L'API backend disponible ici : [metrolympiades-api](https://github.com/ClementCatel/metrolympiades-api)

### 1️⃣ Installer et lancer le backend :

```bash
git clone https://github.com/ClementCatel/metrolympiades-api.git
cd metrolympiades-api

npm install
npx prisma migrate dev --name init
npx prisma generate
npm run seed
npm run dev
```

Base URL -> http://localhost:3000

### 1️⃣ Installer et lancer le frontend :

```bash
git clone https://github.com/Leo-PaulMrie/Metrolympiades.git
cd metrolympiades

npm install
npm run dev
```

## 🛠️ Justification de l'utilisation de librairies externes

Dans ce projet, nous avons choisi de ne pas intégrer de librairies externes afin de maîtriser entièrement la structure et le style de l’application. L’objectif étant de conserver une approche pédagogique et de mieux comprendre le fonctionnement du CSS et du système de composants Vue. Cela permet également de limiter les dépendances externes, et ainsi garantir une meilleure légèreté du projet sans ajouter de complexité pour des fonctionnalités que l’on peut couvrir.

## 🔥 Bonus

✅ Possibilité de visualiser les détails d'un équipe en cliquant dessus dans le classement
✅ Étoile sur le dépôt GitHub metrolympiades-api

## 👷 Membres du groupe

- BEUVE Léopold (leopold21)
- MARIE Léo-Paul (Leo-PaulMrie)
- K'DUAL Louane (LouaneKDL)
- YVRAY RUFFINATTI Victor (VicetTor)
