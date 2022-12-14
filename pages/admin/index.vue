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
