import { cwd } from 'node:process';
import { resolve } from 'node:path';
import * as dotenv from 'dotenv';
import { cleanEnv, str } from 'envalid';

dotenv.config({ path: resolve(cwd(), '.env') });

export default cleanEnv(process.env, {
    TG_TOKEN: str(),
    MONGO_URI: str(),
    MONGO_DB_NAME: str()
});