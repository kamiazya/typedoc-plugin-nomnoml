import { Application } from 'typedoc/dist/lib/application';
import { NomnomlPlugin } from '../src/plugin';

describe('NomnomlPlugin', () => {
  let plugin: NomnomlPlugin;

  beforeEach(() => {
    const app = new Application();
    plugin = new NomnomlPlugin(app.converter);
  });

  it('convert CommentTag', () => {
    const input = 'title\ngraph';
    const result = plugin.convertCommentTagText(input);
    expect(result).toMatch('#### title');
    expect(result).toMatch('<canvas id="nomnoml-1"></canvas>');
  });

  it('convert PageContents returns script tag for nomnoml.js, initialize nomnoml script, and body closing tag', () => {
    const input = '</body>';
    const result = plugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch(
      /<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/dagre\/[\d|.]+\/dagre.min.js\"><\/script>/,
    );
    expect(result).toMatch(
      /<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/nomnoml\/[\d|.]+\/nomnoml.min.js\"><\/script>/,
    );
  });

  // tslint:disable-next-line: quotemark
  it("can be change nomnoml.js version when set 'nomnomlVersion' option", () => {
    plugin.application.options.setValue('nomnomlVersion', '0.0.0');

    const input = '</body>';
    const result = plugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch(
      /<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/nomnoml\/0\.0\.0\/nomnoml.min.js\"><\/script>/,
    );
  });

  // tslint:disable-next-line: quotemark
  it("load nomnoml@0.6.1 when not to set 'nomnomlVersion' option", () => {
    const input = '</body>';
    const result = plugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch(
      /<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/nomnoml\/0\.6\.1\/nomnoml.min.js\"><\/script>/,
    );
  });

  it('convert PageContents returns same value if body closing tag not exixt', () => {
    const input = 'hoge';
    const result = plugin.convertPageContents(input);
    expect(result).toEqual('hoge');
  });
});
