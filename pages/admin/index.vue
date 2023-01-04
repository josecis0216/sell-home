<template>
    <section>
      <div>
        <HomeList :home-posts="loadedHomePosts" />
      </div>
    </section>
  </template>

<script>
import HomeList from '@/components/HomePosts/HomeList.vue'

export default {
  components: {
        HomeList
    },
    middleware: ['check-auth', 'auth'],
    computed: {
        loadedHomePosts() {
            return this.$store.getters.loadedHomePosts
        }
    }
}
</script>
