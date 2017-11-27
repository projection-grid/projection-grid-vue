import _ from 'underscore';

function reducer(config, { tableClass }) {
  return _.defaults({
    composeTable({ config: cfg }) {
      const model = config.composeTable({ config: cfg });

      return _.defaults({
        attributes: { class: tableClass },
      }, model);
    },
  }, config);
}

export function customCSS(options) {
  return { reducer, options };
}
