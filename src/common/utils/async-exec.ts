import { exec } from 'child_process';
import { promiseResolver } from './promise-resolver';

type Options = {
  onError?: (error: string) => void;
  onSuccess?: (message: string) => void;
};

export const asyncExec = async (
  command: string,
  { onError, onSuccess }: Options = {},
) => {
  const { promise, reject, resolve } = promiseResolver<string>();
  exec(command, (error, stdout, stderr) => {
    if (error) {
      onError && onError(error.message);
      reject(new Error(`Error: ${error.message}`));
    }
    if (stderr) {
      onError && onError(stderr);
      reject(new Error(`Error: ${stderr}`));
    }
    onSuccess && onSuccess(stdout);
    resolve(stdout);
  });
  return promise;
};
