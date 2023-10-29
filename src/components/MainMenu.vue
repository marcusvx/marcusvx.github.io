<script setup>
import { ref } from 'vue';

const visible = ref(false);

const toggleVisibility = () => {
  document.body.style.overflow = visible.value ? 'visible' : 'hidden';
  visible.value = !visible.value;
};

const handleClick = (event) => {
  event.preventDefault();
  const anchorElement = event.target.getAttribute('href');
  const target = document.querySelector(anchorElement);
  const y = target.getBoundingClientRect().top + window.scrollY;

  window.scroll({
    top: y - 30,
    behavior: 'smooth',
  });

  toggleVisibility();
};
</script>

<template>
  <div class="menu-trigger-btn" @click="toggleVisibility">
    <span/>
    <span/>
    <span/>
  </div>
  <div class="menu-overlay" :class="(visible ? 'shown' : '')">
    <nav class="main-menu">
      <ul>
        <li>
          <a href="#hero" @click="handleClick">
            Home
          </a>
        </li>
        <li>
          <a href="#about_me" @click="handleClick">
            about me
          </a>
        </li>
        <li>
          <a href="#skills" @click="handleClick">
            skills
          </a>
        </li>
        <li>
          <a href="#experiences" @click="handleClick">
            Experiences
          </a>
        </li>
        <li>
          <a href="#contact_me" @click="handleClick">
            Contact Me
          </a>
        </li>
      </ul>

      <div class="close-menu-btn" @click="toggleVisibility">
        <i class="fas fa-times"/>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.menu-trigger-btn {
  width: 35px;
  cursor: pointer;

  & span {
    display: block;
    background-color: #1a1a1a;
    height: 2px;
    width: 28px;
    margin-bottom: 5px;
    transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);

    &:nth-child(2) {
      width: 35px;
    }

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }

  &:hover {
    & span:not(:nth-child(2)) {
      width: 38px;
    }

    & span:nth-child(2) {
      width: 25px;
    }
  }
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #000;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  transform: translateY(40px);
  transition: all 0.3s ease;

  &.shown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  & .main-menu {
    & ul {
      padding: 0;
      list-style: none;
      margin-top: 50px;

      & li {
        text-align: center;

        & a {
          display: inline-block;
          position: relative;
          text-align: center;
          font-size: 21px;
          font-weight: bold;
          padding: 10px;
          margin: 0 auto;
          color: #929292;
          text-transform: capitalize;
          -webkit-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;

          &::after {
            position: absolute;
            content: '';
            width: 0;
            height: 2px;
            left: 0;
            top: 50%;
            background-color: #fff;
            -webkit-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }

          &:hover {
            color: #fff;

            &::after {
              width: 100%;
            }
          }
        }
      }
    }

    & .close-menu-btn {
      position: absolute;
      top: 20px;
      right: 10%;
      cursor: pointer;
      color: #929292;
      font-size: 28px;
      transition: all 0.3s ease;

      & :hover {
        color: #fff;
      }
    }
  }
}

</style>