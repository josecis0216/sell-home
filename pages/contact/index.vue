<template>
  <section>
    <TopHeader />
    <div class="card" style="width: 32rem; margin: 10px auto;" >
      <div class="card-body">
        <div class="card-title">
            <h2>Contact Us</h2>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <form v-on:submit.prevent="onSubmit()"
                    method="POST">
                <div class="form-group">
                  <label for="frmEmail">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="frmEmail"
                    placeholder="name@example.com"
                    v-model="formData.email"
                  />
                </div>
                <div class="form-group">
                  <label for="frmFirstName">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="frmFirstName"
                    placeholder="First Name"
                    v-model="formData.firstName"
                  />
                </div>
                <div class="form-group">
                  <label for="frmLastName">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="frmLastName"
                    placeholder="Last Name"
                    v-model="formData.lastName"
                  />
                </div>
                <div class="form-group">
                  <label for="frmTextArea">Short Message (optional)</label>
                  <textarea
                    class="form-control"
                    id="frmTextArea"
                    rows="3"
                    v-model="formData.message"
                  ></textarea>
                </div>
                <AppButton type="submit" >Submit</AppButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BottomFooter />
  </section>
</template>

<script>
import TopHeader from '@/components/nav/TopHeader.vue'
import BottomFooter from '@/components/nav/BottomFooter.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default {
  components: {
    TopHeader,
    BottomFooter,
    AppButton,
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
    }
  }
}
</script>
