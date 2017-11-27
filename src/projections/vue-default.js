import _ from 'underscore';
import DefaultComponent from './default-content.vue';

export function vueDefault(config) {
  return _.defaults({
    composeContent({ props, events }) {
      return {
        Component: DefaultComponent,
        props,
        events,
      };
    },
  }, config);
}
