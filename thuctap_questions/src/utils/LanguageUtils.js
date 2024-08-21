import messagesVi from '../translations/vi.json';
import messagesEn from '../translations/en.json';

const flattenMessages = (nestedMessages, prefix = '') => {
    if (nestedMessages == null) {
        return {};
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            Object.assign(messages, { [prefixedKey]: value });
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
};

const messages = {
    'vi': flattenMessages(messagesVi),
    'en': flattenMessages(messagesEn),
};

export default class LanguageUtils {
    static getMessageByKey(key, lang) {
        return messages[lang][key];
    }

    static getFlattenedMessages() {
        return messages;
    }
}
