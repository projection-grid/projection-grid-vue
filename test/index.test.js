import { mount } from 'vue-test-utils';
import VueProjectionGrid from '../src/index.vue';

describe('VueProjectionGrid', () => {
  test('is a Vue instance', () => {
    expect(mount(VueProjectionGrid).isVueInstance()).toBeTruthy();
  });
});
