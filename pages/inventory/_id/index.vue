<template>
  <section>
    <h2>id: {{ this.$route.params.id.toString() }}</h2>
    <h3>{{ loadedPost.address }}</h3>
    <HomeSeeMore />
  </section>
</template>

<script>
import axios from 'axios'
import HomeSeeMore from '@/components/HomePosts/HomeSeeMore.vue'

export default {
  components: {
    HomeSeeMore
  },
  asyncData(context,) {
    return axios.get('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/' + context.params.id + '.json',  )
    .then(res => {
        return {
            loadedPost: res.data
        }
    })
    .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
        axios.put('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/' + this.$route.params.postId + '.json', editedPost)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
  }
}
</script>
