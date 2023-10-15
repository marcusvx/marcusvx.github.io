import style from './style';
import classNames from 'classnames';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerRow}>
          <div className={style.followMe}>Reach me</div>
          <div className={style.links}>
            <div className={style.iconWrapper}>
              <a
                href="https://www.linkedin.com/in/marcusvx/"
                className={classNames(style.icon, style.lin)}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in" />
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://stackoverflow.com/users/1720847/marcus-vinicius"
                className={classNames(style.icon, style.so)}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-stack-overflow" />
                <i className="fab fa-stack-overflow" />
              </a>
              <a
                href="https://github.com/marcusvx"
                className={classNames(style.icon, style.gh)}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
                <i className="fab fa-github" />
              </a>
              <a
                href="https://twitter.com/mavixbr"
                className={classNames(style.icon, style.tw)}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter" />
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
          <div className={style.copyright}>
            <h6>&copy; Marcus Vinicius Ximenes 2020 All Rights Reserved</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
