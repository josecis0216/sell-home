<template>
  <section>
    <!-- <h2>id: {{ this.$route.params.id.toString() }}</h2>
    <h3>{{ loadedPost.address }}</h3> -->
    <HomeSeeMore :home="loadedPost" />
  </section>
</template>

<script>
//  import axios from 'axios'
import HomeSeeMore from '@/components/HomePosts/HomeSeeMore.vue'

export default {
  components: {
    HomeSeeMore,
  },
  data() {
    return {
      loadedPost: {}
    }
  },
  created() {
    console.log(this.$store.getters.loadedHomePosts.find(home => home.id === this.$route.params.id.toString()))
    this.loadedPost = this.$store.getters.loadedHomePosts.find(home => home.id === this.$route.params.id.toString())
    console.log(this.loadedPost)
  }
  // async fetch() {
  //   this.loadedPost = await fetch('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/' + this.$route.params.id.toString() + '.json')
  //   .then(res => res.json())
  // },
}
</script>
