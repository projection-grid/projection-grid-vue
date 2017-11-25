import _ from 'underscore';
import DefaultCell from './default-cell.vue';

export class Normalizer {
  normalize({ primaryKey }) {
    return {
      primaryKey: _.property(primaryKey),
      composeTD({ column, record }) {
        return {
          key: column.name,
          attributes: {},
          content: {
            Component: DefaultCell,
            props: { text: record[column.name] },
          },
        };
      },
    };
  }
}
