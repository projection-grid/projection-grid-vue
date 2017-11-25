<template>
  <table v-bind="model.attributes">
    <tbody v-for="tbody in model.tbodies" v-bind="tbody.attributes">
      <tr v-for="tr in tbody.trs" v-bind="addKey(tr.attributes, tr.key)">
        <td v-for="td in tr.tds" v-bind="addKey(td.attributes, td.key)">
          <component :is="td.content.Component" v-bind="td.content.props"></component>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import DefaultCell from './default-cell.vue';

function addKey(attributes, key) {
  return Object.assign({ key }, attributes);
}

export default {
  slots() {
    return this.$props.model.context.slots;
  },
  props: ['model', 'options'],
  data() {
    return {
      column: { name: 'a' },
      record: { a: 'Hello' },
      addKey,
    };
  },
  components: {
    DefaultCell,
  },
};
</script>
