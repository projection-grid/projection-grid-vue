<template>
  <span v-if="isFinite(record.Count)">
    <grid-content v-bind="content"/>
    <button class="btn btn-default" @click="() => this.$emit('inc')">Inc</button>
  </span>
</template>

<script>
import { GridContent } from 'projection-grid-vue'; // eslint-disable-line

export default {
  props: ['record', 'content'],
  components: { GridContent },
};
</script>
