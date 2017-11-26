import 'bootstrap-webpack'; // eslint-disable-line

import Vue from 'vue';
import App from './app.vue';

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
});
