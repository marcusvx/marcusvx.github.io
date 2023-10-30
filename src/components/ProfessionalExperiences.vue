<script setup>
import SectionHeader from './SectionHeader.vue' // Import the SectionHeader component
import { onMounted, ref } from 'vue' // Import Vue 3 composition API functions
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

const currentYear = new Date().getFullYear().toString()
const experiences = ref([])
const firstYear = ref('2008')
const lastYear = ref(currentYear)

const formatJobDate = (date) => {
  return dayjs(date).format('MMM YYYY')
}

onMounted(async () => {
  const i18n = useI18n()
  import(`@/assets/json/${i18n.locale.value}/experiences.json`).then((data) => {
    experiences.value = data.default

    const firstExperience = experiences.value[experiences.value.length - 1]
    const lastExperience = experiences.value[0]

    firstYear.value = dayjs(firstExperience.start).format('YYYY')
    lastYear.value = dayjs(lastExperience.end || currentYear).format('YYYY')
  })
})
</script>
<template>
  <section class="experiences" id="experiences">
    <SectionHeader>
      <template #title>
        {{ $t('experiences.title') }}
      </template>
      <template #subTitle>
        {{ $t('experiences.subtitle') }}
      </template>
    </SectionHeader>

    <div class="timeline">
      <header class="timeline-header">
        <span>{{ lastYear }}</span>
      </header>
      <template v-if="experiences.length">
        <div v-for="(item, index) in experiences" :key="`${item.company}-${item.title}`">
          <template v-if="index % 2 !== 0">
            <header class="timeline-header">
              <span>{{ new Date(item.end || item.start).getFullYear().toString() }}</span>
            </header>
          </template>
          <div :key="index" class="timeline-block">
            <div class="marker" />

            <div class="content">
              <div class="timeline-item-header">
                <h3>{{ item.company }}</h3>

                <p class="duration">
                  {{ formatJobDate(item.start) }} -
                  {{ item.end ? formatJobDate(item.end) : $t('experiences.current') }}
                </p>
                <span>{{ item.title }}</span>
              </div>

              <template v-for="(desc, i) in item.description" :key="i">
                <p>{{ desc }}</p>
              </template>
            </div>
          </div>
        </div>
      </template>
      <header class="timeline-header">
        <span>{{ firstYear }}</span>
      </header>
    </div>
  </section>
</template>

<style lang="scss">
@import '../styles/index.scss';
@import 'bulma/sass/utilities/mixins';
@import 'bulma/sass/elements/container';
@import 'bulma/sass/grid/columns';
@import 'bulma-timeline/dist/css/bulma-timeline';
@import 'bulma/sass/elements/tag';

.experiences {
  @extend .section;
  @extend .container;

  h2 {
    color: rgb(30, 30, 30);
  }

  .timeline {
    @extend .timeline;
    width: 90%;

    @include mobile {
      width: 80%;
    }

    .timeline-header {
      @extend .timeline-header;

      span {
        @extend .tag;
      }
    }

    .timeline-block {
      @extend .timeline-item;

      .marker {
        @extend .timeline-marker;
      }

      .content {
        @extend .timeline-content;
        text-align: left;
        padding-top: 0;

        p.duration {
          font-size: 0.9rem;
          margin: 0;
          text-transform: capitalize;
        }

        .timeline-item-header {
          @extend .heading;
          border-bottom: solid 1px #ccc;
          padding-bottom: 5px;
        }

        h3 {
          margin: 0;
        }
      }
    }

    position: relative;
    margin: 0 auto;
  }
}
</style>
