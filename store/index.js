import { Store } from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Store({
    state: {
      loadedHomePosts: [],
      token: null,
    },
    mutations: {
      setHomes(state, posts) {
        state.loadedHomePosts = posts
      },
      addHome(state, post) {
        state.loadedHomePosts.push(post)
      },
      editHome(state, editedPost) {
        const postIndex = state.loadedHomePosts.findIndex(post => post.id === editedPost.id)
        state.loadedHomePosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
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
      addHome(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() }
        return axios.post('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes.json', createdPost)
          .then(res => {
            vuexContext.commit('addHome', { ...createdPost, id: res.data.name })
          })
          .catch(e => console.log(e))
      },
      editHome(vuexContext, editedPost) {
        //  console.log(editedPost + 'action')
        return axios.put('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
        .then(res => {
            vuexContext.commit('editHome', editedPost)
        })
        .catch(e => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey;
        if (!authData.isLogin) {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey
        }
        axios.post(authUrl,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(result => {
          vuexContext.commit('setToken', result.data.idToken);
          localStorage.setItem('token', result.idToken);
          localStorage.setItem('expirationDate', new Date().getTime() + result.expiresIn * 1000);
          vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000);
          this.$router.push('/admin');
        }
      )
        .catch(e => console.log(e))
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken');
        }, duration);
      },
      initAuth(vuexContext) {
        const token = localStorage.getItem('token')
        const expirationDate = localStorage.getItem('expirationDate')

        if (new Date().getTime() > +expirationDate || !token) {
          console.log('no token found');
        }
        else {
          vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
          vuexContext.commit('setToken', token);
        }
      }
    },
    getters: {
      loadedHomePosts(state) {
        return state.loadedHomePosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    },
  })
}

export default createStore
