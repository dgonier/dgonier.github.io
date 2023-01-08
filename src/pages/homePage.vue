<template>
  <q-page class="row flex flex-center">
    <div class="col-10 row flex flex-center q-gutter-lg">
      <div class="col-4">
        <q-avatar size="200px">
          <img src="https://wageup-devin.s3.us-east-1.amazonaws.com/devinBio.jpg"/>

        </q-avatar>
      </div>
      <div class="col-7">
        <h1>Devin Gonier</h1>
        <h3>Chief Technology Officer at WageUp</h3>
        <h3>Chief Technology Officer at DebaterHub</h3>
        <h3>MS Machine Learning Columbia University</h3>

      </div>
      <div class="col-10">
        <p>Devin Gonier is the Chief Technology Officer at DebaterHub and WageUp. Both companies specialize in developing tools that leverage machine learning for different solution sets. He is completing his master’s degree at Columbia University in Machine Learning and has an undergraduate degree from Austin College in Philosophy and Religion. He sees research in Artificial Intelligence, especially research that pertains AI Ethics and Reinforcement Learning as the best way to do philosophy in our modern era. He has spoken on this topic in Ted Talks, on podcasts, and in various online formats. Devin was a debater in High School and fell in love with the activity. Devin has background as an educator, having spent six years in China teaching at a university and starting an English school with colleagues. He is a passionate and skilled coder, loves to play music, and loves to spend time with his daughter and wife in the Colorado outdoors. </p>
      </div>
    </div>
    <div class="col-12 row flex flex-center q-gutter-lg">
      <skill-chart class="col-3"
                   :skill="skill"

                   :key="i"
                   v-for="(skill, i) in skills"

      />
    </div>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import SkillChart from "components/skillChart.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {SkillChart},
  data() {
    return {
      skills:[
        {
          title: 'Python',
          content: 'Many years experience. Several Projects. Most comfortable',
          value: 80,
          color: 'green-10'
        },
        {
          title: 'Javascript',
          content: 'Many years experience. Several Projects. Most comfortable',
          value: 70,
          color: 'green-9'
        },
        {
          title: 'SQL',
          content: 'Many years experience. Several Projects. Most comfortable',
          value: 75,
          color: 'green-10'
        },
        {
          title: 'DevOps',
          content: 'Many years experience. Several Projects. Most comfortable',
          value: 60,
          color: 'amber-10'
        },
        {
          title: 'GraphQL',
          content: 'Many years experience. Several Projects. Most comfortable',
          value: 55,
          color: 'amber-10'
        },
        {
          title: 'PyTorch, Tensorflow',
          content: 'Many years experience. Several Projects. Most comfortable',
          value: 60,
          color: 'amber-10'
        },

      ]
    }
  }

})
</script>
