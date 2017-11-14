<template>
  <div :class="containerClasses" ref="viewContainer">
  </div>
</template>

<script>
export default {
  props: ['containerClasses', 'view'],
  mounted() {
    this.$watch('view', (view) => {
      view.$el.appendTo(this.$refs.viewContainer);
    });
  },

};
</script>
