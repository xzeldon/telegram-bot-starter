import sendOptions from "@/helpers/sendOptions";
import Context from "@/models/Context";

export function handleHelp(context: Context) {
    return context.replyWithLocalization('help', sendOptions(context));
}