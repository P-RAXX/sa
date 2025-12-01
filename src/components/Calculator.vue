<script setup lang="ts">
import { ref, computed } from 'vue';
import { UiButton, UiField, UiInput, UiSelect } from 'p-raxx-is-components';

import { mask } from '../constants/masks';
import { validateIp } from '../utils/validate';
import { getNet } from '../utils/net';
import { getCount } from '../utils/count';

const ip = ref('');
const maskSelected = ref('255.255.255.255');
const showResult = ref(false);

const valid = computed(() => validateIp(ip.value));
const net = computed(() => getNet(ip.value, maskSelected.value));
const countAdd = computed(() => getCount(maskSelected.value));

function calc() {
  showResult.value = true;
}

const items = computed(() => [
  { label: 'IP-адрес:', value: ip.value },
  { label: 'Маска подсети:', value: maskSelected.value },
  { label: 'Адрес сети:', value: net.value },
  { label: 'Количество возможных адресов:', value: countAdd.value },
]);
</script>

<template>
  <div class="container">
      <div class="header">
      <h1 class="h1">КАЛЬКУЛЯТОР ПОДСЕТЕЙ</h1>
    </div>

    <div class="forma">
      <div class="content">
        <div class="group">
          <UiField label="IP-адрес">
            <UiInput v-model="ip" placeholder="192.168.1.0"/>
          </UiField>

          <UiField label="Маска подсети">
          <UiSelect v-model="maskSelected" :options="mask" ></UiSelect>
          </UiField>
        </div>

        <div class="button-container">
          <UiButton @click="calc" type="submit" :is-disabled="!valid" class="submit-button">
            Вычислить
          </UiButton>
        </div>
      </div>
    </div>

    <div class="result" v-if="showResult && valid">
      <div class="rheader">Результат:</div>
      <div v-for="item in items" :key="item.label" class="ritem">
        {{ item.label }} {{ item.value }}
      </div>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-lg);
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--space-md);
  margin-bottom: var(--space-lg);
}

.h1 {
  text-align: center;
  margin: 0;
  color: var(--color-black);
  font-size: var(--font-size-xl);
}

.forma {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 0;
  margin-bottom: var(--space-lg);
}

.content {
  padding: var(--space-lg);
}

.group {
  margin-bottom: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  cursor: pointer;
  border-radius: var(--radius-sm);
}

.result {

  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  color: var(--color-black);
}

.rheader {
  padding: var(--space-md) ;
  background: var(--color-gray-200);
}

.ritem {
  padding: 0 var(--space-lg);
  padding-bottom: var(--space-md);

}
</style>
