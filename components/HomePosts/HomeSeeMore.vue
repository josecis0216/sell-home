<template>
  <section>
    <top-header />
    <div>
      <img class="card-img-top" :src="homePost.homeUrl" alt="home image" />
      <h2 class="card-title">{{ homePost.address }}</h2>
      <h5 class="card-caption">{{ homePost.listPrice }}</h5>
      <p class="card-text">{{ homePost.description }}</p>
      <p class="card-text">{{ homePost.daysOnMarket }}</p>
    </div>
    <bottom-footer />
  </section>
</template>

<script>
import TopHeader from '@/components/Nav/TopHeader.vue'
import BottomFooter from '@/components/Nav/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter
  },
  props: {
    home: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      homePost: this.home
        ? { ...this.home }
        : {
            address: '',
            listPrice: '',
            daysOnMarket: '',
            description: '',
            homeUrl: '',
          },
    }
  },
}
</script>