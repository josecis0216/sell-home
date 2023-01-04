<template>
    <section>
      <div>
        <HomeList :homePosts="loadedHomePosts" />
      </div>
    </section>
  </template>

<script>
import HomeList from '@/components/HomePosts/HomeList.vue'

export default {
    middleware: 'auth',
    components: {
        HomeList
    },
    computed: {
        loadedHomePosts() {
            return this.$store.getters.loadedHomePosts
        }
    }
}
</script>
