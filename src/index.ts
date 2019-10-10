import { Application } from 'typedoc';
import { NomnomlPlugin } from './plugin';

module.exports = (PluginHost: Application) => {
  const app = PluginHost.owner;
  if (app.converter.hasComponent('nomnoml')) {
    return;
  }

  /**
   * Add the plugin to the converter instance
   */
  app.converter.addComponent('nomnoml', new NomnomlPlugin(app.converter));
};
