import { Converter } from 'typedoc/dist/lib/converter';
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Context } from 'typedoc/dist/lib/converter/context';
import { Comment, CommentTag } from 'typedoc/dist/lib/models/comments';
import { PageEvent } from 'typedoc/dist/lib/output/events';
/**
 * Nomnoml plugin component.
 */
@Component({ name: 'nomnoml' })
export class NomnomlPlugin extends ConverterComponent {
  /**
   * 1. Load nomnoml liblary.
   * 2. Initialize nomnoml.
   * 3. Close body tag.
   */
  private get customScriptsAndBodyClosinngTag(): string {
    const script = Array.from(this.graphMap.entries())
      .map(
        ([id, source]) =>
          `if (document.getElementById("${id}")) {
            nomnoml.draw(document.getElementById("${id}"), ${JSON.stringify(source)});
          }`,
      )
      .join('\n');
    return `
      <script src="https://cdn.jsdelivr.net/npm/dagre/dist/dagre.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/nomnoml/dist/nomnoml.min.js"></script>
      <script>${script}</script>
      </body>
    `;
  }

  private static graphIdCounter: number = 0;

  /**
   * fillter logic for Comment exist
   */
  private static filterComment(comment: undefined | Comment): comment is Comment {
    return comment !== undefined && !!comment;
  }

  /**
   * fillter logic for CommentTags exist
   */
  private static filterCommentTags(tags: CommentTag[] | undefined): tags is CommentTag[] {
    return tags !== undefined && !!tags;
  }

  /**
   * return turn when tag's paramName is 'nomnoml'
   */
  private static isNomnomlCommentTag(tag: CommentTag): boolean {
    return tag.tagName === 'nomnoml';
  }

  /**
   * get CommentTags for using `@nomnoml` anotation from Context.
   */
  private static nomnomlTags(context: Context): CommentTag[] {
    return (
      Object
        // get reflection from context
        .values(context.project.reflections)
        // get Comment from Reflection
        .map(reflection => reflection.comment)
        // filter only comment exist
        .filter(this.filterComment)
        // get CommentTags from Comment
        .map(comment => comment.tags)
        // filter only CommentTags exist
        .filter(this.filterCommentTags)
        // merge all CommentTags
        .reduce((a, b) => a.concat(b), [])
        // filter tag that paramName is 'nomnoml'
        .filter(this.isNomnomlCommentTag)
    );
  }

  private graphMap = new Map<string, string>();

  /**
   * Regex literal that matches body closing tag.
   */
  private readonly BODY_CLOSINNG_TAG = /<\/body>/;

  /**
   * The first line of text wraps h4.
   * The other wraps by div classed nomnoml.
   */
  public convertCommentTagText(tagText: string): string {
    const texts = tagText.split('\n');
    // take first line
    const title = texts.shift();
    // the other
    const nomnoml = texts.join('\n');
    const id = `nomnoml-${++NomnomlPlugin.graphIdCounter}`;
    this.graphMap.set(id, nomnoml);
    return `#### ${title} \n\n <canvas id="${id}"></canvas>`;
  }

  /**
   * Insert custom script before closing body tag.
   */
  public convertPageContents(contents: string): string {
    if (this.BODY_CLOSINNG_TAG.test(contents)) {
      return contents.replace(this.BODY_CLOSINNG_TAG, this.customScriptsAndBodyClosinngTag);
    }
    return contents;
  }

  /**
   * listen to event on initialisation
   */
  public initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_RESOLVE_BEGIN]: this.onResolveBegin,
    }).listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd,
    });
  }

  /**
   * Triggered when the converter begins converting a project.
   */
  public onResolveBegin(context: Context) {
    NomnomlPlugin.nomnomlTags(context).forEach(tag => {
      // convert
      tag.text = this.convertCommentTagText(tag.text);
    });
  }

  /**
   * Triggered after a document has been rendered, just before it is written to disc.
   * Remove duplicate lines to tidy up output
   */
  public onPageEnd(page: PageEvent) {
    if (page.contents !== undefined) {
      // convert
      page.contents = this.convertPageContents(page.contents);
    }
  }
}
