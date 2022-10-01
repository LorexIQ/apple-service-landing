<template>
  <div class="default">
    <div class="default__navbar">
      <div class="default__navbar__content">
        <div class="default__navbar__content__logo">
          <div class="default__navbar__content__logo__img"/>
          <div
            class="default__navbar__content__logo__status"
            :class="status ? 'default__navbar__content__logo__status--green' : 'default__navbar__content__logo__status--red'"
          >
            <lfa icon="circle"/>
            <span>{{ status ? 'Открыто' : 'Закрыто' }}</span>
          </div>
        </div>
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
            to="/items"
          >
            <span>Товары</span>
          </nuxt-link>
          <nuxt-link
            class="default__navbar__content__navigation__btn"
            active-class="default__navbar__content__navigation__btn--active"
            to="/services"
          >
            <span>Услуги</span>
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
import { mapGetters } from 'vuex'

export default {
  name: "default",
  data() {
    return {
      status: this.GET_OPEN_STATE(),
      intervalId: null
    }
  },
  mounted() {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(() => {
      this.status = this.GET_OPEN_STATE()
      console.log(`Shop Status: ${this.status ? 'opened' : 'closed'}`)
    }, 5000)
  },
  methods: {
    ...mapGetters([
      'GET_OPEN_STATE'
    ])
  }
}
</script>

<style lang="scss" scoped>
.default {
  margin: 0 auto;
  height: inherit;
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
          &:hover {
            color: #e2e2e2;
          }
          &--active {
            color: #e2e2e2;
          }
        }
      }
      &__logo {
        display: flex;
        align-items: center;
        gap: 20px;
        &__img {
          width: 200px;
          height: 60px;
          background: 0 0/200px 60px url('static/logo/LongLogo.svg') no-repeat;
        }
        &__status {
          font-size: 16px;
          & svg {
            font-size: 14px;
          }
          &--green {
            color: #86de74;
          }
          &--red {
            color: #ff3b6b;
          }
        }
      }
    }
  }
  &__app {
    padding-top: 80px;
    height: calc(100% - 80px);
  }
}
</style>
