import { exec } from 'child_process';

type Options = {
  onError?: (error: string) => void;
  onSuccess?: (message: string) => void;
};

export const asyncExec = async (
  command: string,
  { onError, onSuccess }: Options = {},
) =>
  new Promise((resolve, reject) => {
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
  });
