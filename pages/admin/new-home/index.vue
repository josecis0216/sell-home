<template>
  <div>
    <div class="admin-new-post-page">
      <section class="new-post-form">
        <AdminHomeForm @submit="onSubmitted" />
      </section>
    </div>
  </div>
</template>

<script>
import AdminHomeForm from '@/components/admin/AdminHomeForm'

export default {
  layout: 'admin',
  components: {
    AdminHomeForm,
  },
  methods: {
    onSubmitted(homeData) {
      this.$store.dispatch('addHome', homeData)
      .then(() => {
        this.$router.push('/admin')
      })
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
