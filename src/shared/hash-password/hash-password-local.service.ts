import { HashPasswordServiceModel } from './hash-password-service.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashPasswordLocalService implements HashPasswordServiceModel {
  hash = async (password: string): Promise<string> => {
    return Promise.resolve(`${password}.encrypted`);
  };
  verify = async (password: string, hashPassword: string): Promise<boolean> => {
    return hashPassword.split('.')[0] === password;
  };
}
