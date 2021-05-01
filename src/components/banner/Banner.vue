<template>
  <div class="banner container" role="banner">
    <a class="banner__logo" href="/">
      <span class="banner__title">My APP</span>
    </a>
    <div class="banner__bag">Panier<span class="banner__bag--items"> ({{store.state.count}})</span></div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data: function () {
    return {
      store: this.$Store // access store singleton
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__logo {
    background: $bg;
    font-size: toRem(20px);
    color: $font-base-color;
  }

  &__bag {
    border: 2px solid black;
    text-transform: uppercase;
    padding: toRem(11px) toRem(25px);
    font-size: toRem(11px);
  }
}
</style>
