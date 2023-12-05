import path from 'path';
import { GeneratorTemplate } from '../utils/generator-template';

export const generateCommandHandler = async (dirname: string) => {
  const generator = new GeneratorTemplate(dirname, {
    extension: 'ts',
    input: path.join(
      process.cwd(),
      'src',
      'core',
      'app-command',
      'cli',
      'templates',
      'command-handler',
    ),
    output: path.join(process.cwd(), 'src'),
  });
  generator.add({
    templateInput: 'name.command',
    templateOutput: (name) => `${name.kebabCase}.command`,
  });
  generator.add({
    templateInput: 'name.handler',
    templateOutput: (name) => `${name.kebabCase}.handler`,
  });
  generator.add({
    templateInput: 'name.handler.model',
    templateOutput: (name) => `${name.kebabCase}-handler.model`,
  });
  generator.add({
    templateInput: 'name.handler.provider',
    templateOutput: (name) => `${name.kebabCase}-handler.provider`,
  });
  await generator.build();
};
