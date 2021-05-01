<template>
  <article class="product col l5 m6 s12">
    <div class="product__return"><i class="fas fa-angle-left icon"></i>Retour</div>
    <header>
      <h1 class="product__title">{{product.title}}</h1>
    </header>
    <div>
      <div class="product__price">{{product.price | toEuro}}</div>
      <div class="product__status">Disponibilité: {{product.status}}</div>
      <div class="product__id">Référence: {{product.id}}</div>
      <div class="product__tags">Tags: {{product.tags | tagsToString}}</div>
      <p class="product__description">{{product.description}}</p>
      <ul class="product__details">
        <li>{{product.collection | availability}}</li>
        <li>{{product.material}}</li>
        <li>{{product.shipping}}</li>
      </ul>
      <div class="product__select">
          <div class="product__select--color select">
            <div class="select__title">Couleur</div>
            <label for="colors">
              <select @change="addColor" name="colors" id="colors" role="button" title="Select item color" ref="color">
                <option value="undefined" disabled selected hidden>Choix couleur</option>
                <option v-for="item in product.collection" :key='item.id' :value="item.color">{{item.color}}</option>
              </select>
            </label>
          </div>
          <div class="product__select--size select">
            <div class="select__title">Taille</div>
            <label for="size">
              <select @change="addSize" name="size" id="size" role="button" title="Select item size" ref="size">
                <option value="undefined" disabled selected hidden>Taille</option>
                <option v-for="(size, index) in product.sizes" :key='index' :value="size">{{size}}</option>
              </select>
            </label>
          </div>
          <div class="product__select--quantity select">
            <div class="select__title">qté</div>
            <div class="product__select__container">
              <input class="quantity" type="number" :min="min" :max="max" v-model.number="quantity" ref="quantity">
              <div class="product__select__btn">
                <div @click="increment" class="increment btn" role="button" title="Add 1 item"><i class="fas fa-sort-up icon"></i></div>
                <div @click="decrement" class="decrement btn" role="button" title="Remove 1 item" ><i class="fas fa-sort-down icon"></i></div>
              </div>
            </div>
          </div>
      </div>
      <div class="product__action">
        <button @click="updateCard" disabled type="button" role="button" title="Add to bag" ref="addToBag">ajouter au panier</button>
        <button type="button" role="button" title="Add this page to your favorites">ajouter aux favoris</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Article',
  components: {
  },
  data: function () {
    return {
      min: '1',
      max: '9',
      product: this.$Product,
      color: undefined,
      size: undefined,
      quantity: 1,
      card: {
        product: this.$Product.id,
        color: undefined,
        size: undefined,
        quantity: undefined,
        price: this.$Product.price,
        amount: undefined
      },
      isActive: false,
      incrementStore: false
    }
  },
  mounted () {
    // populate default card
    // set default quantity
    this.card.quantity = this.quantity
    // set default amount
    this.card.amount = this.quantity * this.$Product.price
  },
  methods: {
    updateStore: function (val) {
      // update global store by value
      return this.$Store.update(val)
    },
    increment: function () {
      // get input number value
      const value = this.$refs.quantity.value
      // increment this.quantity if current value is less or equal to max
      if (value <= Number(this.max) - 1) {
        this.quantity++
      }
    },
    decrement: function () {
      // get input number value
      const value = this.$refs.quantity.value
      // decrement quantity if current value is greater or equal to min
      if (value >= Number(this.min) + 1) {
        this.quantity--
      }
    },
    addSize: function () {
      // add product size to card
      this.size = this.$refs.size.value
      // check 'add to bag' button status
      this.isDisable()
    },
    addColor: function () {
      // update color
      this.color = this.$refs.color.value
      // check 'add to bag' button status
      this.isDisable()
    },
    updateCard: function () {
      // update card values
      this.card.color = this.color
      this.card.size = this.size
      this.card.quantity = this.quantity
      this.card.amount = this.quantity * this.product.price
      const q = this.card.quantity
      // increment store
      this.updateStore(q)
      // alert when card is updatted + pluralize string
      const msg = `${q} product${q === 1 ? '' : 's'} added to bag`
      alert(msg)
    },
    isDisable: function () {
      // check whether or not to change 'add to cart' button status
      if (this.color && this.size && this.quantity) {
        this.isActive = true
        this.$refs.addToBag.disabled = false
      }
    }

  }
  // ,
  // watch: {
  //   quantity: function (val) {
  //     // watch quantity
  //     console.log(`watch quantity ${val}`) // !DEBUG
  //   },
  //   isActive: function (val) {
  //     // watch isActive
  //     console.log(`watch isActive ${this.isActive}`) // !DEBUG
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  /* GLOBAL */
  .product{
    $icon-font-size:toRem(12px);
    $gray-ligthen:#e1e1e1;
    $gray-darken:#bfbfbf;
    $gray-darken-1:#9f9f9f;
    padding-left: 20px;
    padding-right: 0px;
    &__return{
      font-size: toRem(14px);
      margin-bottom: 30px;
      margin-top: 5px;
      .icon{
        color:$gray-darken;
        font-size: $icon-font-size;
        margin-right: 4px;
      }
    }
    &__title{
      font-size: toRem(20px);
      font-weight: 500;
      margin-bottom: 30px;
    }
    &__price{
      font-size: toRem(20px);
      font-weight: 400;
      margin-bottom: 30px;
    }
    &__status, &__id, &__tags{
      font-size: toRem(14px);
      margin-bottom: 4px;
      color:$gray-darken-3;
    }
    &__description{
      font-size: toRem(12px);
      color:$gray-darken-3;
      margin-top: 30px;
      margin-bottom: 20px;
    }
    &__details{
      font-size: toRem(12px);
      li{
        margin-bottom: 5px;
      }
    }
    ul{
      padding-left: 18px;
      li::before {
        content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
        color: $gray-darken; /* Change the color */
        font-size: toRem(12px);
        font-weight: normal; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1.4em; /* Also needed for space (tweak if needed) */
        margin-left: -1.4em; /* Also needed for space (tweak if needed) */
      }
    }
    &__select{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      &--quantity{
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* Firefox */
        input[type=number] {
          border: 2px solid $gray-ligthen;
          padding: 5px;
          color: $gray-darken-1;
          text-align: center;
          font-size: toRem(13px);
          -moz-appearance: textfield;
          height: 36px;
          width: 36px;
        }
        .product__select__container{
          display: flex;
          .increment{
            border-top: 2px solid $gray-ligthen;
            border-bottom: 1px solid $gray-ligthen;
            .icon{
              transform: translateY(2px);
            }
          }
          .decrement{
            border-top: 1px solid $gray-ligthen;
            border-bottom: 2px solid $gray-ligthen;
            .icon{
              transform: translateY(-2px);
            }
          }
          .btn{
            height: 50%;
            width: 36px;
            border-left: none;
            border-right: 2px solid $gray-ligthen;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon{
              font-size: $icon-font-size;
              color: $gray-darken;
              overflow: hidden;
            }
          &:hover{
            cursor: pointer;
          }
          }
        }
      }
    }
    select{
      width: 120px;
      padding: 5px;
      height: 36px;
      border: 2px solid $gray-ligthen;
      font-size: toRem(13px);
      color: $gray-darken-1;
      &:hover{
        cursor: pointer;
      }
    }
    .select{
      display: flex;
      flex-direction: column;
      &__title{
        margin-bottom: 15px;
        font-size: toRem(13px);
        text-transform: uppercase;
      }
      label {
        position: relative;
      }
      label:before {
        content: '';
        right: 4px;
        top: 4px;
        width: 15px;
        height: 28px;
        background: $bg;
        position: absolute;
        pointer-events: none;
        display: block;
      }
      label:after {
        content: "\f0dd";
        font-family: "FontAwesome";
        font-size: $icon-font-size;
        color: $gray-darken;
        right: 10px;
        top: 10px;
        padding: 0 0 2px;
        position: absolute;
        pointer-events: none;
      }
    }
    &__action{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      button{
        width: 48%;
      }
    }
  }
  /* RESPONSIVE */
  // Mobile
  .mobile{
    .product.col{
      padding: 0px;
    }
  }
  // Tablet & Laptop
  .tablet{
    #size{
      width: 80px;
    }
  }
  .laptop{
    #size{
      width: 70px;
    }
  }
  // Mobile & Tablet
  .mobile, .tablet {
    .product{
      &__return{
        margin-bottom:10px;
      }
      &__title {
        margin-top:0px;
        margin-bottom: 20px;
      }
      &__price {
        margin-bottom: 20px;
      }
      &__description {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
</style>
