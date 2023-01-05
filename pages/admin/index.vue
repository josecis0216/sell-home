<template>
    <section>
      <div class="container">
        <div class="row">
            <div class="col">
                <h2>Current Inventory(admin)</h2>
            </div>            
        </div>
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
  layout: 'admin',
    middleware: ['check-auth', 'auth'],
    computed: {
        loadedHomePosts() {
            return this.$store.getters.loadedHomePosts
        }
    }
}
</script>
