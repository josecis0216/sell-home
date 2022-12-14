<template>
  <div>
    
    <div class="admin-new-post-page">
      <section class="new-post-form">
        <AdminPostForm @submit="onSubmitted" />
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from '@/components/admin/AdminHomeForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(homeData) {
      axios.post('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes.json', { ...homeData, updatedData: new Date() })
      .then(result => console.log(result))
      .catch(e => console.log(e))
      // this.$store.dispatch("addPost", postData).then(() => {
      //   this.$router.push("/admin");
      //  });
    },
  },
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
