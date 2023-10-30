<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-row">
        <div class="follow-me">
          {{ $t('footer.reach_me') }}
        </div>
        <div class="links">
          <div class="icon-wrapper">
            <a
              href="https://www.linkedin.com/in/marcusvx/"
              class="icon lin"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin-in" />
              <i class="fab fa-linkedin-in" />
            </a>
            <a
              href="https://stackoverflow.com/users/1720847/marcus-vinicius"
              class="icon so"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-stack-overflow" />
              <i class="fab fa-stack-overflow" />
            </a>
            <a href="https://github.com/marcusvx" class="icon gh" target="_blank" rel="noreferrer">
              <i class="fab fa-github" />
              <i class="fab fa-github" />
            </a>
            <a href="https://twitter.com/mavixbr" class="icon tw" target="_blank" rel="noreferrer">
              <i class="fab fa-x-twitter" />
              <i class="fab fa-x-twitter" />
            </a>
          </div>
        </div>
        <div class="copyright">
          <h6>&copy; Marcus Vinicius Ximenes 2023 - {{ $t('footer.copyright') }}</h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/index.scss';

.footer {
  background: $dark;
  text-align: center;

  .footer-container {
    .footer-row {
      .follow-me {
        background: $white;
        border-radius: 0 0 10px 10px;
        display: inline-block;
        font-weight: 700;
        padding: 10px 20px;
        position: relative;
        text-transform: capitalize;
        width: 130px;

        &:before {
          border-right: 10px solid $lightGray;
          border-top: 10px solid transparent;
          content: '';
          left: -10px;
          position: absolute;
          top: -10px;
        }

        &:after {
          border-left: 10px solid $lightGray;
          border-top: 10px solid transparent;
          content: '';
          left: 170px;
          position: absolute;
          top: -10px;
        }
      }

      .icon-wrapper {
        line-height: 1;
        margin-bottom: 40px;
        margin-top: 40px;
        text-align: center;

        .icon {
          -webkit-transition: all 0.3s;
          background: #4c4c4c;
          color: $white;
          display: inline-block;
          font-size: 1.5em;
          height: 50px;
          line-height: 50px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s;
          width: 50px;

          i {
            -webkit-transition: all 0.3s;
            display: block;
            line-height: inherit;
            position: relative;
            transition: all 0.3s;
          }

          &:hover {
            i {
              &:first-child {
                margin-top: -50px;
              }
            }
          }
        }

        .icon.fb {
          &:hover {
            background: #3b5998;
          }
        }

        .icon.tw {
          &:hover {
            background: #55acee;
          }
        }

        .icon.gh {
          &:hover {
            background: $colorDefault;
          }
        }

        .icon.gp {
          &:hover {
            background: #dc4e41;
          }
        }

        .icon.lin {
          &:hover {
            background: #0077b5;
          }
        }

        .icon.so {
          &:hover {
            background: #f48024;
          }
        }
      }

      .copyright {
        border-top: 1px solid $colorDefault;
        padding: 15px 0;

        h6 {
          color: #777777;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
