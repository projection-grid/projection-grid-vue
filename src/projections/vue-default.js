import _ from 'underscore';
import DefaultComponent from './default-cell.vue';

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
