<template>
  <section>
    <!-- <h2>id: {{ this.$route.params.id.toString() }}</h2>
    <h3>{{ loadedPost.address }}</h3> -->
    <HomeSeeMore :home="loadedPost" />
  </section>
</template>

<script>
import axios from 'axios'
import HomeSeeMore from '@/components/HomePosts/HomeSeeMore.vue'

export default {
  components: {
    HomeSeeMore,
  },
  mounted() {

  },
  asyncData(context) {
    return axios
      .get(
        'https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/' +
          context.params.postId +
          '.json'
      )
      .then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.postId },
        }
      })
      .catch((e) => context.error())
  },
  // data() {
  //   return {
  //     loadedPost: {}
  //   }
  // },
  // async fetch() {
  //   this.loadedPost = await fetch('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/' + this.$route.params.id.toString() + '.json')
  //   .then(res => res.json())
  // },
}
</script>
