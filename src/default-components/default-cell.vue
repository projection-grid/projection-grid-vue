<template>
  <span v-on="$listeners">{{record[column.name]}}</span>
</template>
<script>
export default { props: ['record', 'column', 'table'] };
</script>
