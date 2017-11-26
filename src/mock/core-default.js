import _ from 'underscore';

function defaultColumns({ records, columns }) {
  return _.map(columns || _.keys(_.first(records)), (col) => {
    if (_.isString(col)) {
      return { name: col };
    }
    return col;
  });
}

function reducer(configIn) {
  const configOut = _.defaults({
    primaryKey: obj => obj[configIn.primaryKey],
    columns: defaultColumns(configIn),
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

  return configOut;
}

export function coreDefault(options) {
  return { reducer, options };
}

coreDefault.reducer = reducer;
