<script setup>
import { RouterLink } from "vue-router";
import IconHome from "./icons/IconHome.vue";
import IconAbout from "./icons/IconAbout.vue"
import IconContact from "./icons/IconContact.vue"
import IconProjects from "./icons/IconProjects.vue";
</script>
<template>
  <div class="container">
    <nav class="nav bg">
      <RouterLink class="link" to="/"><IconHome></IconHome> {{ $t("navBar.itemOne") }}</RouterLink>
      <RouterLink class="link" to="/about"><IconAbout></IconAbout>  {{
        $t("navBar.itemTwo")
      }}</RouterLink>
      <RouterLink class="link" to="/projects"> <IconProjects></IconProjects>{{
        $t("navBar.itemThree")
      }}</RouterLink>
      <RouterLink class="link" to="/contact"> <IconContact></IconContact> {{
        $t("navBar.itemFive")
      }}</RouterLink>
    </nav>
</div>
</template>
<style>
/* Estilos generales para .nav y .link */
.bg{
  background-color: var(--background-first-color);
}
.nav {
  display: flex;
  flex-wrap: nowrap;
  padding-top: 2vh;
  padding-bottom: 2vh;
  opacity: 0.8;
  color: var(--second-color);
}

.link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

/* Estilos específicos para pantallas pequeñas (móviles) */
@media screen and (max-width: 1024px) {
  .nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--background-second-color);
  }

  .link {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    align-content: center;
  }
}

/* Estilos específicos para pantallas medianas o portátiles */
@media screen and (min-width: 1025px) {
  .nav {
    position: fixed;
    top: 1.5rem;
    left: 0;
    right: 0;
    justify-content: center;
  }

  .link {
    margin-right: 20px;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .nav__icon {
    display: none;
  }
}

/* 
Estilos específicos para pantallas grandes (escritorio)
@media screen and (min-width: 1441px) {
  // Agrega aquí tus estilos para pantallas grandes si es necesario
}
*/


</style>