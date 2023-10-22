import style from './style.scss';
import Menu from '../menu';
import { Localization } from '../../localization';
import { useContext } from 'preact/hooks';
import classNames from 'classnames';

const LANGUAGES = {
  'en-us': 'English',
  'pt-br': 'Português',
};

export default function Header() {
  const context = useContext(Localization);
  const languageOptions = Object.entries(LANGUAGES)
    .filter(lng => lng[0] !== context.value)
    .map(lng => ({
      code: lng[0],
      name: lng[1],
    }));
  const handleChangeLanguage = code => {
    context.value = code;
  };

  return (
    <nav className={style.mainNavbar} role="navigation" aria-label="main navigation">
      <div className={style.container}>
        <div className={style.navbarBrand}>
          <a href="/" className={style.navbarItem}>
            <i className="fas fa-terminal" />
            marcusvinicius.info
          </a>
        </div>

        <div className={style.navbarEnd}>
          <div className={style.languageOptions}>
            <button
              className={classNames(style.languageDropdownLink, style['is-arrowless'])}
              onClick={() => handleChangeLanguage(context.value)}
            >
              <i className="fa-solid fa-language"></i> {LANGUAGES[context.value]}
            </button>
            {languageOptions.map(language => (
              <div key={language.code} className={style.languageDropdown}>
                <button onClick={() => handleChangeLanguage(language.code)}>{language.name}</button>
              </div>
            ))}
          </div>
          <div className={style.navbarItem}>
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
}
