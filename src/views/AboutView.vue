<template>
  <div class="about">
      <div>
        <h2>{{ $t("about.nameAbout") }}</h2>
        <Download></Download>
        <p>{{ $t("about.descriptionOne") }}</p>
        <p>{{ $t("about.descriptionTwo") }}</p>
        <p>{{ $t("about.descriptionThree") }}</p>
      </div>
      <div>
        <Skill></Skill>
  
      </div>
    </div>

</template>
<script setup>
import Download from "../components/download.vue";
import Skill from "../components/skill.vue";
</script>

<style>
.row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

}
.about {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
