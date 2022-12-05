<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Current Inventory</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-4 col-lg-3">
        <nuxt-link :to="postLink">
          <div class="card">
            <article class="post-preview">
              <div
                class="post-thumbnail"
                :style="{ backgroundImage: 'url(' + homeUrl + ')' }"
              ></div>
              <div class="post-content">
                <h1>{{ address }}</h1>
                <p>{{ description }}</p>
              </div>
            </article>
          </div>
        </nuxt-link>
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
  },
  methods: {
    postLink() {
        //  return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
        return '/inventory/' + this.id;
    }
  }
}
</script>
