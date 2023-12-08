import path from 'path';
import { GeneratorTemplate } from '../utils/generator-template';
import { NameControl } from '../utils/name-control.lib';

export const generateResource = async (dirname: string): Promise<void> => {
  const TEST_FOLDER = '__test__';
  const DTOS_FOLDER = 'dto';
  const ENTITIES_FOLDER = 'entities';
  const HANDLER_FOLDER = 'handlers';
  const MODELS_FOLDER = 'models';
  const PROVIDERS_FOLDER = 'providers';
  const REPOSITORIES_FOLDER = 'repositories';
  const EXCEPTIONS_FOLDER = 'exceptions';

  const createMethod = new NameControl('create');
  const updateMethod = new NameControl('update');
  const removeMethod = new NameControl('remove');
  const findAllMethod = new NameControl('findAll');
  const findOneMethod = new NameControl('findOne');
  const commandType = new NameControl('command');
  const queryType = new NameControl('query');

  const generator = new GeneratorTemplate(dirname, {
    extension: 'ts',
    input: path.join(
      process.cwd(),
      'src',
      'core',
      'app-command',
      'cli',
      'templates',
      'resource',
    ),
    output: path.join(process.cwd(), 'src'),
  });
  //BASE
  generator.add({
    templateInput: 'name.controller',
    templateOutput: (name) => `${name.kebabCase}.controller`,
  });
  generator.add({
    templateInput: 'name.module',
    templateOutput: (name) => `${name.kebabCase}.module`,
  });
  generator.add({
    templateInput: 'name.cli',
    templateOutput: (name) => `${name.kebabCase}.cli`,
  });
  generator.add({
    templateInput: 'name.cron',
    templateOutput: (name) => `${name.kebabCase}.cron`,
  });
  generator.add({
    templateInput: 'name.listener',
    templateOutput: (name) => `${name.kebabCase}.listener`,
  });
  //EXCEPTIONS
  generator.add({
    templateInput: 'name-not-found.exception',
    templateOutput: (name) =>
      path.join(EXCEPTIONS_FOLDER, `${name.kebabCase}-not-found.exception`),
  });
  //REPOSITORY
  generator.add({
    templateInput: 'name.repository',
    templateOutput: (name) =>
      path.join(REPOSITORIES_FOLDER, `${name.kebabCase}-local.repository`),
  });
  //MODELS
  generator.add({
    templateInput: 'name.repository.model',
    templateOutput: (name) =>
      path.join(MODELS_FOLDER, `${name.kebabCase}-repository.model`),
  });
  generator.add({
    templateInput: 'name.model',
    templateOutput: (name) =>
      path.join(MODELS_FOLDER, `${name.kebabCase}.model`),
  });
  generator.add({
    templateInput: 'names.model',
    templateOutput: (name) =>
      path.join(MODELS_FOLDER, `${name.kebabCase}s.model`),
  });
  //ENTITIES
  generator.add({
    templateInput: 'name',
    templateOutput: (name) => path.join(ENTITIES_FOLDER, `${name.kebabCase}`),
  });
  generator.add({
    templateInput: 'names',
    templateOutput: (name) => path.join(ENTITIES_FOLDER, `${name.kebabCase}s`),
  });
  //PROVIDERS
  generator.add({
    templateInput: 'name.repository.provider',
    templateOutput: (name) =>
      path.join(PROVIDERS_FOLDER, `${name.kebabCase}-repository.provider`),
  });
  //TEST
  generator.add({
    templateInput: 'name.controller.spec',
    templateOutput: (name) =>
      path.join(TEST_FOLDER, `${name.kebabCase}.controller.spec`),
  });
  generator.add({
    templateInput: 'name.repository.spec',
    templateOutput: (name) =>
      path.join(TEST_FOLDER, `${name.kebabCase}.repository.spec`),
  });
  generator.add({
    templateInput: 'method-name.handler.spec',
    templateOutput: (name) =>
      path.join(TEST_FOLDER, `create-${name.kebabCase}.handler.spec`),
    context: { method: createMethod },
  });
  generator.add({
    templateInput: 'method-name.handler.spec',
    templateOutput: (name) =>
      path.join(TEST_FOLDER, `find-all-${name.kebabCase}.handler.spec`),
    context: { method: findAllMethod },
  });
  generator.add({
    templateInput: 'method-name.handler.spec',
    templateOutput: (name) =>
      path.join(TEST_FOLDER, `find-one-${name.kebabCase}.handler.spec`),
    context: { method: findOneMethod },
  });
  generator.add({
    templateInput: 'method-name.handler.spec',
    templateOutput: (name) =>
      path.join(TEST_FOLDER, `remove-${name.kebabCase}.handler.spec`),
    context: { method: removeMethod },
  });
  generator.add({
    templateInput: 'method-name.handler.spec',
    templateOutput: (name) =>
      path.join(TEST_FOLDER, `update-${name.kebabCase}.handler.spec`),
    context: { method: updateMethod },
  });
  //DTO
  generator.add({
    templateInput: 'create-name.dto',
    templateOutput: (name) =>
      path.join(DTOS_FOLDER, `create-${name.kebabCase}.dto`),
  });
  generator.add({
    templateInput: 'update-name.dto',
    templateOutput: (name) =>
      path.join(DTOS_FOLDER, `update-${name.kebabCase}.dto`),
  });
  //HANDLERS
  //Create
  generator.add({
    templateInput: 'method.name.command',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        createMethod.kebabCase,
        `${createMethod.kebabCase}-${name.kebabCase}.command`,
      ),
    context: { method: createMethod, type: 'create', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        createMethod.kebabCase,
        `${createMethod.kebabCase}-${name.kebabCase}.handler`,
      ),
    context: { method: createMethod, type: 'create', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler.model',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        createMethod.kebabCase,
        `${createMethod.kebabCase}-${name.kebabCase}-handler.model`,
      ),
    context: { method: createMethod, type: 'create', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler.provider',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        createMethod.kebabCase,
        `${createMethod.kebabCase}-${name.kebabCase}-handler.provider`,
      ),
    context: { method: createMethod, type: 'create', typeCQRS: commandType },
  });
  //Update
  generator.add({
    templateInput: 'method.name.command',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        updateMethod.kebabCase,
        `${updateMethod.kebabCase}-${name.kebabCase}.command`,
      ),
    context: { method: updateMethod, type: 'update', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        updateMethod.kebabCase,
        `${updateMethod.kebabCase}-${name.kebabCase}.handler`,
      ),
    context: { method: updateMethod, type: 'update', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler.model',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        updateMethod.kebabCase,
        `${updateMethod.kebabCase}-${name.kebabCase}-handler.model`,
      ),
    context: { method: updateMethod, type: 'update', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler.provider',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        updateMethod.kebabCase,
        `${updateMethod.kebabCase}-${name.kebabCase}-handler.provider`,
      ),
    context: { method: updateMethod, type: 'update', typeCQRS: commandType },
  });
  //Remove
  generator.add({
    templateInput: 'method.name.command',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        removeMethod.kebabCase,
        `${removeMethod.kebabCase}-${name.kebabCase}.command`,
      ),
    context: { method: removeMethod, type: 'remove', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        removeMethod.kebabCase,
        `${removeMethod.kebabCase}-${name.kebabCase}.handler`,
      ),
    context: { method: removeMethod, type: 'remove', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler.model',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        removeMethod.kebabCase,
        `${removeMethod.kebabCase}-${name.kebabCase}-handler.model`,
      ),
    context: { method: removeMethod, type: 'remove', typeCQRS: commandType },
  });
  generator.add({
    templateInput: 'method.name.handler.provider',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        removeMethod.kebabCase,
        `${removeMethod.kebabCase}-${name.kebabCase}-handler.provider`,
      ),
    context: { method: removeMethod, type: 'remove', typeCQRS: commandType },
  });
  //FindAll
  generator.add({
    templateInput: 'method.name.command',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        findAllMethod.kebabCase,
        `${findAllMethod.kebabCase}-${name.kebabCase}.query`,
      ),
    context: {
      method: findAllMethod,
      type: 'findAll',
      typeCQRS: queryType,
    },
  });
  generator.add({
    templateInput: 'method.name.handler',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        findAllMethod.kebabCase,
        `${findAllMethod.kebabCase}-${name.kebabCase}.handler`,
      ),
    context: {
      method: findAllMethod,
      type: 'findAll',
      typeCQRS: queryType,
    },
  });
  generator.add({
    templateInput: 'method.name.handler.model',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        findAllMethod.kebabCase,
        `${findAllMethod.kebabCase}-${name.kebabCase}-handler.model`,
      ),
    context: { method: findAllMethod, type: 'findAll', typeCQRS: queryType },
  });
  generator.add({
    templateInput: 'method.name.handler.provider',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        findAllMethod.kebabCase,
        `${findAllMethod.kebabCase}-${name.kebabCase}-handler.provider`,
      ),
    context: {
      method: findAllMethod,
      type: 'findAll',
      typeCQRS: queryType,
    },
  });
  //FindOne
  generator.add({
    templateInput: 'method.name.command',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        findOneMethod.kebabCase,
        `${findOneMethod.kebabCase}-${name.kebabCase}.query`,
      ),
    context: {
      method: findOneMethod,
      type: 'findOne',
      typeCQRS: queryType,
    },
  });
  generator.add({
    templateInput: 'method.name.handler',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        findOneMethod.kebabCase,
        `${findOneMethod.kebabCase}-${name.kebabCase}.handler`,
      ),
    context: { method: findOneMethod, type: 'findOne', typeCQRS: queryType },
  });
  generator.add({
    templateInput: 'method.name.handler.model',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        findOneMethod.kebabCase,
        `${findOneMethod.kebabCase}-${name.kebabCase}-handler.model`,
      ),
    context: { method: findOneMethod, type: 'findOne', typeCQRS: queryType },
  });
  generator.add({
    templateInput: 'method.name.handler.provider',
    templateOutput: (name) =>
      path.join(
        HANDLER_FOLDER,
        findOneMethod.kebabCase,
        `${findOneMethod.kebabCase}-${name.kebabCase}-handler.provider`,
      ),
    context: { method: findOneMethod, type: 'findOne', typeCQRS: queryType },
  });
  await generator.build();
};
