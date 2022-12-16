<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editedHome.address"
          >Street Address</AppControlInput
        >
        <AppControlInput v-model="editedHome.listPrice">List Price</AppControlInput>
        <AppControlInput v-model="editedHome.homeUrl"
          >Home Image Link</AppControlInput
        >
        <AppControlInput v-model="editedHome.daysOnMarket"
          >Days on market</AppControlInput
        >
        <AppControlInput
          v-model="editedHome.description"
          control-type="textarea"
          >Description Preview Text</AppControlInput
        >
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel"
          >Cancel</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default {
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    home: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedHome: this.home
        ? { ...this.home }
        : {
            address: "",
            listPrice: "",
            daysOnMarket: "",
            description: "",
            homeUrl: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedHome)
      console.log('saved post!')
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    }
  }
}
</script>
