import style from "./style";
import classNames from "classnames";

const Footer = () => {
  return (
    <footer class={style.footer}>
      <div class={style.footerContainer}>
        <div class={style.footerRow}>
          <div class={style.followMe}>Reach me</div>
          <div class={style.links}>
            <div class={style.iconWrapper}>
              <a
                href="https://www.linkedin.com/in/marcusvx/"
                class={classNames(style.icon, style.lin)}
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://stackoverflow.com/users/1720847/marcus-vinicius"
                class={classNames(style.icon, style.so)}
                target="_blank"
              >
                <i class="fab fa-stack-overflow"></i>
                <i class="fab fa-stack-overflow"></i>
              </a>
              <a
                href="https://github.com/marcusvx"
                class={classNames(style.icon, style.gh)}
                target="_blank"
              >
                <i class="fab fa-github"></i>
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com/mavixbr"
                class={classNames(style.icon, style.tw)}
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class={style.copyright}>
            <h6>&copy; Marcus Vinicius Ximenes 2020 All Rights Reserved</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
