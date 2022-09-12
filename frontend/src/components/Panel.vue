<script setup>
import Panel from 'primevue/panel';
import Menu from 'primevue/menu';
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import getReglamentoFind from '../helpers/getReglamentoFind';

const props = defineProps(['_id', 'ejemplo_text', 'reglamento']);
const collapsed = ref(true);
const reglamentoId = props.reglamento;
const reglamentoType = ref('');
const menu = ref(null);
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
 const reglamento = async (id) => {
  const { data } = await getReglamentoFind.get(`?id=${id}`);
  reglamentoType.value = data.find[0].tipo;
 };
 reglamento(reglamentoId);
});
</script>

<template>
 <Panel
  :header="props.ejemplo_text.slice(0, 40)"
  :toggleable="true"
  style="padding-top: 2rem"
 >
  <template #icons>
   <button class="p-panel-header-icon p-link mr-2" @click="toggle">
    <span class="pi pi-cog"></span>
   </button>
   <Menu id="config_menu" ref="menu" :model="items" :popup="true" />
  </template>
  <p>{{ props.ejemplo_text }}</p>
  <p>Reglamento: {{ reglamentoType }}</p>
 </Panel>
</template>

<style lang="scss" scoped></style>