import _ from 'underscore';
import DefaultCell from './default-cell.vue';

export function vueDefault(config) {
  return _.defaults({
    composeTD(options) {
      const { column: { name }, record } = options;
      return _.defaults({
        content: {
          Component: DefaultCell,
          props: { text: record[name] },
          events: {},
        },
      }, config.composeTD(options));
    },
  }, config);
}
