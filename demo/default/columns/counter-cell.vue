<template>
  <span>
    <span>Count: {{count}}</span>
    <button class="btn btn-default" @click="inc">Inc</button>
  </span>
</template>

<script>
export default {
  props: ['column', 'record', 'config'],
  data() {
    return { count: 0 };
  },
  methods: {
    inc() {
      this.count += 1;
      this.$emit('inc');
    },
  },
};
</script>
