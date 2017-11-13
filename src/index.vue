<template>
  <div>
    <h1>vue-projection-grid</h1>
    <child />
  </div>
</template>

<script>
import FirstComponent from './components/first-component.vue';

/**
 * @vue The root component.
 */
export default {
  components: {
    child: FirstComponent,
  },
};
</script>
