<template>
    <main>
        <agile>
            <div class="slide" v-for="image in images" :key="image.id">
                <img :src="image.path" alt="">
            </div>
        </agile>
    </main>
</template>
    
<script>
export default {
    data() {
        return {
            images: [
                { path: require('../assets/slides/slide1.jpg'), id: 1},
                { path: require('../assets/slides/slide2.jpg'), id: 2},
                { path: require('../assets/slides/slide3.jpg'), id: 3},
                { path: require('../assets/slides/slide4.jpg'), id: 4},
                { path: require('../assets/slides/slide7.jpg'), id: 5},
                { path: require('../assets/slides/slide6.jpg'), id: 6},
            ]
        }
    }
}
</script>

<style>
.slide img {
  width: 100%;
  max-height: 500px;
}

</style>

