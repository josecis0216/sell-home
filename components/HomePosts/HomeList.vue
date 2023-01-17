<template>
  <div class="row">
    <HomePreview
      v-for="home in homePosts"
      :id="home.id"
      :key="home.id"
      :is-admin="isAdmin"
      :address="home.address"
      :list-price="home.listPrice"
      :days-on-market="home.daysOnMarket"
      :description="home.description"
      :home-url="home.homeUrl"
      :more-home-images="home.moreHomeImages"
    />
  </div>
</template>

<script>
import HomePreview from '@/components/HomePosts/HomePreview.vue'

export default {
  components: {
    HomePreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    homePosts: {
      type: Array,
      required: true,
    },
  },
}
</script>
