function classAttribute(classes) {
  const hash = {};
  classes.forEach((cls) => {
    hash[cls] = true;
  });
  return Object.keys(hash).join(' ');
}

export function attributes() {
  const attrs = {
    ...this.props,
    class: classAttribute(this.classes),
    style: this.styles,
  };

  delete attrs.classes;
  delete attrs.styles;

  if (!attrs.class) {
    delete attrs.class;
  }

  return attrs;
}
