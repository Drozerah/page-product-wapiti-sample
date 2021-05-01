<template>
  <footer class="footer">
    {{lang.message}}
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: function () {
    return {
      lang: {
        message: "Made with love - Make sure that you won't buy anything from here. It's just fake!"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  /* GLOBAL */
.footer{
  text-align: center;
  padding: 20px;
  border-top: 1px solid $gray-ligthen-1;
  margin-top: 20px;
  color:$gray-darken-1;
  font-size: toRem(14px);
}
  /* RESPONSIVE */
  // Mobile
.mobile{
  .footer{
    margin-top: 10px;
  }
}

</style>
