<template>
  <span v-on="$listeners">{{this.text}}</span>
</template>
<script>
export default { props: ['text'] };
</script>
