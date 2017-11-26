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
              <option value="ok">OK</option>
              <option value="pencil">Pencil</option>
              <option value="heart">Heart</option>
              <option value="heart-empty">Empty Heart</option>
            </select>
          </div>
        </form>
      </div>
      <projection-grid :config="config" :projections="projections" />
    </div>
  </div>
</template>

<script>
import _ from 'underscore';
import ProjectionGrid from 'VueProjectionGrid'; // eslint-disable-line
import { customColumn } from './projections/custom-column';
import { customCSS } from './projections/custom-css';
import { iconedCell } from './projections/iconed-cell';

import UserNameCell from './columns/user-name-cell.vue';
import FirstNameCell from './columns/first-name-cell.vue';
import CounterCell from './columns/counter-cell.vue';

import people from './people.json';

export default {
  components: { ProjectionGrid },
  data() {
    return {
      config: {
        records: people.value,
        columns: [
          { name: 'UserName', Component: UserNameCell },
          { name: 'FirstName', Component: FirstNameCell },
          'LastName',
          {
            name: 'Count',
            Component: CounterCell,
            events: {
              inc({ record }) {
                window.console.log('inc', record);
              },
            },
          },
        ],
        primaryKey: 'UserName',
      },
      icon: 'heart-empty',
      isBordered: false,
      isStriped: false,
      isHover: false,
    };
  },
  computed: {
    projections() {
      return [
        customColumn,
        customCSS({
          tableClass: _.compact([
            'table',
            this.isBordered && 'table-bordered',
            this.isStriped && 'table-striped',
            this.isHover && 'table-hover',
          ]).join(' '),
        }),
        iconedCell({ icon: this.icon }),
      ];
    },
  },
};
</script>
