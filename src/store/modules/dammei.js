import data from '@/api/data'

export default {
    state: {
        items: []
    },
    getters: {

    },
    actions: {
        getStories({commit}) {
            data.getStories(stories => {
                commit('getStories', stories)
            })
        }
    },
    mutations: {
        getStories(state, stories) {
            state.items = stories
        }
    }
}
