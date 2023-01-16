<template>
  <section>
    <top-header />
    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/inventory">Inventory</nuxt-link></li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ homePost.address }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="see-more-container">
      <div class="img-container">
        <img class="card-img-top" :src="homePost.homeUrl" alt="home image" />
      </div>
      <h2 style="text-align:center;">{{ homePost.address }}</h2>
      <h5>List Price:</h5>
      <p class="card-text">{{ homePost.listPrice }}</p>
      <h5>Description:</h5>
      <p class="card-text">{{ homePost.description }}</p>
      <h5>Days on Market:</h5>
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

<style scoped>
.see-more-container{
  max-width: 400px;
  margin: auto;
}
</style>