import _ from 'underscore';

function decorate({ composeDataTrs }, config, { getSubrecords }) {
  return {
    composeDataTrs(tr) {
      const { record } = tr;

      const trs = composeDataTrs(tr).concat(..._.map(
        getSubrecords(record),
        rec => composeDataTrs(_.defaults({ record: rec }, tr))
      ));

      return trs;
    },
  };
}

export function treeRows(config) {
  return { decorate, config };
}
