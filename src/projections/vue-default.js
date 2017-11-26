import _ from 'underscore';
import DefaultCell from './default-cell.vue';

function reducer(config) {
  return _.defaults({
    primaryKey: _.property(config.primaryKey),
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

export function vueDefault(options) {
  return { reducer, options };
}
