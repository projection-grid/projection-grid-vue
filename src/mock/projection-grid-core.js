import { coreDefault } from './core-default';

export class ProjectionGridCore {
  compose({ config: userConfig, projections = [] }) {
    function resolve(config, projection) {
      if (projection instanceof Array) {
        return projection.reduce(resolve, config);
      }
      return projection.reducer(config, projection.options);
    }

    const config = resolve(userConfig, [coreDefault(), ...projections]);
    const context = {};

    return Object.assign(config.composeTABLE({ config }, context), { context });
  }
}
