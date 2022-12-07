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
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'
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
