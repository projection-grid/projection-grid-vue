import { mount } from 'vue-test-utils';
import ProjectionGrid from '../src/index';

/* global expect */
const config = {
  records: [{ UserName: 'abc' }],
  primaryKey: 'UserName',
  columns: [{ name: 'UserName' }],
};

describe('VueProjectionGrid', () => {
  test('should not throw any errors', () => {
    expect(() => {
      mount(ProjectionGrid, {
        propsData: { config },
      }).not.toThrow();
    });
  });

  test('is a Vue instance', () => {
    expect(mount(ProjectionGrid, {
      propsData: { config },
    }).isVueInstance()).toBeTruthy();
  });

  // todo: test destory
});
