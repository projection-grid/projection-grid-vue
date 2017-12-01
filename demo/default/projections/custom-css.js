import _ from 'underscore';

function decorate({ composeTable }, config, { tableClass }) {
  return {
    composeTable(table) {
      const model = composeTable(table);

      return _.defaults({
        classes: _.union(model.classes, tableClass),
      }, model);
    },
  };
}

export function customCSS(config) {
  return { decorate, config };
}
