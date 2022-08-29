<script setup>
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';
import Dialog from 'primevue/dialog';
</script>

<template>
 <div class="drawer">
  <Button
   label="Reglamentos"
   class="p-button-text"
   @click="$router.push('reglamentos')"
  />
  <br />

  <Button
   label="Ejemplos"
   class="p-button-text"
   @click="$router.push('ejemplos')"
  />
 </div>
</template>

<style scoped>
.drawer {
 display: flex;
 flex-direction: column;
 width: 20%;
 height: 100%;
 background-color: gainsboro;
 padding-top: 2rem;
}
</style>
