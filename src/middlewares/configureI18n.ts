import { NextFunction } from 'grammy';
import Context from '@/models/Context';

export function configureI18n(ctx: Context, next: NextFunction) {
    ctx.i18n.locale(ctx.dbuser.language);
    return next();
}