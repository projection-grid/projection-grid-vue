<template>
  <div :class="containerClasses">
  </div>
</template>

<script>
export default {
  props: ['containerClasses', 'view'],
  mounted() {
    this.$props.view.$el.appendTo(this.$el);
  },
  beforeDestory() {
    if (this.$props.view) {
      this.$props.view.$el.detach();
    }
  },
};
</script>
