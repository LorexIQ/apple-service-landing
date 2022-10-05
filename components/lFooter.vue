<template>
  <div class="footer">
    <div class="wrap">
      <div class="footer__info">
        <img src="~/static/icons/Apple.svg" width="20" height="20" alt="apple">
        <p>© 2014-{{ new Date().getFullYear() }} AppleService</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #000;
  &__info {
    display: flex;
    align-items: center;
    gap: 8px;
    & p {
      font-size: 16px;
      margin: 0;
    }
    & * {
      color: #adacab;
    }
  }
}
</style>
