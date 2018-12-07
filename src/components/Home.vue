<template>
  <div class="home">
    <div class="h-title">
      <h1>Latest News</h1>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <Post class="is-primary"></Post>
            <Post class="is-warning"></Post>
          </div>
          <div class="tile is-parent">
            <Post class="is-info">
              <figure class="image is-4by3">
                <img src="../assets/slides/slide7.jpg">
              </figure>
            </Post>
          </div>
        </div>
        <div class="tile is-parent">
          <Post class="is-danger">
            <div class="content">
              ///aaaaaaa
            </div>
          </Post>
        </div>
      </div>
      <div class="tile is-parent">
        <Post class="is-success">
          <div class="content">
              ///aaaaaaa
          </div>
        </Post>
      </div>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: 'Home',
  components: {
    Post
  }
}
</script>

<style scoped>
.home {
  width: 90%;
  margin-top: 10px;
  margin-left: 5%;
  padding-bottom: 50px;
}
.h-title {
  text-align: center;
  margin-top: 10px;
}
.h-title h1 {
  font-weight: 800;
  font-style: italic;
  font-family: 'Lora', serif;
  color: #fff;
  font-size: 50px;
  line-height: 2;
  letter-spacing: 0px;
}
.notification {
  background-color: #fff;
  color: #000;
}
</style>
