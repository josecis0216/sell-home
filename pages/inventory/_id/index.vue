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
  // asyncData(context) {
  //   console.log("---------------" + context.app)
  //   return context.app.$axios.$get('/posts/' + context.params.id + '.json')
  //     .then(data => {
  //       return {
  //         loadedPost: data
  //       }
  //     })
  //     .catch(e => context.error(e))
  // },
  data() {
    return {
      loadedPost: {},
    }
  },
  created() {
    this.loadedPost = this.$store.getters.loadedHomePosts.find(
      (home) => home.id === this.$route.params.id.toString()
    )
  },
  // async fetch() {
  //   this.loadedPost = await fetch('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/' + this.$route.params.id.toString() + '.json')
  //   .then(res => res.json())
  // },
}
</script>
