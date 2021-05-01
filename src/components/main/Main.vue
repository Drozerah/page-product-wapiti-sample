<template>
  <main>
    <div class="container row">
      <Carousel/>
      <Article/>
    </div>
    <div class="container row">
      <Aside/>
    </div>
  </main>
</template>

<script>
import Carousel from './Carousel'
import Article from './Article'
import Aside from './Aside'
export default {
  name: 'Main',
  components: {
    Carousel,
    Article,
    Aside
  }
}
</script>

<style lang="scss" scoped>
</style>
