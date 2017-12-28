import DefaultContent from './default-content.vue';

export default function defaultContentFactory(content) {
  return content && content.Component ? content : {
    Component: DefaultContent,
    props: { text: content },
  };
}
