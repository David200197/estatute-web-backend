import dotenv from 'dotenv';
dotenv.config();

export default () => ({
  database: {
    uri: process.env.DB_URI,
  },
  email: {
    from: process.env.EMAIL_FROM,
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  api: {
    front: process.env.API_FRONT,
  },
  whatsapp: {
    apiUrl: process.env.WHATSAPP_API_URL,
    username: process.env.WHATSAPP_API_USERNAME,
    password: process.env.WHATSAPP_API_PASSWORD,
  },
  sms: {
    accountSid: process.env.SMS_ACCOUNT_SID,
    authToken: process.env.SMS_AUTH_TOKEN,
    phoneNumber: process.env.SMS_PHONE_NUMBER,
  },
});
