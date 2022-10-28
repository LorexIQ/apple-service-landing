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
            <li>Большой ассортимент смартфонов</li>
            <li>Скидки постоянным клиентам</li>
            <li>Тысячи довольных клиентов</li>
            <li>Высокое качество ремонта</li>
            <li>Лучшие цены в городе</li>
          </ul>
          <nuxt-link class="home__banner__block__btn" to="/contacts">
            <span>Позвонить</span>
          </nuxt-link>
        </div>
        <div class="home__banner__img"/>
      </div>
    </div>
    <div class="home__mini-store">
      <div class="wrap">
        <div class="home__mini-store__info">
          <nuxt-link to="/contacts">
            <div class="super-btn">
              <div class="super-btn__block">
              <span>
              <img src="~/assets/imgs/iphonex.svg" alt="iphone">
            </span>
                <span>Продать iPhone</span>
                <span>Самая выгодная цена в регионе!</span>
              </div>
              <div class="super-btn__btn">
                <span>Перейти</span>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/items">
            <div class="super-btn">
              <div class="super-btn__block">
              <span>
              <img src="~/assets/imgs/iphonex.svg" alt="iphone">
            </span>
                <span>Купить iPhone</span>
                <span>Самая низкая цена в регионе!</span>
              </div>
              <div class="super-btn__btn">
                <span>Перейти</span>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/services">
            <div class="super-btn">
              <div class="super-btn__block">
              <span>
              <img src="~/assets/imgs/iphonex_repair.svg" alt="iphone">
            </span>
                <span>Починить iPhone</span>
                <span>Высокое качестно за низкую цену!</span>
              </div>
              <div class="super-btn__btn">
                <span>Перейти</span>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/services">
            <div class="super-btn">
              <div class="super-btn__block">
              <span>
              <img src="~/assets/imgs/android.svg" alt="iphone">
            </span>
                <span>Починить Android</span>
                <span>Высокое качестно деталей!</span>
              </div>
              <div class="super-btn__btn">
                <span>Перейти</span>
              </div>
            </div>
          </nuxt-link>
        </div>
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
              <span>пн. — пт. c 10 до 19 <p>сб. с 11 до 17</p></span>
            </div>
            <a href="https://yandex.ru/maps/-/CCUZBKte~B" target="_blank">
              <div class="home__map__info__label__info-block home__map__info__label__info-block--medium" >
                <span><lfa icon="location-dot"/></span>
                <span>Адрес сервиса</span>
                <span>Брянск, Авиационная улица, 11, <p>ТЦ Эдельвейс</p></span>
              </div>
            </a>
            <div class="home__map__info__label__info-block">
              <span><lfa icon="location-arrow"/></span>
              <span>Как добраться?</span>
              <span>Главный вход → направо → дверь возле лестницы</span>
            </div>
            <nuxt-link to="/contacts">
              <div class="home__map__info__label__info-block home__map__info__label__info-block--medium home__map__info__label__info-block--high">
                <span><lfa icon="phone"/></span>
                <span>Телефон</span>
                <span><p>+7 (980) 307-38-82</p> Все доступые варианты связи, доступны на странице <p>Контакты</p></span>
              </div>
            </nuxt-link>
          </div>
          <yandex-map :settings="settings" :coords="coords" :controls="control">
            <ymap-marker
              :coords="coords"
              marker-id="id"
              hint-content="Главный офис"
              :icon="{
                  layout: 'default#image',
                  imageHref: 'icons/blackApple.png',
                  imageSize: [30, 30],
                  imageOffset: [-15, -35]
              }"
              :balloon="balloon"
            />
          </yandex-map>
        </div>
      </div>
    </div>
    <l-footer />
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
      balloon: {
        header: `
          <img src="logo/LongLogo.svg"></img>
        `,
        body: `
          <div style="display: flex; flex-direction: column; justify-content: center;">
            <p style="margin: 0;padding: 10px 0 0;font-weight: 600;text-align: center; color: #898887;">Главный вход</p>
            <img width="160" alt="" src="icons/in.jpg" style="border-radius: 5px;"></img>
            <a href="tel:79803073882" style="color: #548ce6; text-align: center">+7 (980) 307-38-82</a>
          </div>
        `,
        footer: 'ООО "Apple Service 32"'
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
  &__mini-store {
    padding: 50px 0;
    background-color: #0b0b0b;
    &__info {
      display: flex;
      flex-wrap: wrap;
      gap: 30px 0;
      justify-content: space-around;
    }
  }
  &__map {
    padding-bottom: 40px;
    & h2 {
      margin: 0;
      padding: 40px 0 20px;
    }
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
          row-gap: 3px;
          padding: 5px 10px;
          min-width: 200px;
          max-width: 250px;
          border: 1px solid #adacab;
          border-radius: 10px;
          transition: .3s;
          & span {
            &:first-child {
              grid-area: A;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 26px;
              width: 26px;
            }
            &:nth-child(2) {
              grid-area: B;
              white-space: nowrap;
            }
            &:last-child {
              grid-area: C;
              font-size: 16px;
              font-weight: 500;
              & p {
                margin: 0;
              }
            }
          }
          &--high {
            cursor: pointer;
            & span {
              &:last-child {
                font-size: 12px;
              }
            }
          }
          &--medium {
            & a, & p {
              display: inline;
              font-size: 16px;
              color: #e2e2e2;
              margin: 0;
              padding: 0;
            }
            &:hover {
              background-color: #2f2f2f;
            }
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
}
@media (max-width: 1099px) and (min-width: 100px) {
  .home {
    &__banner {
      & .wrap {
        display: flex;
        justify-content: center;
      }
      &__block {
        width: 370px;
        &__label {
          &__logo {
            height: 120px;
            background: 0 0/100% 120px url('static/logo/BoldLogo.svg') no-repeat;
          }
          & p {
            font-size: 18px;
          }
        }
        &__btn {
          align-self: center;
        }
      }
    }
    &__map {
      &__info {
        flex-direction: column-reverse;
        &__label {
          flex-wrap: wrap;
          justify-content: space-evenly;
          flex-direction: row;
        }
      }
    }
  }
}
@media (max-width: 399px) and (min-width: 100px) {
  .home {
    &__banner {
      & .wrap {
        display: flex;
        justify-content: center;
      }
      &__block {
        width: 370px;
        &__label {
          &__logo {
            height: 110px;
            background: 0 0/100% 110px url('static/logo/BoldLogo.svg') no-repeat;
          }
          & p {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
