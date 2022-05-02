import 'module-alias/register';
import 'reflect-metadata';
import 'source-map-support/register';

import { ignoreOld, sequentialize } from 'grammy-middlewares';
import bot from './helpers/bot';
import startMongo from './helpers/startMongo';
import i18n from './helpers/i18n';
import { run } from '@grammyjs/runner';
import { handleHelp } from './commands/help';
import { configureI18n } from './middlewares/configureI18n';
import { attachUser } from './middlewares/attachUser';
import { handleLanguage } from './commands/language';
import { languageMenu } from './menus/language';

async function runApp() {
    console.log('Starting app...');
    await startMongo();
    console.log('Mongodb connected');
    bot
        // middlewares
        .use(sequentialize())
        .use(ignoreOld())
        .use(attachUser)
        .use(i18n.middleware())
        .use(configureI18n)

        // menus
        .use(languageMenu);
    bot.command(['help', 'start'], handleHelp);
    bot.command('language', handleLanguage);
    bot.catch(console.error);
    await bot.init();
    run(bot);
    console.log(`Bot @${bot.botInfo.username} is up and running`);
}

void runApp();