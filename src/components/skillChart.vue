<template>
  <q-card>
    <q-card-section horizontal>
      <q-card-section>
            <q-circular-progress
      :value="skill.value"
      size="50px"
      :color="skill.color"
      class="q-ma-md"
    />
      </q-card-section>
      <q-card-section>
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.content }}</p>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import EssentialLink from "components/EssentialLink.vue";


export default defineComponent({
  name: 'skillChart',
  components: {},
  props: ['skill'],
  data() {
    return {
    }
  },
})
</script>
