<template>
    <HomePreview
    v-for="home in homePosts"
    :key="home.id"
    :id="home.id"
    :isAdmin="isAdmin"
    :address="home.address"
    :listPrice="home.listPrice"
    :daysOnMarket="home.daysOnMarket"
    :description="home.description"
    :homeUrl="home.homeUrl"
    />
</template>

<script>
import HomePreview from '@/components/HomePosts/HomePreview.vue'

export default {
    components: {
        HomePreview
    }, 
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        },
        homePosts: {
            type: Array,
            required: true
        }
    }
}
</script>