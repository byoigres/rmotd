import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';
import { addLocaleData } from 'react-intl';

// Locales
import enLocaleMessages from './locales/en';
import esLocaleMessages from './locales/es';

// Markdown
import markdownWhatIsThisEn from './markdown/what-is-this.en.md';
import markdownWhatIsThisEs from './markdown/what-is-this.es.md';
import markdownAboutEn from './markdown/about.en.md';
import markdownAboutEs from './markdown/about.es.md';

enLocaleMessages['content.what-is-this'] = markdownWhatIsThisEn;
enLocaleMessages['content.about'] = markdownAboutEn;

esLocaleMessages['content.what-is-this'] = markdownWhatIsThisEs;
esLocaleMessages['content.about'] = markdownAboutEs;

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

const messages = {
  en: enLocaleMessages,
  es: esLocaleMessages,
};

export default messages;
