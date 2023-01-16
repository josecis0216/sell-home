<template>
  <section>
    <TopHeader />
    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Inventory
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Current Inventory</h2>
        </div>
      </div>
      <HomeList :home-posts="loadedHomePosts" />
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
