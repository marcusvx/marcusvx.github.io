import style from './style.scss';
import Menu from '../menu';

export default function Header() {
  return (
    <nav className={style.mainNavbar} role="navigation" aria-label="main navigation">
      <div className={style.container}>
        <div className={style.navbarBrand}>
          <a href="/" className={style.navbarItem}>
            <i className="fas fa-terminal" />
            marcusvinicius.info
          </a>
        </div>

        <div className={style.navBarMenu}>
          <div className={style.navbarEnd}>
            <div className={style.navbarItem}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
