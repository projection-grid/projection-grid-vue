<template>
  <span>
    <component :is="content.Component" v-bind="content.props" v-on="content.events"/>
    <button class="btn btn-default" @click="() => this.$emit('inc')">Inc</button>
  </span>
</template>

<script>
export default { props: ['content'] };
</script>
