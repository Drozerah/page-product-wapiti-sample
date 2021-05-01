<template>
  <div class="carousel col l7 m6 s12">
    <div class="carousel__large">
      <img
        class="responsive-img item"
        alt="Image"
        :src="defaultLargeImgPath"
        rel="preload"
        height="600px"
        width="600px"
        >
    </div>
    <div @click="updateLargeImage" class="carousel__thumbnails">
      <ul  class="thumbnails__container" ref="thumbnails">
        <li v-for='item in items' :key='item.id'>
          <img
            :class='{ active: isActive(item.file) }'
            :src='setSrcPath(item.file)'
            :data-src='item.file'
            alt="Image"
            class="responsive-img item"
            role="button"
            height="100%"
            width="100%"
            rel="preload"
            >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data: function () {
    return {
      currentLargeImage: this.$Product.collection[0].file, // default large image
      items: this.$Product.collection
    }
  },
  methods: {
    updateLargeImage: function (event) {
      // get clicked element from event Object
      const element = event.target
      // check if the clicked element has class 'item'
      const isItem = element.classList.value.includes('item')
      if (isItem) {
        // set large image src from element data attribut
        const itemSrc = element.getAttribute('data-src')
        this.currentLargeImage = itemSrc
      }
    },
    setSrcPath: function (fileName) {
      // create path with given file name
      return require(`@/assets/img/${fileName}`)
    },
    isActive: function (fileName) {
      // check if current large image file name matches
      // the thumbnails file name
      if (fileName === this.currentLargeImage) return true
      return false
    }
  },
  computed: {
    defaultLargeImgPath () {
      // create default current large image path from data
      return require(`@/assets/img/${this.currentLargeImage}`)
    }
  }
}
</script>

<style lang="scss" scoped>

  /* GLOBAL */
  .carousel{
    padding: 0px !important;
    width: 600px;
    // &__large{
    // }
    &__thumbnails{
      margin-top: 15px;
      .thumbnails__container{
        max-width: 600px;
        margin: 0px;
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li{
          width: 22%;
        }
      }
      img{
          &:hover{
          cursor:pointer;
          opacity: 0.6;
        }
      }
    }
    .active{
      opacity: 0.6;
    }
  }

  /* RESPONSIVE */
  // Mobile
  .mobile{
    .carousel{
      margin-top:20px;
      &__thumbnails{
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
</style>
