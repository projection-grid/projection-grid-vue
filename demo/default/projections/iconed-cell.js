import _ from 'underscore';
import IconedCell from './iconed-cell.vue';

function reducer(config, { icon }) {
  return _.defaults({
    composeTds(args) {
      const {
        key,
        attributes,
        content,
      } = config.composeTds(args);

      return {
        key,
        attributes,
        content: {
          Component: IconedCell,
          props: {
            content,
            icon,
          },
        },
      };
    },
  }, config);
}

export function iconedCell(options) {
  return { reducer, options };
}
