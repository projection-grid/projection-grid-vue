<template>
  <b v-on="$listeners"><grid-content v-bind="content"/></b>
</template>
<script>
import { GridContent } from 'vue-projection-grid'; // eslint-disable-line

export default {
  props: ['column', 'record', 'table', 'content'],
  components: { GridContent },
};
</script>
