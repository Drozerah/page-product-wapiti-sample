<template>
  <div class="welcome" v-if="!isClosed">
    <div class="welcome__container container">
      <div class="welcome__text">{{text}}</div>
      <i @click="close" class="fas fa-times icon welcome--close" title="Close" role="button" aria-label="Close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data: function () {
    return {
      text: 'Découvrez notre nouveau site internet !',
      isClosed: false,
      Storage: window.sessionStorage
    }
  },
  mounted () {
    // check if 'isClosed' item exist into sessionStorage
    if (!this.Storage.isClosed) {
      // create sessionStorage item with default value set to 'false' from data Object
      this.Storage.isClosed = this.isClosed
    } else if (this.Storage.isClosed === 'true') {
      // if sessionStorage item already exist and is set to 'true'
      // set data Object from its value
      this.isClosed = this.Storage.isClosed
    }
  },
  watch: {
    // watch 'isClosed' change from the data Object
    // set it with the new given value from the close method
    isClosed (newValue) {
      this.Storage.isClosed = newValue
    }
  },
  methods: {
    close: function () {
      // set 'isClosed' data to true when welcome--close element is clicked
      this.isClosed = true
    }
  }
}
</script>

<style lang="scss" scoped>

/* GLOBAL */

.welcome{
  height: 30px;
  background: $bg-primary;
  color: $bg;
  font-size: toRem(11px);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    width: 100%;
    position: relative;
    text-align: center;
  }

  &--close{
    position: absolute;
    top: -5px;
    right: 0px;
    padding: 5px;
    font-size: toRem(13px);

    &:hover{
      cursor: pointer;
    }
  }
}

/* RESPONSIVE */

// Mobile
.mobile{
  .welcome{
    &__text{
      font-size: toRem(11px);
      padding: 0px 10px;
    }
    &--close{
      top: -2px;
      right: -7px;
    }
  }
}

// Tablet
.tablet{
  .welcome{
    &--close{
      top: -7px;
    }
  }
}

// Mobile & Tablet
.mobile, .tablet {
  .welcome{
    height: 45px;
    &--close{
      font-size: toRem(16px);
    }
  }
}
</style>
