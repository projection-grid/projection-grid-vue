import _ from 'underscore';

function reducer(config, { tableClass }) {
  return _.defaults({
    composeTABLE({ config: cfg }) {
      const model = config.composeTABLE({ config: cfg });

      return _.defaults({
        attributes: { class: tableClass },
      }, model);
    },
  }, config);
}

export function customCSS(options) {
  return { reducer, options };
}
