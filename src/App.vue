<template>
  <div id="app">
    <div class="main-container">
      <div class="main-body">
          <Header></Header>
            <router-view/>
          <Footer></Footer>
      </div>
    </div> 
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/FooterTemplate.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  } 
}
</script>

<style scope>
.main-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url( "./assets/background/bg2.gif");
  overflow: auto;
}
.main-body {
  background-color:pink;
  width: 70%;
  margin-left: 15% ;
}
</style>
