function reducer(configIn) {
  return Object.assign({
    primaryKey: obj => obj[configIn.primaryKey],
    composeTABLE({ config }, context) {
      return {
        attributes: {},
        caption: null,
        colgroups: null,
        thead: null,
        tbodies: [{
          key: 'default',
          attributes: {},
          trs: config.records.map(record => config.composeTR({
            record,
            config,
          }, context)),
        }],
        tfoot: null,
      };
    },

    composeTR({ record, config }, context) {
      return {
        key: config.primaryKey(record),
        attributes: {},
        tds: config.columns.map(column => config.composeTD({
          column,
          record,
          config,
        }, context)),
      };
    },

    composeTD({ column /* , record, config */}/* , context */) {
      return {
        key: column.name,
        attributes: {},
        content: null,
      };
    },
  }, configIn);
}

export function coreDefault(options) {
  return { reducer, options };
}
