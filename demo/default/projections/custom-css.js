import _ from 'underscore';

function reducer(config, { tableClass }) {
  return _.defaults({
    composeTable({ config: cfg }) {
      const table = config.composeTable({ config: cfg });

      return _.defaults({
        classes: tableClass,
      }, table);
    },
  }, config);
}

export function customCSS(options) {
  return { reducer, options };
}
