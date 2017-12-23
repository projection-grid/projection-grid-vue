<template>
  <div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3>Projection Grid for VueJS</h3>
      </div>
      <div class="panel-body">
        <form class="form-inline">
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="isBordered"/>
              <span>Is bordered?</span>
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="isStriped"/>
              <span>Is striped?</span>
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="isHover"/>
              <span>Is hover?</span>
            </label>
          </div>
          <div class="form-group">
            <label>Cell Icon:</label>
            <select class="form-control" v-model="icon">
              <option value="">None</option>
              <option value="ok">OK</option>
              <option value="pencil">Pencil</option>
              <option value="heart">Heart</option>
              <option value="heart-empty">Empty Heart</option>
            </select>
          </div>
        </form>
      </div>
      <projection-grid :config="config" :projections="projections"/>
    </div>
  </div>
</template>

<script>
import ProjectionGrid from 'projection-grid-vue';
import people from './people.json';
import IconedCell from './iconed-cell.vue';

export default {
  components: { ProjectionGrid },
  data() {
    return {
      data: people.value,
      icon: '',
      isBordered: false,
      isStriped: false,
      isHover: false,
      sortKey: '',
      options: ['a', 'b'],
    };
  },
  computed: {
    config() {
      return {
        data: this.data,
        caption: { content: 'Projection Grid Vue' },
        classes: [
          'table',
          this.isBordered && 'table-bordered',
          this.isStriped && 'table-striped',
          this.isHover && 'table-hover',
        ].filter(cls => Boolean(cls)),
        primaryKey: 'UserName',
        cols: [{
          key: 'UserName',
          $td: this.icon ? {
            content: (td, content) => ({
              Component: IconedCell,
              props: { content, icon: this.icon },
            }),
          } : {},
        }, {
          key: 'FirstName',
        }, {
          key: 'LastName',
        }, {
          key: 'Emails',
        }],
      };
    },
    projections() {
      return [];
    },
  },
};
</script>
