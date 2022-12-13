<template>
  <div class="tokyo_tm_home">
    <div class="home_content">
      <div class="avatar">
        <div
          class="image avatar_img"
          :style="{ backgroundImage: 'url(https://tinyurl.com/2pmqx6my) !important' }"
        ></div>
      </div>
      <!-- End .avatar -->
      <div class="details">
        <h3 class="name">Devin Gonier</h3>
        <p class="job">
        Chief Technology Officer at WageUp and DebaterHub. Grad Student in Machine Learning at Columbia University
        </p>

        <Social />
      </div>
      <!-- End .details -->
    </div>
  </div>
</template>

<script>
  import Social from "./Social";
  export default {
    components: {
      Social,
    },
    data() {
      return {
        src1: "https://wageup-devin.s3.us-east-1.amazonaws.com/dgonier_profile.jpg"
      };
    },
  };
</script>

<style lang="scss"></style>
