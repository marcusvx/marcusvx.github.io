import { createContext } from 'preact';
import { signal } from '@preact/signals';
import { IntlProvider } from 'preact-i18n';
import { useState } from 'preact/hooks';
import defaultTranslation from '../public/locales/pt-br.json';
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

const language = signal('en-us');

export const Localization = createContext(language);

export const LocalizationProvider = ({ children }) => {
  const [definition, setDefinition] = useState(defaultTranslation);

  language.subscribe(value => {
    import(`../public/locales/${value}.json`).then(result => setDefinition(result.default));
    dayjs.locale(value);
  });

  return (
    <Localization.Provider value={language}>
      <IntlProvider definition={definition}>{children}</IntlProvider>
    </Localization.Provider>
  );
};
