<script setup>
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
import Card from 'primevue/card';
</script>

<template>
 <Card>
  <template #title> Advanced Card </template>
  <template #content>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
   consequuntur error repudiandae numquam deserunt quisquam repellat libero
   asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
   neque quas!
  </template>
  <template #footer>
   <Button icon="pi pi-check" label="Save" />
   <Button
    icon="pi pi-times"
    label="Cancel"
    class="p-button-secondary"
    style="margin-left: 0.5em"
   />
  </template>
 </Card>
</template>
