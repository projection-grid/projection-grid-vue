<template>
  <div>
    <span>
      <component :is="content.Component" v-bind="content.props" v-on="content.events"/>
    </span>
    <span :class="iconClass" v-if="hasIcon"/>
  </div>
</template>
<script>
export default {
  props: ['content', 'icon'],
  computed: {
    iconClass() {
      return `glyphicon glyphicon-${this.icon}`;
    },
    hasIcon() {
      return Boolean(this.icon);
    },
  },
};
</script>
