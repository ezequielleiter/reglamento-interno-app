<script setup>
// import Panel from 'primevue/panel';
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import getEjemplos from '../helpers/getEjemplos';
import getReglamentoFind from '../helpers/getReglamentoFind';
import Panel from '../components/Panel.vue';
const menu = ref(null);
const collapsed = ref(true);
const ejemplosList = ref();
const reglamentoType = ref('');
const items = ref([
 {
  label: 'Options',
  items: [
   {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
     toast.add({
      severity: 'success',
      summary: 'Updated',
      detail: 'Data Updated',
      life: 3000,
     });
    },
   },
   {
    label: 'Delete',
    icon: 'pi pi-times',
    command: () => {
     toast.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Data Deleted',
      life: 3000,
     });
    },
   },
  ],
 },
 {
  label: 'Navigate',
  items: [
   {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    url: 'https://vuejs.org/',
   },
   {
    label: 'Router',
    icon: 'pi pi-upload',
    command: () => {
     window.location.hash = '/fileupload';
    },
   },
  ],
 },
]);

const toggle = (event) => {
 menu.value.toggle(event);
};

onMounted(() => {
 const ejemplos = async () => {
  ejemplosList.value = await getEjemplos();
 };

 ejemplos();
});
</script>

<template>
 <div id="panel">
  <Button
   label="Agregar nuevo reglamento"
   icon="pi pi-plus-circle"
   class="p-button"
   @click="openConfirmation"
  />
  <Panel
   v-for="item in ejemplosList"
   :key="item._id"
   :_id="item._id"
   :ejemplo_text="item.ejemplo_text"
   :reglamento="item.reglamento"
  />
  <!-- <Panel
   :header="item.ejemplo_text.slice(0, 40)"
   :toggleable="true"
   v-for="item in ejemplosList"
   :key="item._id"
   style="padding-top: 2rem"
  >
   <template #icons>
    <button class="p-panel-header-icon p-link mr-2" @click="toggle">
     <span class="pi pi-cog"></span>
    </button>
    <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
   </template>
   <p>{{ item.ejemplo_text }}</p>
   <p>Reglamento:{{}}</p>
  </Panel> -->
 </div>
</template>

<style scoped>
.p-button {
 margin-bottom: 1rem;
}
.p-color {
 color: red;
}
</style>