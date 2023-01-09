<template>
  <q-list
  >
    <essential-link :title="route.title"
                    :caption="route.caption"
                    :img="route.img"
                    :icon="route.icon"
                    :link="route.link"
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
          title: 'Ted Talk',
          caption: 'Morality and Artificial Intelligence: The Science and Beyond',
          link: '',
          img: 'https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-61-512.png'
        },
        {
          title: 'Podcast',
          caption: 'How to Teach Artifical Intelligence Morality and Ethics',
          img: 'data:image/jpeg;base64,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',
          link: 'https://podcasts.nu/avsnitt/unbox-your-world/how-to-teach-artificial-intelligence-morality-and-ethics-rUIyXaotv7'
        },
        {
          title: 'Music',
          caption: 'Some passion project music',
          img: 'https://i1.sndcdn.com/avatars-wQ2we7uDPoXzUVzW-qdr1Yg-t500x500.jpg',
          link: 'https://soundcloud.com/dgonier'
        },
        // {
        //   title: 'Academic Papers',
        //   caption: 'A few papers I am particularly proud of',
        //   icon: 'history_edu'
        // },
        // {
        //   title: 'Coursework',
        //   caption: 'Computer Science Courses',
        //   icon: 'school'
        // }
      ]
    }
  },
})
</script>
