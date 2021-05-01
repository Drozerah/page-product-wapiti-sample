<template>
  <div class="col l12 m12 s12 more">
    <div class="more__header">
      <div class="more__header__title">{{lang.title}}</div>
      <div class="more__header__sort">
        <a ref="asc"
          @click.prevent="sortAsc"
          :class='{active: isActiveAsc}'
          :title="lang.sort.chunk + lang.sort.asc"
          href="#" class="more__header__sort--asc" role="button">{{lang.sort.asc}}</a>
        <div class="separator">|</div>
        <a ref="desc"
          @click.prevent="sortDesc"
          :class='{active: isActiveDesc}'
          :title="lang.sort.chunk + lang.sort.desc"
          href="#" class="more__header__sort--desc" role="button">{{lang.sort.desc}}</a>
      </div>
    </div>
    <div class="more__content">
      <ul>
        <li v-for="product in products" :key='product.id' class="more__content__item item">
          <div class="item__image">
            <div class="item__price">
              <div class="item__price__ht">{{product.price  | toEuro}} HT</div>
              <span class="item__price__ttc">{{product.price | toTTC | toEuro}} TTC</span>
            </div>
            <img height="100%" width="100%" :src="product.image" alt="Image" class="responsive-img">
          </div>
          <div class="item__description">{{product.title | truncate}}</div>
          <button class="item--button" role="button" title="Ajouter au panier" disabled>Ajouter au panier</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Service from '../../service/Service'
export default {
  name: 'Aside',
  data: function () {
    return {
      lang: {
        title: 'ces produits pourraient compléter votre look....',
        sort: {
          chunk: 'Ordonner par ',
          asc: 'prix croissant',
          desc: 'prix décroissant'
        }
      },
      api: 'https://fakestoreapi.com/products',
      products: [],
      error: '',
      isActiveAsc: false,
      isActiveDesc: false
    }
  },
  async mounted () {
    try {
      // fetch api with static getProducts method
      // filter products by category
      // populate data products
      const data = await Service.getProducts(this.api)
      const products = data.filter(product => product.category === 'men\'s clothing')
      this.products = products
    } catch (error) {
      this.error = error
      // print error client side
      console.error(error.message)
      // TODO handle errors client side: not in sepcs...
    }
  },
  methods: {
    sortAsc: function () {
      // add class active to current element
      this.isActiveAsc = true
      // remove class active to desc link
      this.isActiveDesc = false
      // sort products by price in ascending order
      this.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    },
    sortDesc: function () {
      // add class active to current element
      this.isActiveDesc = true
      // remove class active to asc link
      this.isActiveAsc = false
      // sort products by price in descending order
      this.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    }
  }
}
</script>

<style lang="scss" scoped>
  /* GLOBAL */
  .separator{
    padding: 5px;
  }
  .more{
    img{
      max-height: 200px;
    }
    padding: 0px !important;
    &__header{
      padding: 15px;
      margin: 20px 0px;
      background-color: $secondary;
      color: $bg;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      &__title::first-letter {
        text-transform: uppercase;
        font-size: toRem(20px);
      }
      &__sort{
        display: flex;
        font-size: toRem(15px);
        a{
          color:$bg;
          padding: 5px;
          &:hover{
            text-decoration: underline;
          }
        }
        a::first-letter{
          text-transform: uppercase;
        }
        a.active{
          text-decoration: underline;
        }
      }
    }
    &__content{
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: hidden;
        margin: 0px;
        padding: 0px;
        li{
          position:relative;
          border: 1px solid $gray-ligthen-1;
          padding: 15px;
        }
      }
      .item{
        width: 23%;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        &__image{
          display: flex;
          justify-content: center;
          height: 200px;
          .item__price{
            position:absolute;
            right:0px;
            text-align: right;
            color: white;
            &__ht{
              background-color: $secondary;
              font-size: toRem(18px);
              padding: 3px 3px 3px 10px;
            }
            &__ttc{
              background-color: red;
              font-size: toRem(14px);
              padding: 1px 3px 3px 10px;
              background-color: $secondary;
            }
          }
        }
        &__description{
          text-align: center;
          font-size: toRem(15px);
          height: 40px;
          margin-top: 20px;
          margin-bottom: 15px;
        }
      }
    }
  }
  /* RESPONSIVE */
  // Mobile
  .mobile{
    .more{
      &__header{
        flex-direction: column;
        margin-bottom:10px;
        &__title{
          font-size: toRem(17px);
          margin-bottom: 10px;
        }
        &__sort{
          align-self: center;
        }
      }
      &__content{
        ul{
          justify-content: center;
          li{
            margin:10px;
          }
        }
      }
    }
  }
  // Tablet & Laptop
  .tablet, .laptop{
    .more{
      &__content{
        ul{
          justify-content: center;
          li{
            margin:10px;
          }
        }
      }
    }
  }
</style>
