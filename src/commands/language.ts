import sendOptions from "@/helpers/sendOptions";
import { languageMenu } from "@/menus/language";
import Context from "@/models/Context";

export function handleLanguage(context: Context) {
    return context.replyWithLocalization('language', {
        ...sendOptions(context),
        reply_markup: languageMenu
    });
}