<template>
  <b>
    <component :is="content.Component" v-bind="content.props" v-on="content.events"/>
  </b>
</template>
<script>
export default {
  props: ['column', 'record', 'config', 'content'],
};
</script>
