<template>
    <article class="tile is-child notification">
        <p class="title">Vertical...</p>
        <p class="subtitle">Top tile</p>
        <slot></slot>
    </article>
</template>

<script>
export default {
  name: 'post',
  data() {
    return {
      hasImage: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notification {
  background-color: #fff;
  color: #000;
}
</style>
