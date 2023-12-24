import dotenv from 'dotenv';
dotenv.config();

type DbType =
  | 'mysql'
  | 'mongo'
  | 'mariadb'
  | 'postgresql'
  | 'sqlite'
  | 'better-sqlite';

const validateDbType = (value: string): DbType => {
  const listType = [
    'mysql',
    'mongo',
    'mariadb',
    'postgresql',
    'sqlite',
    'better-sqlite',
  ];
  if (!listType.includes(value))
    throw new TypeError(`env TYPE_DB is not ${listType.join(', ')}`);
  return value as DbType;
};

export default () => ({
  database: {
    name: process.env.DB_NAME,
    port: Number(process.env.DB_PORT || 0),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    type: validateDbType(process.env.DB_TYPE),
  },
  api: {
    front: process.env.API_FRONT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    time: process.env.JWT_EXPIRATION_TIME,
    refresh_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
    refresh_time: process.env.JWT_REFRESH_EXPIRATION_TIME,
  },
});
