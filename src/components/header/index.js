import style from './style';
import Menu from '../menu';

const Header = () => (
  <header className={style.mainHeaderWrapper}>
    <div className={style.container}>
      <div className={style.mainHeader}>
        <a href="/" className={style.navbarBrand}>
          <i className="fas fa-terminal" />
          marcusvinicius.info
        </a>

        <Menu />
      </div>
    </div>
  </header>
);

export default Header;
