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
    expect(result).toContain('<script src="https://cdn.jsdelivr.net/npm/dagre/dist/dagre.min.js"></script>');
    expect(result).toContain('<script src="https://cdn.jsdelivr.net/npm/nomnoml/dist/nomnoml.min.js"></script>');
    expect(result).toMatchSnapshot();
  });

  it('convert PageContents returns same value if body closing tag not exixt', () => {
    const input = 'hoge';
    const result = plugin.convertPageContents(input);
    expect(result).toEqual('hoge');
  });
});
