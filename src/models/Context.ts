import { I18nContext } from '@grammyjs/i18n/dist/source';
import { DocumentType } from '@typegoose/typegoose';
import { Context as BaseContext } from 'grammy';
import { User } from '@/models/User';

export default class Context extends BaseContext {
    readonly i18n!: I18nContext;
    dbuser!: DocumentType<User>;

    replyWithLocalization: this['reply'] = (text, other, ...rest) => {
        text = this.i18n.t(text);
        return this.reply(text, other, ...rest);
    };
}