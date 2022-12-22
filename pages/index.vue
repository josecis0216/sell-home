<template>
  <section>
    <TopHeader />
    <div style="height: 500px" id="home-page"></div>
    <h3 id="home-cta">Sell your house today!</h3>
    <div class="container">
      <div class="row">
        <div v-for="card in homeCards" :key="card.cardTitle" class="col-sm-12 col-md-6 col-lg-4">
          <div class="card" style="width: 16rem; margin: 15px 0px">
            <img
              :src="card.cardUrl"
              class="card-img-top card-styles"
              :alt="card.cardTitle"
            />
            <div class="card-body">
              <h5 class="card-title">{{ card.cardTitle }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h3>Selling is Easy!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem
            ipsa reiciendis magnam. Non laboriosam dignissimos sunt aliquid odit
            rem, laborum facilis? Cum voluptatibus expedita eveniet sapiente
            sint, blanditiis facere.
          </p>
          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-lg-6">
          <h3>Lorem Ipusm dolor sit</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente vel sint, distinctio quasi assumenda nisi fuga mollitia voluptatibus beatae laboriosam iure accusamus quidem, doloribus eaque. Veniam ratione eos temporibus quasi.</p>
        </div>
        <div class="col-sm-12 col-lg-6 justify-content-end">
          <img src="https://images.pexels.com/photos/4297820/pexels-photo-4297820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="test image" class="home-image" />
        </div>
      </div>
    </div>
    <div style="background-color: lightblue;margin:15px 0;">
      <div style="max-width:600px;margin:auto;height:200px;">
        <h3 style="text-align:center;margin-top:25px;">Looking for a new house?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo, hic voluptate necessitatibus, aliquam consequuntur quasi, quod impedit accusamus voluptates voluptatum vel? Repellendus facilis ut omnis eius deserunt obcaecati sit.</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 justify-content-end">
          <img src="https://images.pexels.com/photos/4821920/pexels-photo-4821920.jpeg?auto=compress&cs=tinysrgb&w=800" alt="test image" class="home-image-left" />
        </div>
        <div class="col-sm-12 col-lg-6">
          <h3>Lorem Ipusm dolor sit</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente vel sint, distinctio quasi assumenda nisi fuga mollitia voluptatibus beatae laboriosam iure accusamus quidem, doloribus eaque. Veniam ratione eos temporibus quasi.</p>
        </div>
      </div>
    </div>
    <BottomFooter />
  </section>
</template>

<script>
import TopHeader from '@/components/Nav/TopHeader.vue'
import BottomFooter from '@/components/Nav/BottomFooter.vue'

export default {
  name: 'IndexPage',
  components: {
    TopHeader,
    BottomFooter,
  },
  data() {
    return {
      homeCards: [
        {
          cardTitle: 'card 1',
          cardUrl:
            'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?b=1&k=20&m=1211174464&s=612x612&w=0&h=rAGfSLUvnrvPauUveA-upyUtxffW7LvCKvhqYLF8eH8=',
        },
        {
          cardTitle: 'card 2',
          cardUrl:
            'https://media.istockphoto.com/photos/beautiful-craftsman-home-exterior-on-bright-sunny-day-with-green-and-picture-id1222625117?b=1&k=20&m=1222625117&s=612x612&w=0&h=Ire8fW2T-yj6w8FdtRbH4FRnJFcir3yF4ZN9cSX5aPw=',
        },
        {
          cardTitle: 'card 3',
          cardUrl:
            'https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?b=1&k=20&m=1026205392&s=612x612&w=0&h=wChttFxmS4jrjBGOMWX597lrdVqHQvEqFrRaQi2rObk=',
        },
      ],
      homeReviews: [
        {
          reviewName: 'Jose Cisneros',
          customerReview: 'lorem ipsum',
          reviewRating: 5,
        },
        {
          reviewName: 'Lupita Avila',
          customerReview: 'dolor sit amet consectetur adipisicing elit.',
          reviewRating: 3,
        },
      ],
    }
  },
}
</script>

<style scoped>
#home-page {
  background-image: url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 60%;
  opacity: 0.7;
}
#home-cta {
  position: absolute;
  top: 330px;
  left: 25px;
  font-size: 55pt;
  color: white;
  font-weight: bold;
}
.card-styles {
  height: 250px;
}

.home-image {
  float: right;
} 

.home-image-left {
  float: left;
}

.home-image-left, .home-image {
  border: 2px solid purple;
  width: 400px;
  height: 500px;
}
</style>
