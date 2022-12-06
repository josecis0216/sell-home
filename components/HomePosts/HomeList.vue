<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Current Inventory</h2>
            </div>            
        </div>
        <div class="row">
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
        </div>
    </div>
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