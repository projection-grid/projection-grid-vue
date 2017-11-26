import _ from 'underscore';
import IconedCell from './iconed-cell.vue';

function reducer(config, { icon }) {
  return _.defaults({
    composeTD(args) {
      const {
        key,
        attributes,
        content,
      } = config.composeTD(args);

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
