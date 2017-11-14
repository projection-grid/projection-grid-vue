import { mount } from 'vue-test-utils';
import VueProjectionGrid from '../src/index.vue';

const mockConfig = {
  tableClasses: ['table', 'table-bordered'],
  dataSource: {
    type: 'memory',
    data: [{ UserName: 'abc' }],
    primaryKey: 'UserName',
  },
};

describe('VueProjectionGrid', () => {
  test('should not throw any errors', () => {
    expect(() => {
      mount(VueProjectionGrid, {
        propsData: {
          config: mockConfig,
        },
      }).not.toThrow();
    });
  });

  test('is a Vue instance', () => {
    expect(mount(VueProjectionGrid, {
      propsData: {
        config: mockConfig,
      },
    }).isVueInstance()).toBeTruthy();
  });

  test('should render table with correct css classes', () => {
    const grid = mount(VueProjectionGrid, {
      propsData: {
        config: mockConfig,
      },
    });

    setTimeout(() => {
      expect(grid.find('.table').hasClass('table-bordered')).toBe(true);
      done();
    });
  });
});
