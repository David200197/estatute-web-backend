import { Provider } from '@nestjs/common';
import { Instantiable } from '../interfaces/instantiable';

export const createSymbolProvider = <T>(
  useClass: Instantiable<T>,
): [token: symbol, provider: Provider] => {
  const token = Symbol(useClass.name);
  const provider: Provider = {
    provide: token,
    useClass: useClass,
  };
  return [token, provider];
};
