import DefaultCell from './default-cell.vue';
import DefaultHeader from './default-header.vue';

export default function ({
  composeTds,
}) {
  return {
    composeTds(td) {
      const { data, col, isHeader } = td;

      if (col) {
        if (isHeader) {
          return composeTds(Object.assign({}, td, {
            content: {
              Component: DefaultHeader,
              props: { col },
            },
          }));
        }

        const { Component = DefaultCell } = col;

        return composeTds(Object.assign({}, td, {
          content: {
            Component,
            props: { col, data },
          },
        }));
      }

      return composeTds(td);
    },
  };
}
