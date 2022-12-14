import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedHomePosts: [],
    },
    mutations: {
      setHomes(state, posts) {
        state.loadedHomePosts = posts
      },
      addHome(state, post) {
        state.loadedHomePosts.push(post)
      },
      editHome(state, editedPost) {
        const postIndex = state.loadedHomePosts.findIndex(post => post.id === editedPost)
        state.loadedHomePosts[postIndex] = editedPost
      }
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
      addPost(vuexContext, post) {
        const createdPost = { ...homeData, updatedDate: new Date() }
        return axios.post('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes.json', createdPost)
          .then(res => {
            vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {

      }
    },
    getters: {
      loadedHomePosts(state) {
        return state.loadedHomePosts
      },
    },
  })
}

export default createStore
