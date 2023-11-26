<script setup>
import { RouterView } from "vue-router";
import IconPaint from "./components/icons/IconPaint.vue";
import Theme from "./components/Theme.vue";
import Language from "./components/Language.vue";
import Navigation from "./components/Navigation.vue";
import { ref } from "vue";


// Cambia el valor de isOpen para mostrar los diferentes temas
const isOpen = ref(false);
const toggleTheme = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="container">
    <header>
      <Theme @toggle-theme="toggleTheme" :is-open="isOpen" />
      <div class="container--btn">
        <button class="paint" aria-expanded="true" @click="toggleTheme">
          <IconPaint></IconPaint>
        </button>
        <Language />
      </div>
      <img />
      <Navigation></Navigation>
    </header>
    
    <RouterView />
  </div>
</template>

<style scoped></style>
