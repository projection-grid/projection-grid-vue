import _ from 'underscore';

function reducer(config, { getSubrecords }) {
  return _.defaults({
    composeTrs(options) {
      const { record } = options;

      return [
        config.composeTrs(options),
      ].concat(_.map(
        getSubrecords(record),
        rec => config.composeTrs(_.defaults({ record: rec }, options))
      ));
    },
  }, config);
}

export function treeRows(options) {
  return { reducer, options };
}
