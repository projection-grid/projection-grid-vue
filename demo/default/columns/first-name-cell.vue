<template>
  <i><span>{{record[column.name]}}</span></i>
</template>
<script>
export default { props: ['column', 'record'] };
</script>
