import { createStore } from 'vuex'
import axios from 'axios';


const store = createStore({
    state: {
        counter: 0,
        page: 1,
        data: []
    },
    mutations: {
        inc(state) {
            return state.counter++;
        },
        dec(state) {
            return state.counter--;
        },
        SET_MOVIES: (state, movieData) => {
            state.data = movieData
        }
    },
    actions: {
        getApiData({ commit }) {
            new Promise((resolve, reject) => {
                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4bcb539f5521b73828aa4c05d8e2a421&page=${(this.state.page)?Math.abs(this.state.page):1}`).then((response) => {
                    // console.log('in dispatch')
                    //state.data = data.data.results
                    commit('SET_MOVIES', response.data.results)
                    resolve(response.data.results)
                        //console.log("in Store", response.data.results)

                }).catch((err) => {
                    console.log('err', err)
                    reject(err)
                })

            })

            //return state.DATA
        }
    },
    getters: {
        getMovies: (state) => state.data


    }
})
export default store