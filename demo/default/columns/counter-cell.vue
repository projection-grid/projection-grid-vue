<template>
  <span v-if="isFinite(record.Count)">
    <span>{{record.Count}}</span>
    <button class="btn btn-default" @click="() => this.$emit('inc')">Inc</button>
  </span>
</template>

<script>
export default { props: ['record', 'content'] };
</script>
