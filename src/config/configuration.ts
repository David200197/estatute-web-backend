import dotenv from 'dotenv';
dotenv.config();

export default () => ({
  database: {
    uri: process.env.DB_URI,
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
