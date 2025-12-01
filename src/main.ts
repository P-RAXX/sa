import { createApp } from 'vue';

import App from './App.vue';

import { router } from './router/index';

import 'p-raxx-is-components';

import './styles/main.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
