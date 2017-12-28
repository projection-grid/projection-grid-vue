<template>
  <component :is="Component" v-bind="props" v-on="events"/>
</template>
<script>
export default {
  props: ['Component', 'props', 'events'],
};
</script>
