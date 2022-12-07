import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedHomePosts: [],
    },
    mutations: {
      setHomes(state, homes) {
        state.loadedHomePosts = homes
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
            console.log(context.req)
        }
        return new Promise((resolve, reject) => {
          vuexContext.commit('setHomes', [
              {
                id: '1',
                address: '241 Buckingham Drive',
                listPrice: '$425,000',
                daysOnMarket: '12',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum eius iste reiciendis fugiat aut amet odio labore sed, exercitationem error accusamus tempora iure ad eaque minus est ut, illum saepe.',
                homeUrl:
                  'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?b=1&k=20&m=1211174464&s=612x612&w=0&h=rAGfSLUvnrvPauUveA-upyUtxffW7LvCKvhqYLF8eH8=',
              },
              {
                id: '2',
                address: '246 Buckingham Drive',
                listPrice: '$475,000',
                daysOnMarket: '38',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum eius iste reiciendis fugiat aut amet odio labore sed, exercitationem error accusamus tempora iure ad eaque minus est ut, illum saepe.',
                homeUrl:
                  'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?b=1&k=20&m=1211174464&s=612x612&w=0&h=rAGfSLUvnrvPauUveA-upyUtxffW7LvCKvhqYLF8eH8=',
              },
            ]);
          resolve();
        })
      },
      setHomes(vuexContext, homes) {
        vuexContext.commit('setHomes', homes)
      },
    },
    getters: {
      loadedHomePosts(state) {
        return state.loadedHomePosts
      },
    },
  })
}

export default createStore
