import { mount } from 'vue-test-utils';
import ProjectionGridVue from '../src/index';

/* global expect */
const config = {
  records: [{ UserName: 'abc' }],
  primaryKey: 'UserName',
  columns: [{ name: 'UserName' }],
};

describe('ProjectionGridVue', () => {
  test('should not throw any errors', () => {
    expect(() => {
      mount(ProjectionGridVue, {
        propsData: { config },
      }).not.toThrow();
    });
  });

  test('is a Vue instance', () => {
    expect(mount(ProjectionGridVue, {
      propsData: { config },
    }).isVueInstance()).toBeTruthy();
  });

  // todo: test destory
});
