import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Icon } from '@iconify/vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import mitt from 'mitt';

import './index.pcss';

// Global Components
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

const emitter = mitt();
const app = createApp(App);

// Global Components
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

app.component('Icon', Icon);

app.use(router);
app.config.globalProperties.emitter = emitter;

app.mount('#app');
