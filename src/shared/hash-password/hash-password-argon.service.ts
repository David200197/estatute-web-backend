import * as argon2 from 'argon2';
import { HashPasswordServiceModel } from './hash-password-service.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashPasswordArgonService implements HashPasswordServiceModel {
  hash = async (password: string): Promise<string> => {
    return await argon2.hash(password);
  };
  verify = async (password: string, hashPassword: string): Promise<boolean> => {
    return await argon2.verify(hashPassword, password);
  };
}
