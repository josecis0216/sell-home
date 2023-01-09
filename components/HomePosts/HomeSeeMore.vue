<template>
  <vueper-slides>
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :title="slide.title"
      :content="slide.content"
    >
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
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
  data: () => ({
    slides: [
      {
        title: 'Slide #1',
        content: 'Slide 1 content.',
      },
      {
        title: 'Slide #2',
        content: 'Slide 2 content.',
      },
    ],
  }),
}
</script>
