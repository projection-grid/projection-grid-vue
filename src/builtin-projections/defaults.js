import DefaultContent from './default-content.vue';

export default function ({
  composeTds,
}) {
  return {
    composeTds(td) {
      return composeTds(td).map((model) => {
        const { content } = model;

        return content.Component ? model : Object.assign({}, model, {
          content: {
            Component: DefaultContent,
            props: { text: content },
          },
        });
      });
    },
  };
}
