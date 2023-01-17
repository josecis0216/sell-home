<template>
  <div class="col-sm-12 col-lg-4 col-lg-3">
    <div class="card">
      <img class="card-img-top" :src="homeUrl" alt="home image" />
      <div class="card-body">        
        <h2 class="card-title">{{ address }}</h2>
        <h5 class="card-caption">{{ listPrice }}</h5>
        <p class="card-text">{{ description }}</p>
        <p class="card-text">{{ daysOnMarket }}</p>
        <nuxt-link :to="postLink">See More</nuxt-link>
        <nuxt-link v-show="showEditLink" :to="adminLink" >Edit Post</nuxt-link>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    listPrice: {
      type: String,
      required: true,
    },
    daysOnMarket: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    homeUrl: {
      type: String,
      required: true,
    },
    moreHomeImages: {
      type: Array,
      required: false,
    }
  },
  computed: {
    postLink() {
      //  return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
      return '/inventory/' + this.id;
    },
    adminLink() {
      return '/admin/' + this.id;
    }, 
    showEditLink() {
      return this.$store.getters.isAuthenticated;
    }
  },
}
</script>

<style scoped>
img {
  width: 100%;
}

.card-img-top {
  height: 270px;
}
</style>

