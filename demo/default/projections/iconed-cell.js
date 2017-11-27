import _ from 'underscore';
import IconedCell from './iconed-cell.vue';

function reducer(config, { icon }) {
  return _.defaults({
    composeTds(args) {
      return _.chain(config.composeTds(args))
        .map(({ key, attributes, content }) => ({
          key,
          attributes,
          content: {
            Component: IconedCell,
            props: {
              content,
              icon,
            },
          },
        }))
        .flatten()
        .compact()
        .value();
    },
  }, config);
}

export function iconedCell(options) {
  return { reducer, options };
}
