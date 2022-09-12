<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import { ref } from 'vue';
import getReglamentos from '../helpers/getReglamentos';
import { onMounted } from 'vue';
import axios from 'axios';

//Setear variables
const displayConfirmation = ref(false);
const newReglamento = ref('');
const selectedCity = ref();
const selectedCountries = ref();
const selectedGroupedCity = ref();
const selectedItem = ref();
const reglamentosList = ref([]);

//Funciones
//es un "useEffect" de vue
onMounted(() => {
 const reglamentos = async () => {
  reglamentosList.value = await getReglamentos();
 };
 reglamentos();
});

const openConfirmation = () => {
 displayConfirmation.value = true;
};
const closeConfirmation = () => {
 displayConfirmation.value = false;
};
const closeConfirmationSend = async () => {
 const request = await axios.post('http://localhost:8080/api/reglamentos', {
  tipo: newReglamento.value,
 });
 displayConfirmation.value = false;
};
</script>

<template>
 <div id="panel">
  <Button
   label="Agregar nuevo reglamento"
   icon="pi pi-plus-circle"
   class="p-button"
   @click="openConfirmation"
  />
  <h5>Reglamentos</h5>
  <Listbox
   v-model="selectedCity"
   :options="reglamentosList"
   optionLabel="tipo"
   style="width: 100%"
  />

  <Dialog
   header="Agragar reglamento"
   v-model:visible="displayConfirmation"
   :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
   :style="{ width: '350px' }"
   :modal="true"
  >
   <label for="username">Nombre del reglamento</label>
   <InputText id="username" type="text" v-model="newReglamento" />
   <Button
    label="Agregar"
    icon="pi pi-check"
    @click="closeConfirmationSend"
    class="p-button-text"
    autofocus
   />
  </Dialog>
 </div>
</template>

<style lang="scss" scoped>
.p-button {
 margin-right: 0.5rem;
}

.p-buttonset {
 .p-button {
  margin-right: 0;
 }
}

.sizes {
 .button {
  margin-bottom: 0.5rem;
  display: block;

  &:last-child {
   margin-bottom: 0;
  }
 }
}

@media screen and (max-width: 640px) {
 .p-button {
  margin-bottom: 0.5rem;

  &:not(.p-button-icon-only) {
   display: flex;
   width: 100%;
  }
 }

 .p-buttonset {
  .p-button {
   margin-bottom: 0;
  }
 }
}
</style>