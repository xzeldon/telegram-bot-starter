import { connect } from 'mongoose';
import env from '@/helpers/env';

export default function startMongo() {
    return connect(env.MONGO_URI, {
        dbName: env.MONGO_DB_NAME
    });
}
