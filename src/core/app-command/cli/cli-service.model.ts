export interface CliServiceModal {
  resource(dirname: string): Promise<void>;
  commandHandler(dirname: string): Promise<void>;
  queryHandler(dirname: string): Promise<void>;
}
