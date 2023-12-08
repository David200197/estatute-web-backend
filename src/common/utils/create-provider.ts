import { Provider } from '@nestjs/common';
import { Instantiable } from '../interfaces/instantiable';

export const createProvider = <T>(
  useClass: Instantiable<T>,
): [token: Instantiable<T>, provider: Provider] => {
  const provider: Provider = {
    provide: useClass,
    useClass: useClass,
  };
  return [useClass, provider];
};
