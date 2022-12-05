<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link to="/" class="navbar-brand">PlaceHolder</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contact" class="nav-link">Contact Us</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/request" class="nav-link">Get a Quote</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/inventory" class="nav-link">Inventory</nuxt-link>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0" @submit.prevent="onSubmit">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> -->
        <button class="btn btn-outline-success my-2 my-sm-0">
            <nuxt-link to="/admin/new-home" class="nav-link">New Home Post</nuxt-link>
          </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchText: ''
        }
    }, 
    methods: {
        onSubmit() {
            // code to submit search here
        }
    }
}
</script>
