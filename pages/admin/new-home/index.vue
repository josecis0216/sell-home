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
//    import axios from "axios";
import AdminPostForm from '@/components/admin/AdminHomeForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData) {
      console.log(postData)
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
