<template>
  <div class="default">
    <div class="default__navbar">
      <div class="default__navbar__content">
        <div class="default__navbar__content__logo">
          <div
            class="default__navbar__content__logo__menu"
            :class="{'default__navbar__content__logo__menu--open': openedMenu}"
            @click="openedMenu = !openedMenu"
          >
            <img src="@/static/icons/menu.svg" alt="">
            <img src="@/static/icons/menu.svg" alt="">
          </div>
          <nuxt-link
            class="default__navbar__content__navigation__btn"
            exact
            to="/"
          >
            <div class="default__navbar__content__logo__img"/>
          </nuxt-link>
          <div
            class="default__navbar__content__logo__status"
            :class="status ? 'default__navbar__content__logo__status--green' : 'default__navbar__content__logo__status--red'"
          >
            <lfa icon="circle"/>
            <span>{{ status ? 'Открыто' : 'Закрыто' }}</span>
          </div>
        </div>
        <div
          class="default__navbar__content__navigation"
          :class="{'default__navbar__content__navigation--open': openedMenu}"
        >
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
            to="/usedItems"
          >
            <span>Б/у iPhone</span>
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
      <div class="default__app__call-btn" ref="call">
        <a
          href="tel:+79803073882"
          target="_blank"
          draggable="false"
        >
          <lfa icon="phone"/>
          <span>Позвонить</span>
        </a>
      </div>
      <l-footer />
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
      intervalId: null,
      openedMenu: false,
      closeMenu: (event) => {
        this.openedMenu = false
      }
    }
  },
  watch: {
    openedMenu() {
      if (this.openedMenu) {
        setTimeout(() => {
          document.addEventListener('click', this.closeMenu)
        }, 200)
      } else {
        document.removeEventListener('click', this.closeMenu)
      }
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
  overflow-x: hidden;
  &__navbar {
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: center;
    height: 80px;
    width: 100vw;
    background-color: #000;
    &__content {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1100px;
      &__logo {
        display: flex;
        align-items: center;
        gap: 20px;
        &__menu {
          display: none;
        }
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
      @media (min-width: 1100px) {
        justify-content: space-between;
      }
      @media (max-width: 1099px) and (min-width: 100px) {
        &__navigation {
          position: absolute;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 20px;
          background-color: #0b0b0b;
          box-sizing: border-box;
          transition: .3s;
          &--open {
            transform: translateY(100%);
          }
        }
        &__logo {
          justify-content: center;
          gap: 10px;
          width: 100%;
          height: 100%;
          background-color: #000;
          box-shadow: 0 0 10px 0 #000;
          z-index: 2;
          &__menu {
            position: absolute;
            left: 20px;
            display: flex;
            justify-content: center;
            gap: 5px;
            width: 40px;
            height: 40px;
            cursor: pointer;
            & img {
              width: 9px;
              user-select: none;
              transition: .3s;
            }
            &--open {
              & img {
                &:first-child {
                  transform: translateX(7px) rotate(45deg);
                }
                &:last-child {
                  transform: translateX(-7px) rotate(-45deg);
                }
              }
            }
          }
          &__status {
            & span {
              display: none;
            }
          }
        }
      }
      @media (max-width: 420px) and (min-width: 100px) {
        &__logo {
          &__menu {
            gap: 3px;
            left: 20px;
            width: 30px;
            height: 30px;
            &--open {
              & img {
                &:first-child {
                  transform: translateX(6px) rotate(45deg);
                }
                &:last-child {
                  transform: translateX(-6px) rotate(-45deg);
                }
              }
            }
          }
        }
      }
    }
  }
  &__app {
    padding-top: 80px;
    height: calc(100% - 80px);
    &__call-btn {
      position: sticky;
      bottom: 10px;
      left: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 40px;
      padding: 5px 10px;
      margin-bottom: 10px;
      border-radius: 15px;
      background: linear-gradient(45deg, rgb(66, 200, 105) 0%, rgb(33, 147, 67) 100%);
      box-sizing: border-box;
      cursor: pointer;
      z-index: 2;
      transition: .3s;
      & svg {
        color: #fff !important;
      }
      & span {
        color: #fff !important;
      }
      &:hover {
        transform: scale(1.02);
      }
    }
  }
}
@media (min-width: 1099px) {
  .default {
    &__app {
      &__call-btn {
        display: none;
      }
    }
  }
}

</style>
