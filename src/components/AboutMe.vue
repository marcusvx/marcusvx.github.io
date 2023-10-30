<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import AccordionPanel from '@/components/Accordion/AccordionPanel.vue'
import AccordionSection from '@/components/Accordion/AccordionSection.vue'
</script>

<template>
  <section class="about-me" id="about">
    <div class="container">
      <div class="column one-third">
        <div class="picture">
          <img src="@/assets/img/photo.jpg" alt="A picture of my face" />
        </div>
        <div class="profile">
          <SectionHeader>
            <template #title>
              {{ $t('about.links_title') }}
            </template>
          </SectionHeader>
          <div class="personal-wrapper">
            <span>
              <a
                class="social-link"
                href="https://www.linkedin.com/in/marcusvx/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in" />
                <span>Linkedin</span>
              </a>
            </span>
            <span>
              <a
                class="social-link"
                href="https://stackoverflow.com/users/1720847/marcus-vinicius"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-stack-overflow" />
                <span>StackOverflow</span>
              </a>
            </span>
            <span>
              <a
                class="social-link"
                href="https://github.com/marcusvx"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github" />
                <span>Github</span>
              </a>
            </span>
            <span>
              <a
                class="social-link"
                href="https://twitter.com/mavixbr"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-x-twitter" />
                <span>Twitter</span>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="introduction">
          <SectionHeader>
            <template #title> Marcus Vinicius Ximenes</template>
          </SectionHeader>
          <p>{{ $t('about.p1') }}</p>
          <p>{{ $t('about.p2') }}</p>
          <p>{{ $t('about.p3') }}</p>
          <p>{{ $t('about.p4') }}</p>
        </div>
        <div class="why-me">
          <AccordionPanel>
            <AccordionSection :title="$t('about.personal.item1.title')">
              <p>{{ $t('about.personal.item1.p1') }}</p>
              <p>{{ $t('about.personal.item1.p2') }}</p>
              <p>{{ $t('about.personal.item1.p3') }}</p>
            </AccordionSection>
            <AccordionSection :title="$t('about.personal.item2.title')">
              <p>{{ $t('about.personal.item2.p1') }}</p>
              <p>{{ $t('about.personal.item2.p2') }}</p>
            </AccordionSection>
            <AccordionSection :title="$t('about.personal.item3.title')">
              <p>{{ $t('about.personal.item3.p1') }}</p>
              <p>{{ $t('about.personal.item3.p2') }}</p>
            </AccordionSection>
          </AccordionPanel>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../styles/index.scss';
@import 'bulma/sass/grid/columns';
@import 'bulma/sass/elements/container';

.about-me {
  @extend .section;
  text-align: left;

  .container {
    @extend .container;
    @extend .columns;

    .column {
      @extend .column;
    }

    .one-third {
      @extend .is-one-third;
    }
  }

  .picture {
    text-align: center;
    margin-bottom: 20px;

    img {
      max-width: 200px;
      margin: auto;
      border-radius: 50%;
      border: 2px solid #dedede;
      background: #fff;
      padding: 7px;
      box-shadow: 0 7px 10px #999;
    }
  }

  .introduction {
    margin-bottom: 20px;

    p.introduce {
      font-size: 16px;
      color: #555;
      margin-bottom: 20px;
      text-transform: capitalize;
    }
  }

  .personal-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin: 5px 0 10px;
      color: #555;
    }

    .social-link {
      img {
        height: 32px;
        width: 32px;
      }

      span {
        padding-left: 8px;
      }
    }
  }

  .profile {
    margin-bottom: 30px;
  }

  .why-me {
    margin-bottom: 40px;
  }
}
</style>
