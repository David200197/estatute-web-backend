import dotenv from 'dotenv';
dotenv.config();

export default () => ({
  database: {
    name: process.env.DB_NAME,
    port: Number(process.env.DB_PORT || 0),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
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
