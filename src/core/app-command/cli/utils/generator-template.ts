import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import * as ejs from 'ejs';
import { NameControl } from './name-control.lib';

type Options = {
  output?: string;
  input?: string;
  extension?: string;
  context?: object;
};
type AddOptions = {
  output?: string;
  input?: string;
  extension?: string;
  templateOutput: (name: NameControl) => string;
  templateInput: string;
  context?: object;
};

export class GeneratorTemplate {
  private readonly listAddOptions: AddOptions[] = [];
  private readonly name: NameControl;

  constructor(dirname: string, private readonly options?: Options) {
    this.name = new NameControl(dirname);
  }

  add(addOptions: AddOptions) {
    this.listAddOptions.push(addOptions);
  }

  private generateTemplate = async (addOptions: AddOptions) => {
    const extension = this.options.extension || addOptions.extension;

    const templateInputUrlPaths = [
      ...new NameControl(addOptions.templateInput).urlPaths,
    ];
    const templateInputName = `${templateInputUrlPaths.pop()}.ejs`;

    const input = path.join(
      this.options.input || addOptions.input,
      ...templateInputUrlPaths,
      templateInputName,
    );

    const templateOutputUrlPaths = [
      ...new NameControl(addOptions.templateOutput(this.name)).urlPaths,
    ];
    const templateName = `${templateOutputUrlPaths.pop()}.${extension}`;

    const outputFolder = path.join(
      this.options.output || addOptions.output,
      ...this.name.urlPaths,
      ...templateOutputUrlPaths,
    );
    const output = path.join(outputFolder, templateName);

    const template = await readFile(path.join(input), {
      encoding: 'utf-8',
    });

    const context = {
      ...(this.options.context || {}),
      ...(addOptions.context || {}),
    };

    const ejsTemplate = ejs.render(template, {
      name: this.name,
      ...context,
    });

    await mkdir(outputFolder, { recursive: true });
    await writeFile(output, ejsTemplate);
  };

  async build() {
    await Promise.all(this.listAddOptions.map(this.generateTemplate));
  }
}
