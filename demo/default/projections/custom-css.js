import _ from 'underscore';

function decorate({ composeTable }, config, { tableClass }) {
  return {
    composeTable({ config: cfg }) {
      const table = composeTable({ config: cfg });

      return _.defaults({
        classes: tableClass,
      }, table);
    },
  };
}

export function customCSS(config) {
  return { decorate, config };
}
