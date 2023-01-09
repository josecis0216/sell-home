<template>
  <div v-for="slide in slides" :key="slide.id">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            :src="slide.imgSource"
            :alt="slide.title"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  // props: {
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  //   isAdmin: {
  //     type: Boolean,
  //     required: true,
  //   },
  //   address: {
  //     type: String,
  //     required: true,
  //   },
  //   listPrice: {
  //     type: String,
  //     required: true,
  //   },
  //   daysOnMarket: {
  //     type: String,
  //     required: true,
  //   },
  //   description: {
  //     type: String,
  //     required: true,
  //   },
  //   homeUrl: {
  //     type: String,
  //     required: true,
  //   },
  // },
  data() {
    return {
      slides: [
        {
          id: 1,
          title: 'Image 1',
          imgSource:
            'https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          id: 2,
          title: 'Image 2',
          imgSource:
            'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          id: 3,
          title: 'Image 3',
          imgSource:
            'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
    }
  },
}
</script>
