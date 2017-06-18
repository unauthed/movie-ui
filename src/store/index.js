import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const SET_MOVIE_LIST = 'SET_MOVIE_LIST'

// const debug = process.env.NODE_ENV !== 'production'

axios.defaults.baseURL = '/api/v1/'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    movies: [],
    links: [],
    page: {}
  },
  actions: {
    fetchMovies: function ({
      commit
    }) {
      axios.get(
          'movies', {
            params: {
              sort: 'created,desc',
              page: 0,
              size: 8
            },
            headers: {
              'Accept': 'application/hal+json'
            }
          })
        .then((response) => {
          commit('SET_MOVIE_LIST', {
            resource: response.data
          })
        }, (error) => {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    }
  },
  mutations: {
    SET_MOVIE_LIST: (state, {
      resource
    }) => {
      state.movies = resource._embedded.movies
      state.link = resource._links
      state.page = resource.page
    }
  },
  getters: {
    movies: state => state.movies,
    links: state => state.links,
    pages: state => state.page,
    votedMovies: state => {
      return state.movies.filter(movie => movie.votes > 0)
    }
  }
})

export default store
