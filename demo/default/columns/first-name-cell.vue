<template>
  <i v-on="$listeners"><span>{{record[column.name]}}</span></i>
</template>
<script>
export default { props: ['column', 'record', 'table', 'content'] };
</script>
