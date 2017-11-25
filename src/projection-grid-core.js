export class ProjectionGridCore {
  constructor({ normalizer }) {
    this.normalizer = normalizer;
  }

  compose({ config: userConfig, projections = [] }) {
    const config = projections.reduce(
      (projConfig, { reducer, options }) => reducer(projConfig, options),
      this.normalize(userConfig)
    );
    const context = {};

    return Object.assign(config.composeTABLE({ config }, context), { context });
  }

  normalize(userConfig) {
    return Object.assign({
      records: userConfig.records,
      columns: userConfig.columns.map(({ name }) => ({ name })),
      composeTABLE({ config }, context) {
        return {
          attributes: {},
          caption: null,
          colgroups: null,
          thead: null,
          tbodies: [{
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

      composeTD({ column /* , record, config */}) {
        return {
          key: column.name,
          attributes: {},
          content: null,
        };
      },
    }, this.normalizer.normalize(userConfig));
  }
}
