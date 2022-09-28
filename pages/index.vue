<template>
  <div class="home">
    <div class="home__banner">
      <div class="wrap">
        <div class="home__banner__block">
          <div class="home__banner__block__label">
            <div class="home__banner__block__label__logo"/>
            <p>Дёшево, качественно, в срок!</p>
          </div>
          <ul class="home__banner__block__list">
            <li>Высокое качество ремонта</li>
            <li>Тысячи довольных клиентов</li>
            <li>Большой выбор товара</li>
            <li>Широкий график работы</li>
          </ul>
          <nuxt-link class="home__banner__block__btn" to="/contacts">
            <span>Позвонить</span>
          </nuxt-link>
        </div>
        <div class="home__banner__img"/>
      </div>
    </div>
    <div class="home__map">
      <div class="wrap">
        <h2>Мы на карте</h2>
        <div class="home__map__info">
          <div class="home__map__info__label">
            <div class="home__map__info__label__info-block">
              <span><lfa icon="clock"/></span>
              <span>Часы работы</span>
              <span>пн. — сб. c 10 до 19</span>
            </div>
            <div class="home__map__info__label__info-block">
              <span><lfa icon="location-dot"/></span>
              <span>Адрес сервиса</span>
              <span>Брянск, Авиационная улица, 11</span>
            </div>
            <div class="home__map__info__label__info-block">
              <span><lfa icon="location-arrow"/></span>
              <span>Как добраться?</span>
              <span>Главный вход → направо → дверь под лестницей</span>
            </div>
          </div>
          <yandex-map :settings="settings" :coords="coords" :controls="control">
            <ymap-marker
              :coords="coords"
              marker-id="id"
              hint-content="Главный офис"
            />
          </yandex-map>
        </div>
      </div>
    </div>
    <div class="home__footer">
      <div class="wrap">
        <div class="home__footer__info">
          <img src="~/static/logo/Apple.svg" width="20" height="20" alt="apple">
          <p>© 2014-{{ new Date().getFullYear() }} AppleService</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {yandexMap, ymapMarker} from "vue-yandex-maps";

export default {
  components: { yandexMap, ymapMarker },
  name: 'IndexPage',
  data() {
    return {
      settings: {
        apiKey: 'cb62a79d-2f32-4381-86d9-47a1dcaac260',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
      },
      coords: [53.263099, 34.323138],
      control: ["zoomControl", "geolocationControl", "rulerControl", "trafficControl", "routeButtonControl"]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__banner {
    display: flex;
    align-items: center;
    height: 509px;
    position: relative;
    background-color: #090909;
    &__block {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 1;
      height: 400px;
      width: 450px;
      &__label {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 1;
        &__logo {
          width: 100%;
          height: 160px;
          background: 0 0/100% 160px url('static/logo/BoldLogo.svg') no-repeat;
        }
        & p {
          position: absolute;
          bottom: 0;
          right: 0;
          margin: 0;
          text-align: right;
        }
      }
      &__list {
        font-size: 17px;
        list-style: square;
        line-height: 30px;
      }
      &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 150px;
        margin-left: 24px;
        border-radius: 5px;
        padding: 10px 20px;
        background: linear-gradient(180deg, rgba(226,226,226,1) 0%, rgba(129,128,126,1) 50%, rgba(226,226,226,1) 100%) no-repeat;
        background-size: 100% 200%;
        transition: .3s;
        & span {
          font-size: 25px;
          font-weight: 700;
          color: #090909;
        }
        &:hover {
          background-position: 0 100%;
          & span {
            color: #0f0f0f;
          }
        }
      }
    }
    &__img {
      position: absolute;
      top: 0;
      right: calc(50% - 555px);
      width: 826px;
      height: 509px;
      background: linear-gradient(90deg, rgb(9, 9, 9) 0, rgba(240,240,240,0) 60%), 0 0/826px 509px url('assets/imgs/mainPhone.png') no-repeat;
    }
  }
  &__map {
    margin-bottom: 50px;
    &__info {
      display: flex;
      gap: 20px;
      &__label {
        display: flex;
        gap: 10px;
        flex-direction: column;
        &__info-block {
          display: grid;
          grid-template-areas: "A B"
                               "A C";
          column-gap: 15px;
          padding: 5px 10px;
          min-width: 200px;
          max-width: 250px;
          border: 1px solid #adacab;
          border-radius: 10px;
          & span:first-child {
            grid-area: A;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 26px;
            width: 26px;
          }
          & span:nth-child(2) {
            grid-area: B;
            white-space: nowrap;
          }
          & span:last-child {
            grid-area: C;
            font-size: 16px;
            font-weight: 500;
          }
        }
      }
    }
    & section {
      height: 500px;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    height: 70px;
    background-color: #090909;
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
}
</style>
