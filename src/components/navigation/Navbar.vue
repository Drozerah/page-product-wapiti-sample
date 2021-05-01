<template>
  <div class="navbar row" ref="navbar" v-bind:class="{ sticky: isSticky }">
    <div class="container">
      <nav class="nav col l7 white" role="navigation" aria-label="Customer service">
          <ul class="nav__menu">
            <li
              v-for="(link, index) in links"
              :key='index'
              class="nav__item"
            ><a href="/">{{link}}</a></li>
          </ul>
      </nav>
      <div class="controls col l5">
        <div class="controls__favorites" role="button" title="Add this page to your Favorites"><i class="far fa-heart icon"></i></div>
        <div class="controls__search" role="search" title="Search">
          <i class="fas fa-search icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import links from '../../data/menu'
export default {
  name: 'Navbar',
  data () {
    return {
      isSticky: false, // default
      links
    }
  },
  methods: {
    stickIt: function () {
      // get the number of pixels the document is currently scrolled on the y axis
      const pageYOffset = window.pageYOffset
      // get the number of pixels the navbar element is from the document top border
      const navbaroffsetTop = this.$refs.navbar.offsetTop
      if (pageYOffset > navbaroffsetTop) {
        // update isSticky data
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    }
  },
  created: function () {
    // when the vue instance is created we add an event listener on the scroll event
    window.addEventListener('scroll', this.stickIt)
  },
  destroyed: function () {
    // remove the event listener when instance is destroyed
    window.removeEventListener('scroll', this.stickIt)
  }
}
</script>

<style lang="scss" scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.navbar {
  border-top: 1px solid $gray-ligthen-1;
  border-bottom: 1px solid $gray-ligthen-1;
  background-color:$bg;
  margin-bottom: 40px;
  z-index: 1000;
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  nav {
    box-shadow: none;
    padding: 0px !important;
    ul{
    display: flex;
    justify-content: space-between;
      li{
        a{
          font-size: toRem(12px);
          text-transform: uppercase;
          color: $font-base-color;
          padding: 0px;
          &:hover{
            background: none;
          }
        }
      }
    }
  }
  .controls{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    transform: translateX(5px);
    padding: 0px;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      width: 32px;
      &:first-child{
        border-right: 2px dotted $gray-ligthen-1;
        color: black;
      }
      &:hover{
        cursor: pointer;
        opacity: 0.6;
      }
    }
  }
  .icon{
    font-size: toRem(16px);
  }
}
</style>
