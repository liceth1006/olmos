<template>
  <div class="grid-container">
    <div class="greet">
      <h2>{{ $t("contacts.greet") }}</h2>
      <p>{{ $t("contacts.paragraph") }}</p>
    </div>
    <div class="FormContact">
      <FormContact></FormContact>
    </div>
  </div>
</template>
<script setup>
import FormContact from "../components/FormContact.vue";
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  max-width: 800px;
  margin: 6vh auto;
  margin-top: 10vh;
}
.greet {
  margin-top: 10vh;
}
.greet h2 {
  color: var(--first-color);
}
.FormContact{
  margin-bottom: 10vh;
}
@media screen and (max-width: 1024px) {
  grid-container {
  
  margin: 0;
}
}
</style>
