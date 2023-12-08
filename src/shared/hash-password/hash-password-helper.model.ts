export interface HashPasswordHelperModel {
  hash(password: string): Promise<string>;
  verify(hashPassword: string, password: string): Promise<boolean>;
}
