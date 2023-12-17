import bcrypt from 'bcrypt';
import { HashPasswordServiceModel } from './hash-password-helper-service.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashPasswordBcryptService implements HashPasswordServiceModel {
  hash(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }
  verify(password: string, hashPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashPassword);
  }
}
