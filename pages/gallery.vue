<template>
  <div class="gallery">
    <div class="wrap">
      <div class="gallery__about">
        <h2>Немного о нас</h2>
        <div class="gallery__cards">
          <div
            class="gallery__cards__card"
            v-for="card in countAbout"
            :key="card"
            @click="selectedImg = `/gallery/about/${card}.jpg|${$event.target.style.backgroundColor}`"
          >
            <img
              draggable="false"
              :class="`about-card-${card}`"
              :src="`/gallery/about/${card}.jpg`"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="gallery__review">
        <h2>Отзывы о нас</h2>
        <div class="gallery__cards">
          <div
            class="gallery__cards__card"
            v-for="card in countReview"
            :key="card"
            @click="selectedImg = `/gallery/review/${card}.jpg|${$event.target.style.backgroundColor}`"
          >
            <img
              draggable="false"
              :class="`review-card-${card}`"
              :src="`/gallery/review/${card}.jpg`"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <l-footer />
    <!--      Модалка просмотра картинки во весь экран-->
    <div
      class="gallery__full-watch"
      v-show="selectedImg.length"
      @click="selectedImg = ''"
    >
      <div class="gallery__full-watch__box">
        <div class="gallery__full-watch__box__img">
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
import countCards from '~/static/gallery/index.json'

export default {
  name: "gallery",
  data() {
    return {
      countAbout: countCards.countAbout,
      countReview: countCards.countReview,
      fac: new (require('fast-average-color').FastAverageColor)(),
      selectedImg: ''
    }
  },
  mounted() {
    for (let card = 0; card < this.countAbout; ++card) {
      let cardObject = document.querySelector(`.about-card-${card + 1}`)
      this.fac.getColorAsync(cardObject)
        .then(res => {
          cardObject.style.backgroundColor = res.hex
        })
    }
    for (let card = 0; card < this.countReview; ++card) {
      let cardObject = document.querySelector(`.review-card-${card + 1}`)
      this.fac.getColorAsync(cardObject)
        .then(res => {
          cardObject.style.backgroundColor = res.hex
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$borderFullWatch: 10px;

.gallery {
  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    &__card {
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
  &__about {
    padding-top: 20px;
  }
  &__review {
    padding-top: 20px;
    padding-bottom: 40px;
    .gallery {
      &__cards {
        &__card {
          height: 355px;
        }
      }
    }
  }
  &__full-watch {
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
}
.wrap {
  position: relative;
  height: 100%;
}
</style>
