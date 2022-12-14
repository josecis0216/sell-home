import Vuex from 'vuex'
import axios from 'axios'

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
        return axios.get('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes.json')
        .then(res => {
            const homesArray = []
            for (const key in res.data) {
                homesArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setHomes', homesArray)
        })
        .catch(e => context.error(e)
        );
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
