<script setup>
import { useLanguageStore } from '../stores/useLanguageStore.js';

const languageStore = useLanguageStore()


</script>

<template>
  <div class="btn-container">
    <label class="switch btn-color-mode-switch">
      <input
        value="en"
        id="language_switch"
        name="language_switch"
        type="checkbox"
        @change="languageStore.toggleLanguage"
      />
      <label
        class="btn-color-mode-switch-inner"
        data-off="Es"
        data-on="En"
        for="language_switch"
      ></label>
    </label>
  </div>
</template>
<style>
.btn-container {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.btn-color-mode-switch {
  display: inline-block;
  margin: 0px;
  position: relative;
}

.btn-color-mode-switch > label.btn-color-mode-switch-inner {
  margin: 0px;
  width: 90px;
  height: 45px;
  background-color: var(--background--button--color);
  background-size: cover;
  border-radius: 26px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/
  display: block;
}

.btn-color-mode-switch > label.btn-color-mode-switch-inner:before {
  content: attr(data-on);
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  top: 7px;
  right: 20px;
  color: #222;
  
}

.btn-color-mode-switch > label.btn-color-mode-switch-inner:after {
  content: "";
  width: 40px;
  height: 40px;
  background-image: url(../assets/flagIconEEUU.webp);
  background-size: cover;
  border-radius: 26px;
  position: absolute;
  font-size: 20px;
  display: flex;
  justify-content: center;
  left: 2px;
  top: 2px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 6px -2px #111;
  padding: 5px 0px;
  color: #222;
  font-weight: 600;
}

.btn-color-mode-switch input[type="checkbox"] {
  cursor: pointer;
  width: 50px;
  height: 25px;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  margin: 0px;
}

.btn-color-mode-switch
  input[type="checkbox"]:checked
  + label.btn-color-mode-switch-inner {
  background-color: var(--background--button--color)
}

.btn-color-mode-switch
  input[type="checkbox"]:checked
  + label.btn-color-mode-switch-inner:after {
  content: "";
  left: 48px;
  background-image: url(../assets/flagIconColombia.webp);
  background-size: cover;
}

.btn-color-mode-switch
  input[type="checkbox"]:checked
  + label.btn-color-mode-switch-inner:before {
  content: attr(data-off);
  right: auto;
  left: 20px;

}
</style>
