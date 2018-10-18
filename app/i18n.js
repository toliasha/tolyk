import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueCookie from 'vue-cookie';
import messages from '../data/messages.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
    silentTranslationWarn: true
});

Vue.prototype.$locale = {
    change(lang) {
        i18n.locale = lang;
        VueCookie.set('lang', lang, 365);
    }
};

export default i18n;
