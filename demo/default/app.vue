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
      <projection-grid :config="config" :projections="projections" />
    </div>
  </div>
</template>

<script>
import _ from 'underscore';
import ProjectionGrid from 'vue-projection-grid'; // eslint-disable-line
import { customCSS } from './projections/custom-css';
// import { iconedCell } from './projections/iconed-cell';
// import { dupRow } from './projections/dup-row';
// import { dupColumn } from './projections/dup-column';
// import { treeRows } from './projections/tree-rows';

import UserNameCell from './columns/user-name-cell.vue';
import FirstNameCell from './columns/first-name-cell.vue';
import CounterCell from './columns/counter-cell.vue';

import people from './people.json';

export default {
  components: { ProjectionGrid },
  data() {
    return {
      records: _.map(people.value, record => _.defaults({ Count: 0 }, record)),
      icon: '',
      isBordered: false,
      isStriped: false,
      isHover: false,
      sortKey: '',
    };
  },
  computed: {
    config() {
      return {
        caption: {
          events: {
            click() {
              window.console.log('Clicking table title');
            },
          },
          styles: {
            textAlign: 'center',
          },
          content: {
            props: { text: 'This is a table' },
          },
        },
        records: this.records,
        columns: [
          {
            name: 'UserName',
            sorting: this.sortKey === 'UserName' ? 'asc' : true,
            col: {
              props: (props, { column }) => _.defaults({ 'data-name': column.name }, props),
              classes: () => ['user-name'],
            },
            td: {
              content: { Component: UserNameCell },
              styles: () => ({
                background: 'lightcyan',
              }),
              classes: () => ['user-name'],
            },
          },
          {
            name: 'FirstName',
            sorting: this.sortKey === 'FirstName' ? 'asc' : true,
            th: {
              events: (events, { column }) => _.defaults({
                click() {
                  window.console.log(`Clicking column header "${column.name}"`);
                },
              }, events),
            },
            td: {
              content: { Component: FirstNameCell },
            },
          },
          'LastName',
          {
            name: 'Email',
            td: {
              events: (events, { record }) => _.defaults({
                click: () => window.console.log(record),
              }, events),
            },
          },
          {
            name: 'Count',
            td: ({ props, content }, { record, table: { primaryKey } }) => ({
              props: _.defaults({
                'data-key': record[primaryKey],
              }, props),
              content: {
                Component: CounterCell,
                props: { record, content },
                events: {
                  inc: () => {
                    const key = record[primaryKey];
                    this.records = _.map(this.records, (rec) => {
                      if (rec[primaryKey] === key) {
                        return _.defaults({
                          Count: rec.Count + 1,
                        }, rec);
                      }
                      return rec;
                    });
                  },
                },
              },
            }),
          },
        ],
        primaryKey: 'UserName',
        sort: {
          handleResort: (key) => {
            this.records = _.sortBy(this.records, key);
            this.sortKey = key;
          },
        },
      };
    },
    projections() {
      return [
        customCSS({
          tableClass: _.compact([
            'table',
            this.isBordered && 'table-bordered',
            this.isStriped && 'table-striped',
            this.isHover && 'table-hover',
          ]),
        }),
        // iconedCell({ icon: this.icon }),
        // dupRow,
        // dupColumn,
        // treeRows({
        //   getSubrecords(record) {
        //     if (_.isArray(record.Emails)) {
        //       return _.map(record.Emails, Email => ({ Email }));
        //     }
        //     return [];
        //   },
        // }),
      ];
    },
  },
};
</script>
