import Context from "@/models/Context";
import { Bot } from "grammy";
import env from '@/helpers/env';

const bot = new Bot<Context>(env.TG_TOKEN, {
    ContextConstructor: Context
});

export default bot;