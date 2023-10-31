<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
import SectionHeader from '@/components/SectionHeader.vue'
import PieChart from '@/components/PieChart.vue'
import BarChart from '@/components/BarChart.vue'

const skills = ref([])
const abilities = ref([])

onMounted(() => {
  const i18n = useI18n()
  import(`@/assets/json/${i18n.locale.value}/tech-skills.json`).then((data) => {
    skills.value = data.default
  })
  import(`@/assets/json/${i18n.locale.value}/abilities.json`).then((data) => {
    abilities.value = data.default
  })
})
</script>

<template>
  <section class="technical-skills" id="skills" ref="forwardedRef">
    <div class="container">
      <SectionHeader darkBg>
        <template #title>
          {{ $t('skills.title') }}
        </template>
        <template #subtitle>
          {{ $t('skills.subtitle') }}
        </template>
      </SectionHeader>

      <div class="skills-wrapper" v-if="skills">
        <div v-for="item in skills" :key="item.label" class="skill">
          <PieChart :percent="item.value" :title="item.label" />
        </div>
      </div>

      <div class="other-skills-wrapper">
        <SectionHeader darkBg>
          <template #title>
            {{ $t('skills.other_skills.title') }}
          </template>
          <template #subTitle>
            {{ $t('skills.other_skills.subtitle') }}
          </template>
        </SectionHeader>

        <div class="other-skills" v-if="abilities">
          <div v-for="item in abilities" :key="item.label" class="skill-bar">
            <BarChart :value="item.value" :label="item.label" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../styles/index.scss';
@import 'bulma/sass/elements/container';
@import 'bulma/sass/grid/columns';
@import 'bulma/sass/helpers/spacing';

.technical-skills {
  @extend .section;

  .container {
    @extend .container;
  }

  background-color: $dark;

  h2 {
    color: #eaeaea;
    position: relative;
  }

  .heading-line {
    background: #fff;
  }

  .skills-wrapper {
    @extend .columns;

    margin-top: 40px;

    .skill {
      @extend .column;
      margin-bottom: 40px;

      h2 {
        margin-top: 10px;
        text-transform: uppercase;
      }
    }
  }

  .other-skills-wrapper {
    margin-top: 40px;

    .other-skills {
      @extend .columns;
      @extend .is-multiline;
      @extend .is-centered;

      .skill-bar {
        @extend .column;
        @extend .is-one-third;

        @include mobile {
          padding-left: 40px;
        }
      }
    }
  }
}
</style>
