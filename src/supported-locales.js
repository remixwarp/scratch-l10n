/**
 * Currently supported locales for the Scratch Project
 * @type {Object} Key Value pairs of locale code: Language name written in the language
 */

const locales = {
    'en': {name: 'English'},
    'zh-cn': {name: '简体中文'},
    'wyw': {name: '文言文'},
    'gdzx': {name: '梗体中文'}
};

const customLocales = {
    // TODO: replace zh-cn, zh-tw with zh-Hans and zh-Hant then customLocales is unnecessary
    'zh-cn': {
        locale: 'zh-cn',
        parentLocale: 'zh'
    },
    'wyw': {
        locale: 'wyw',
        parentLocale: 'zh'
    },
    'gdzx': {
        locale: 'gdzx',
        parentLocale: 'zh'
    }
};

const localeMap = {
    'zh-cn': 'zh_CN',
    'wyw': 'zh_CN',
    'gdzx': 'zh_CN'
};

// list of RTL locales supported, and a function to check whether a locale is RTL
const rtlLocales = [

];

const isRtl = locale => {
    return rtlLocales.indexOf(locale) !== -1;
};

export {locales as default, customLocales, localeMap, isRtl};
