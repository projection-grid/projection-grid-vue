import _ from 'underscore';

export function dupRow(config) {
  return _.defaults({
    composeTrs(options) {
      const { record } = options;

      return [
        config.composeTrs(options),
        config.composeTrs(_.defaults({
          record: _.defaults({ UserName: `${record.UserName}(dup-row)` }, record),
        }, options)),
      ];
    },
  }, config);
}
