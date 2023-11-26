<script setup>
import IconClear from "./icons/IconClear.vue";
import { ref, onMounted } from "vue";
//actualiza o llena las li con los diferentes temas son 7 temas y agrega el atributo "data-theme" segun el tema
const themes = [
  "Autumn Blaze",
  "Harvest Grove",
  "Enchanted Nightfall",
  "Sunny Seashore",
  "Tropical Sunset",
  "Midnight Enchantment",
  "Vintage",
];
//selecciona el tema que el usuario quiere que tenga su pagina
const selectTheme = (index) => {
  const theme = themes[index];
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("selectedTheme", theme);
};
onMounted(() => {
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme) {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }
});
// Propiedad que controla si se debe agregar la clase isopen para mostrar los temas
const props = defineProps({
  isOpen: Boolean,
});

const emits = defineEmits(["toggle-theme"]);

const closeTheme = () => {
  emits("toggle-theme"); // Emitiendo el evento para cerrar la clase is-open en App.vue
};
const handleItemClick = (index) => {
  selectTheme(index);
  closeTheme();
};
</script>

<template>
  <aside
    class="theme"
    data-nosnippet=""
    hidden="false"
    :class="{ 'is-open': isOpen }"
  >
    <h3>{{ $t("theme.select") }}</h3>
    <ul class="theme__list">
      <li
        class="theme__item"
        v-for="(theme, index) in themes"
        :key="theme"
        @click="handleItemClick(index)"
        
      >
        <button class="theme__btn" :data-theme="theme">
          <span class="theme__name"> {{ theme }}</span>
          <span class="theme__palette">
            <span class="theme__color bg--first-alpha-color"></span>
            <span class="theme__color bg-second-color"></span>
            <span class="theme__color bg--button--color"></span>
            <span class="theme__color bg--first-color"></span>
            <span class="theme__color bg--second--color"></span>
          </span>
        </button>
      </li>
    </ul>
    <button class="theme__clear" @click="closeTheme">
      <IconClear></IconClear>
    </button>
  </aside>
</template>

<style>
.theme {
  display: block;
  width: 100%;
  background-color: var(--background-second-color);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 3;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0;
  padding: 0;
  max-height: 0;
  border-radius: 10px;
}
.theme.is-open {
  max-height: 12rem;
}
.theme h3 {
  text-align: center;
  padding-top: 1vh;
  font-size: 1rem;
  color: #011627;
}
.theme__list {
  display: block;
  width: 100%;
  margin-top: 15px;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  text-align: center;
  padding-bottom: 1.5rem;
  scrollbar-color: var(--second-color) var(--first-color);
}
.theme__list::-webkit-scrollbar {
  height: 8px;
}
.theme__list::-webkit-scrollbar-thumb {
  background: var(--first-color);
}
.theme__list::-webkit-scrollbar-track {
  background: var(--first-color);
}
.theme__item {
  display: inline-block;
  position: relative;
  border-radius: 0.5em;
  transform: scale(1);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.theme__item:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  z-index: 1;
}
.theme__item.is-active {
  z-index: 1;
  transform: scale(1);
  box-shadow: 0 0 0 2px var(--first-color) !important;
}
.theme__item.is-active::after {
  content: "";
  display: block;
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 12px 10px;
  border-color: transparent transparent var(--first-color) transparent;
  transform: translate(-50%, 1.25rem);
}
.theme__btn {
  display: block;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid var(--first-color);
  width: 100%;
  text-align: center;
  background-color: var(--background-first-color);
  pointer-events: none;
}
.theme__name {
  display: block;
  color: var(--first-color);
  pointer-events: none;
}
.theme__palette {
  display: block;
  padding: 0.125em 0;
  pointer-events: none;
}
.theme__color {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  white-space: nowrap;
  text-indent: 100%;
  text-align: left;
  overflow: hidden;
  vertical-align: bottom;
  box-shadow: 0 0 0 2px #fff;
}
.bg--first-alpha-color {
  background-color: var(--first-alpha-color);
}
.bg-second-color {
  background-color: var(--background-second-color);
}
.bg--button--color {
  background-color: var(--background--button--color);
}
.bg--first-color {
  background-color: var(--first-color);
}
.bg--second--color {
  background-color: var(--second-color);
}
.bg--link--color {
  margin-left: -0.3125em;
}
.themepicker__close {
  display: flex;
  position: absolute;
  top: 0.1rem;
  right: 0.5rem;
  font-size: 1.125rem;
}
.theme__clear {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 1.5px;
  right: 2vh;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--background--button--color);
  cursor: pointer;
}
</style>
