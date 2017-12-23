import DefaultContent from './default-content.vue';

function wrap(model) {
  const { content } = model;

  return content && content.Component ? model : {
    ...model,
    content: {
      Component: DefaultContent,
      props: { text: content },
    },
  };
}

export default function ({
  composeCaption,
  composeTds,
}) {
  return {
    composeCaption(caption) {
      return wrap(composeCaption(caption));
    },
    composeTds(td) {
      return composeTds(td).map(wrap);
    },
  };
}
