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
            @click="selectedImg = `${$router.options.base}gallery/about/${card}.jpg|${$event.target.style.backgroundColor}`"
          >
            <img
              draggable="false"
              :class="`about-card-${card}`"
              :src="`${$router.options.base}gallery/about/${card}.jpg`"
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
            @click="selectedImg = `${$router.options.base}gallery/review/${card}.jpg|${$event.target.style.backgroundColor}`"
          >
            <img
              draggable="false"
              :class="`review-card-${card}`"
              :src="`${$router.options.base}gallery/review/${card}.jpg`"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <l-footer />
    <l-full-screen-image v-model="selectedImg"/>
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
    console.log(this.$router)
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
}
.wrap {
  position: relative;
  height: 100%;
}
@media (max-width: 1099px) and (min-width: 300px) {
  .gallery {
    &__cards {
      &__card {
        width: 180px;
        height: 240px;
      }
    }
  }
}
@media (max-width: 405px) and (min-width: 100px) {
  .gallery {
    &__cards {
      &__card {
        width: 140px;
        height: 187px;
      }
    }
  }
}
</style>
