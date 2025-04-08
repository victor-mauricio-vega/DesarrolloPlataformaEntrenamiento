import { config as loadEnv } from 'dotenv';

loadEnv({
  path: process.env.NODE_ENV ? `env/.${process.env.NODE_ENV}.env` : 'env/.dev.env',
});
