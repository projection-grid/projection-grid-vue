<template>
  <div>
    <span>
      <component :is="content.Component" v-bind="content.props" />
    </span>
    <span :class="iconClass" />
  </div>
</template>
<script>
export default {
  props: ['content', 'icon'],
  computed: {
    iconClass() {
      return `glyphicon glyphicon-${this.icon}`;
    },
  },
};
</script>
