<script setup>
import { useLanguageStore } from '../stores/useLanguageStore.js';
import SocialMedia from '../components/SocialMedia.vue';
import { onMounted, onBeforeUnmount } from "vue";
const languageStore = useLanguageStore();
console.log(languageStore.currentWord)
// Ejecuta la función updateWord cuando se monta el componente
onMounted(() => {
  languageStore.startUpdatingWords();
});

// Limpia el intervalo cuando se desmonta el componente
onBeforeUnmount(() => {
  languageStore.stopUpdatingWords();
});
</script>
<template>
  <div class="section">
    <SocialMedia></SocialMedia>
    <div class="section__photo">
      <img src="../assets/foto-liceth.webp" alt="foto liceth Olmos" />
    </div>
    <div class="section__start">
      <h2>{{ $t("start.title") }}</h2>
      <h1>{{ $t("start.name") }}</h1>
      <h3>{{ $t("start.subtitle") }}</h3>
      <p>{{ $t("start.description") }}</p>
      <h3 class="multiple">{{ $t("start.text") }}</h3>
      <h3 class="multiple-text">{{ languageStore.currentWord }}</h3>
    </div>
  </div>
</template>
<style>
@media screen and (max-width: 1024px) {
  .section {
    display: flex;
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 1%;
  }
  .section__photo {
    display: flex;
    z-index: -1;
    position: absolute;
    top: 2vh;
    margin: 0 auto;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin-top: 11vh;
    border: 4px solid var(--first-color);
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .section__photo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
  .section__start {
    z-index: -1;
    position: absolute;
    top: 36vh;
    padding: 0 5%;
    padding-top: 5%;
    margin-bottom: 20vh;
  }
  .section__start h1 {
    color: var(--first-color);
    font-weight: 900;
    font-size: 2rem;
  }
  .section__start h2 {
    font-size: 1.8rem;
  }
  .section__start p {
    font-size: 0.8rem;
  }

  .multiple {
    display: inline;
    font-size: 1.2rem;
  }
  .multiple-text {
    color: var(--first-color);
    display: inline;
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 1025px) {
  .section {
    display: flex;
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 1%;
  }
  .section__photo {
    display: flex;
    z-index: -1;
    position: absolute;
    top: 5vh;
    margin: 0 auto;
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    margin-top: 11vh;
    border: 4px solid var(--first-color);
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .section__photo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
  .section__start {
    z-index: -1;
    position: absolute;
    top: 40vh;
    padding: 0 5%;
    padding-top: 5%;
    margin-bottom: 20vh;
  }
  .section__start h1 {
    color: var(--first-color);
    font-weight: 900;
    font-size: 2.5rem;
  }
  .section__start h2 {
    font-size: 2rem;
  }
  .section__start h3 {
    font-size: 1.5rem;
  }
  .section__start p {
    font-size: 1.2rem;
  }

  .multiple {
    display: inline;
    font-size: 1.2rem;
  }
  .multiple-text {
    color: var(--first-color);
    display: inline;
    font-size: 1.2rem;
  }

}
</style>
