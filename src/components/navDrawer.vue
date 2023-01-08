<template>
  <q-list
  >
    <essential-link :title="route.title"
                    :caption="route.caption"
                    :img="route.img"
                    :icon="route.icon"
                    :key="i"
                    v-for="(route, i) in routes" />
  </q-list>
</template>

<script>
import { defineComponent } from 'vue'
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: 'navDrawer',
  components: {EssentialLink},
  data() {
    return {
      routes: [
        {
          title: 'WageUp',
          caption: 'Gamification & Performance Management Tech Suite',
          img: 'https://wageup-devin.s3.us-east-1.amazonaws.com/wageupLogoSmall425x425.png'
        },
        {
          title: 'DebaterHub',
          caption: 'Machine Learning on Debate Data for Persuasive AI',
          img: 'https://wageup-devin.s3.us-east-1.amazonaws.com/debaterHubLogoSymbol.png'
        },
        {
          title: 'Press & Media',
          caption: 'TedTalk, Podcasts',
          icon: 'newspaper'
        },
        {
          title: 'Music',
          caption: 'Some passion project music',
          icon: 'music_note'
        },
        {
          title: 'Academic Papers',
          caption: 'A few papers I am particularly proud of',
          icon: 'history_edu'
        },
        {
          title: 'Coursework',
          caption: 'Computer Science Courses',
          icon: 'school'
        }
      ]
    }
  },
})
</script>
