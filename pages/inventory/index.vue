<template>
  <section>
    <TopHeader />
    <div>
      <HomeList :homePosts="loadedHomePosts" />
    </div>
    <BottomFooter />
  </section>
</template>

<script>
import TopHeader from '@/components/Nav/TopHeader.vue'
import BottomFooter from '@/components/Nav/BottomFooter.vue'
import HomeList from '@/components/HomePosts/HomeList.vue'

export default {
  components: {
    TopHeader,
    BottomFooter,
    HomeList,
  },
  computed: {
    loadedHomePosts() {
      return this.$store.getters.loadedHomePosts
    },
  },
  // data() {
  //   return {

  //   }
  // }
}
</script>
