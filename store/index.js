import { Store } from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

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
        const postIndex = state.loadedHomePosts.findIndex(
          (post) => post.id === editedPost.id
        )
        state.loadedHomePosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes.json')
          .then((res) => {
            const homesArray = []
            for (const key in res.data) {
              homesArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setHomes', homesArray)
          })
          .catch((e) => context.error(e))
      },
      setHomes(vuexContext, homes) {
        vuexContext.commit('setHomes', homes)
      },
      addHome(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() }
        return axios
          .post(
            'https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes.json?auth=' +
              vuexContext.state.token,
            createdPost
          )
          .then((res) => {
            vuexContext.commit('addHome', { ...createdPost, id: res.data.name })
          })
          .catch((e) => console.log(e))
      },
      editHome(vuexContext, editedPost) {
        return axios
          .put(
            'https://nuxt-blog-fdc27-default-rtdb.firebaseio.com/homes/' +
              editedPost.id +
              '.json?auth=' +
              vuexContext.state.token,
            editedPost
          )
          .then((res) => {
            vuexContext.commit('editHome', editedPost)
          })
          .catch((e) => console.log(e))
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.fbAPIKey
        if (!authData.isLogin) {
          authUrl =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
            process.env.fbAPIKey
        }
        axios
          .post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            vuexContext.commit('setToken', result.data.idToken)
            localStorage.setItem('token', result.data.idToken)
            localStorage.setItem(
              'expirationDate',
              new Date().getTime() +
                Number.parseInt(result.data.expiresIn) * 1000
            )
            Cookie.set('jwt', result.data.idToken)
            Cookie.set(
              'expirationDate',
              new Date().getTime() +
                Number.parseInt(result.data.expiresIn) * 1000
            );
            //  return this.$axios.$post('http://localhost:3000/api/track-data', {data: 'authenticated'})
          })
          .catch((e) => console.log(e))
      },
      initAuth(vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            //  console.log('no cookie found')
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else if (process.client) {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('expirationDate')
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('no token found')
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.clear('token')
          localStorage.clear('expirationDate')
        }        
      },
    },
    getters: {
      loadedHomePosts(state) {
        return state.loadedHomePosts
      },
      isAuthenticated(state) {
        return state.token != null
      },
    },
  })
}

export default createStore
