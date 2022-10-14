<template>
  <div class="items">
    <div class="items__content">
      <div class="items__content__warming">
        <div class="wrap">
          <div class="items__content__warming__content">
            <h2>Внимание!</h2>
            <p>На этой странице приведён примерный список товаров. Полный перечень товаров, их цену и более подробную информацию, можно узнать, напрямую обратившись к мастеру сервиса</p>
          </div>
        </div>
      </div>
      <div class="items__content__contacts">
        <div class="wrap">
          <div class="items__content__contacts__box">
            <nuxt-link to="/contacts">
              <div class="super-btn">
                <div class="super-btn__block">
              <span>
                <lfa icon="address-book"/>
              </span>
                  <span>Все контакты</span>
                  <span>Широкий перечень соцсетей</span>
                </div>
                <div class="super-btn__btn">
                  <span>Перейти</span>
                </div>
              </div>
            </nuxt-link>
            <a href="tel:79803073882">
              <div class="super-btn">
                <div class="super-btn__block">
              <span>
                <lfa icon="phone"/>
              </span>
                  <span>Прямой звонок</span>
                  <span>Звонок на мобильный телефон</span>
                </div>
                <div class="super-btn__btn">
                  <span>Звонок</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="items__content__list">
        <div class="wrap">
          <div class="items__content__list__content">
            <h2>Товары</h2>
            <div class="items__content__list__content__box">
              <div
                class="items__content__list__content__box__item"
                v-for="card in countItems"
                :key="card"
                @click="selectedImg = `/items/data/${card}.jpg|${$event.target.style.backgroundColor}`"
              >
                <img
                  draggable="false"
                  :class="`item-card-${card}`"
                  :src="`/items/data/${card}.jpg`"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <l-footer/>
    <!--      Модалка просмотра картинки во весь экран-->
    <div
      class="items__full-watch"
      v-show="selectedImg.length"
      @click="selectedImg = ''"
    >
      <div class="items__full-watch__box">
        <div class="items__full-watch__box__img">
          <img
            draggable="false"
            :style="`background-color: ${selectedImg.split('|')[1]};`"
            :src="selectedImg.split('|')[0]"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsJSON from '@/static/items/index.json'

export default {
  name: "items",
  data() {
    return {
      countItems: itemsJSON.countItems,
      selectedImg: '',
      fac: new (require('fast-average-color').FastAverageColor)(),
    }
  },
  mounted() {
    for (let card = 0; card < this.countItems; ++card) {
      let cardObject = document.querySelector(`.item-card-${card + 1}`)
      this.fac.getColorAsync(cardObject)
        .then(res => {
          cardObject.style.backgroundColor = res.hex
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  position: relative;
  min-height: 100%;
  box-sizing: border-box;
  padding-bottom: 90px;
  &__content {
    &__warming {
      background-color: #090909;
      & > div {
        padding: 20px 0;
      }
      &__content {
        border: 2px solid #a80000;
        border-radius: 10px;
        text-align: center;
        padding: 0 20px;
      }
    }
    &__contacts {
      background-color: #0b0b0b;
      padding: 40px 0;
      margin-bottom: 30px;
      &__box {
        display: flex;
        justify-content: center;
        gap: 30px;
      }
    }
    &__list {
      &__content {
        &__box {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 5px;
          &__item {
            width: 200px;
            height: 266px;
            border-radius: 5px;
            box-shadow: 0 0 10px 0 #0f0f0f;
            overflow: hidden;
            cursor: zoom-in;
            user-select: none;
            transition: .3s;
            &:hover {
              transform: scale(1.1);
              z-index: 1;
            }
            & img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
  &__full-watch {
    $borderFullWatch: 10px;
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: zoom-out;
    z-index: 2;
    &__box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90%;
      max-width: 1100px;
      width: 100%;
      background-color: #000;
      border-radius: 10px;
      overflow: hidden;
      &__img {
        width: calc(100% - $borderFullWatch - $borderFullWatch);
        height: calc(100% - $borderFullWatch - $borderFullWatch);
        border-radius: 5px;
        overflow: hidden;
        user-select: none;
        & img {
          width: 100%;
          object-fit: contain;
          height: 100%;
        }
      }
    }
  }
  & .footer {
    position: absolute;
    bottom: 0;
  }
}
</style>
