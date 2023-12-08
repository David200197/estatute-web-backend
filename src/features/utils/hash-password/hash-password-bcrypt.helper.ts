import bcrypt from 'bcrypt';
import { HashPasswordHelperModel } from './hash-password-helper.model';

export class HashPasswordBcryptHelper implements HashPasswordHelperModel {
  hash(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }
  verify(hashPassword: string, password: string): Promise<boolean> {
    return bcrypt.compare(hashPassword, password);
  }
}
