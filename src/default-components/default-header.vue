<template>
  <span v-on="$listeners">{{column.name}}</span>
</template>
<script>
export default { props: ['column', 'table'] };
</script>
