<template>
  <b>
    <component :is="content.Component" v-bind="content.props" />
  </b>
</template>
<script>
export default {
  props: ['column', 'record', 'config', 'content'],
};
</script>
