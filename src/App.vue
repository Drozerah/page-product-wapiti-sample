<template>
  <div id="app" v-cloak :class="$mq">
    <Welcome/>
    <header>
      <mq-layout mq="mobile">
        <NavbarMobile/>
      </mq-layout>
      <mq-layout mq="tablet+">
        <Banner/>
        <Navbar/>
      </mq-layout>
    </header>
    <Main/>
    <Footer/>
  </div>
</template>

<script>

import Welcome from './components/banner/Welcome'
import Banner from './components/banner/Banner'
import Navbar from './components/navigation/Navbar'
import NavbarMobile from './components/navigation/NavbarMobile'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

export default {
  name: 'App',
  components: {
    Welcome,
    Banner,
    Navbar,
    NavbarMobile,
    Main,
    Footer
  }
}

</script>

<style lang="scss">
  [v-cloak] {
    display: none
  }
  #app {
    margin-top: 0px;
  }
</style>
