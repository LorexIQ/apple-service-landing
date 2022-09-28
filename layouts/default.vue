<template>
  <div class="default">
    <div class="default__navbar">
      <div class="default__navbar__content">
        <div class="default__navbar__content__logo"/>
        <div class="default__navbar__content__navigation">
          <nuxt-link
            class="default__navbar__content__navigation__btn"
            active-class="default__navbar__content__navigation__btn--active"
            exact
            to="/"
          >
            <span>Главная</span>
          </nuxt-link>
          <nuxt-link
            class="default__navbar__content__navigation__btn"
            active-class="default__navbar__content__navigation__btn--active"
            to="/assortment"
          >
            <span>Ассортимент</span>
          </nuxt-link>
          <nuxt-link
            class="default__navbar__content__navigation__btn"
            active-class="default__navbar__content__navigation__btn--active"
            to="/gallery"
          >
            <span>Галерея</span>
          </nuxt-link>
          <nuxt-link
            class="default__navbar__content__navigation__btn"
            active-class="default__navbar__content__navigation__btn--active"
            to="/contacts"
          >
            <span>Контакты</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="default__app">
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style lang="scss" scoped>
.default {
  margin: 0 auto;
  &__navbar {
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: center;
    height: 80px;
    width: 100%;
    background-color: #000;
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1100px;
      &__navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        &__btn {
          cursor: pointer;
          user-select: none;
          &--active {
            color: #e2e2e2;
          }
        }
      }
      &__logo {
        width: 200px;
        height: 60px;
        background: 0 0/200px 60px url('static/logo/LongLogo.svg') no-repeat;
      }
    }
  }
  &__app {
    padding-top: 80px;
  }
}
</style>
