import _ from 'underscore';

export function attributes() {
  const attrs = _.chain({
    class: _.uniq(this.classes).join(' '),
    style: this.styles,
  }).defaults(this.props).omit('styles', 'classes').value();

  if (!attrs.class) {
    delete attrs.class;
  }

  return attrs;
}
