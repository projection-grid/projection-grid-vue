import _ from 'underscore';

function reducer(config) {
  const configNew = _.defaults({
    columns: _.map(config.columns, col => _.defaults({
      attributes: _.mapObject(
        col.attributes || {},
        attr => (_.isFunction(attr) ? attr : () => attr)
      ),
    }, col, {
      Component: null,
      events: {},
    })),

    composeTD(options) {
      const td = config.composeTD(options);
      const { attributes, content } = td;
      const { column } = options;

      return _.defaults({
        attributes: _.chain(column)
          .result('attributes')
          .mapObject(attr => attr(options))
          .defaults(attributes)
          .value(),
        content: column.Component ? {
          Component: column.Component,
          props: _.defaults({ content }, options),
          events: _.chain(column)
            .result('events')
            .mapObject(handler => (...args) => {
              handler(options, ...args);
            })
            .defaults(content.events)
            .value(),
        } : content,
      }, td);
    },
  }, config);

  return configNew;
}

export function customColumn(options) {
  return { reducer, options };
}
