<template>
    <div class="dammei">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile is-parent">
                    <article class="tile is-child notification">
                        <p class="title">List Dammei</p>
                        <p class="subtitle">...</p>
                        <div class="content" v-if="stories">
                            <Story v-for="story in stories" :key="story.id" :story="story"></Story>
                        </div>
                        <div class="content" v-else>
                            <p>No story</p>
                        </div>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification">
                <div class="content">
                    <p class="title">Related stories</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                    <!-- Content -->
                    </div>
                </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import Story from './Story'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    name:'Dammei',
    computed: {
        ...mapState({
            stories: state => state.dammei.items
        })
    },
    created() {
        this.getStories()
    },
    components: {
        Story,
    },
    methods: {
        ...mapActions({
            getStories: 'getStories'
        })
    },
}
</script>

<style scoped>
.dammei {
    width: 90%;
    margin-top: 10px;
    margin-left: 5%;
    padding-bottom: 50px;
}

.tile .is-parent {
    max-height: 800px;
}
</style>

