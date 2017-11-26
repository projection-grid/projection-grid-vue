<template>
  <table v-bind="model.attributes">
    <tbody v-for="tbody in model.tbodies" v-bind="attributesOf(tbody)">
      <tr v-for="tr in tbody.trs" v-bind="attributesOf(tr)">
        <td v-for="td in tr.tds" v-bind="attributesOf(td)">
          <component :is="td.content.Component" v-bind="td.content.props" v-on="td.content.events"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['model', 'options'],
  methods: {
    attributesOf({ attributes, key }) {
      if (key === null || typeof key === 'undefined') {
        return attributes;
      }
      return Object.assign({ key }, attributes);
    },
  },
};
</script>
