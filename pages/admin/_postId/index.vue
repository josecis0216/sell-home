<template>
    <div class="admin-post-page">
      <section class="update-form">
        <AdminHomeForm :home="loadedPost" @submit="onSubmitted" />
      </section>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import AdminHomeForm from "@/components/Admin/AdminHomeForm";
  
  export default {
    components: {
      AdminHomeForm
    },
    layout: "admin.vue",
    middleware: ['check-auth', 'auth'],
    asyncData(context) {
      return axios
        .get(
          "https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/" +
            context.params.postId +
            ".json"
        )
        .then(res => {
          return {
            loadedPost: { ...res.data, id: context.params.postId }
          };
        })
        .catch(e => context.error());
    },
    methods: {
      onSubmitted(editedPost) {
        this.$store.dispatch("editHome", editedPost).then(() => {
          this.$router.push("/admin");
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
  </style>
  