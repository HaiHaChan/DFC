<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by2">
            <img :src="imgPath" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{{ story.title }}</p>
                <p class="subtitle is-6">@{{ story.author }}</p>
            </div>
            </div>

            <div class="content">
            {{ story.description }}
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['story'],
    computed: {
        imgPath() {
            return require('../assets/dammei/' + this.story.image)
        }
    }
}
</script>

<style scoped>
.card {
    width: 90%;
    margin-top: 30px;
    margin-left: 5%;
    padding-bottom: 50px;
}
</style>

