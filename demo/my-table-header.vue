<template>
  <i>
    <component :is="content.Component" v-bind="component.props" v-on="component.events"/>
  </i>
</template>
<script>
export default { props: ['column', 'config', 'content'] };
</script>