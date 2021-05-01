<template>
  <nav class="navigation" role="navigation" aria-label="Customer service">
    <div>
      <ul id="nav-mobile" class="sidenav navigation__sidenav" ref="sidenav">
        <li>
          <div class="navigation__title">My APP</div>
        </li>
        <li
          v-for="(link, index) in links"
          :key='index'
          class="nav__item"
        ><a href="/">{{link}}</a></li>
      </ul>
      <div class="navigation__head">
        <a href="#" data-target="nav-mobile" class="sidenav-trigger black-text"><i class="fas fa-bars"></i></a>
        <div>
          <a class="banner__logo" href="/">
            <h1 class="banner__title">My APP</h1>
          </a>
        </div>
        <div class="navigation__bag"><i class="fas fa-shopping-bag icon"></i>({{store.state.count}})</div>
      </div>
    </div>
  </nav>
</template>

<script>
// import M from 'materialize-css'
import M from '../../vendor/vendor'
import links from '../../data/menu'
export default {
  name: 'NavbarMobile',
  data: function () {
    return {
      store: this.$Store, // access store singleton
      links
    }
  },
  mounted () {
    // Sidenav instanciation + config position
    return new M.Sidenav(this.$refs.sidenav, {
      edge: 'left'
    })
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  color: #333;
  &__title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-bottom: 20px;
    color: $bg;
    background-color: $bg-primary;
    font-size: toRem(18px);
  }
  &__sidenav{
    li{
      a{
        color: #333;
        text-transform: uppercase;
        font-size: toRem(16px);
      }
    }
  }
  &__head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .banner__title{
      color:$font-base-color;
      margin:0px;
      padding:0px;
      font-size: toRem(22px);
    }
  }
  &__bag{
    display: flex;
    margin-right: 18px;
    .icon{
      margin-right: 5px;
    }
  }
}
</style>
