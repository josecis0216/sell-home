<template>
  <div>
    <TopHeader />
    <nuxt />
    <BottomFooter />
  </div>
</template>

<script>
import TopHeader from '@/components/Nav/TopHeader.vue'
import BottomFooter from '@/components/Nav/BottomFooter.vue'

export default {
    components: {
        TopHeader,
        BottomFooter
    }
}
</script>
