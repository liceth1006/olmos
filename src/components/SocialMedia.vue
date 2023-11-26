<script setup>
import IconGithub from "./icons/IconGithub.vue";
import IconLinkedin from "./icons/IconLinkedin.vue";
</script>
<template>
  <div class="section__link">
    <a href="https://github.com/liceth1006" target="_blank"
      ><IconGithub></IconGithub>
    </a>
    <a href="https://www.linkedin.com/in/liceth-olmos/" target="_blank"
            ><IconLinkedin></IconLinkedin> </a>
  </div>
</template>
<style>
.section__link {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15vh;
  left: 5vh;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}
.section__link svg {
  padding-top: 3vh;
  color: var(--second-color);
}
.section__link svg:hover {
  color: var(--first-color);
}
.section__link svg {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  width: 3.8rem;
  height: 3.8rem;
  cursor: pointer;
  text-align: center;
  color: var(--second-color);
}
</style>
