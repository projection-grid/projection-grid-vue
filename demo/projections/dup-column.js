import _ from 'underscore';

export function dupColumn(config) {
  return _.defaults({
    composeTds(options) {
      const { record } = options;
      return [
        config.composeTds(options),
        config.composeTds(_.defaults({
          record: _.defaults({ UserName: `${record.UserName}(dup-col)` }, record),
        }, options)),
      ];
    },
  }, config);
}
