<template>
    <section>
        <TopHeader />
        <div style="background-color:lightblue;">
            <h3 style="text-align:center;">About Us</h3>
            <div class="img-container"> 
                <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" alt="group photo about us page" style="width:300px;" />
             </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p style="line-height: .5in;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                            vel enim tempora asperiores laborum beatae earum a nisi explicabo, quisquam eum assumenda 
                            veniam at distinctio obcaecati modi voluptatem odio hic.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit officiis ad veritatis ea dolorem vel 
                            commodi, fuga a odio error cum ratione explicabo distinctio quasi unde qui! Consequuntur, ipsam dignissimos!</p>
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

export default {
    components: {
        TopHeader,
        BottomFooter
    }
}
</script>

<style scoped>
.img-container {
    display: flex;
    justify-content: center;
}
</style>