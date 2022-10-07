<template>
  <div class="service">
    <div class="service__box">
      <div class="service__box__title">
        <div class="wrap">
          <h2>Примерный перечень услуг</h2>
          <span>Для более точного определения предоставляемых услуг, уточняйте возможность решения своей проблемы, обращаясь напрямую к мастеру, через
            <nuxt-link
              tag="p"
              to="/contacts"
            >
              КОНТАКТЫ
            </nuxt-link>
          </span>
        </div>
      </div>
      <div class="service__box__contacts">
        <div class="wrap">
          <div class="service__box__contacts__box">
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
      <div class="service__box__list">
        <div class="wrap">
          <div class="service__box__list__table">
            <div
              class="service__box__list__table__item"
              v-for="(service, index) in serviceList"
              :key="index"
            >
              {{service}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <l-footer />
  </div>
</template>

<script>
export default {
  name: "services",
  data() {
    return {
      serviceList: [
        'Замена дисплеев',
        'Замена шлейфов',
        'Замена корпуса вашего iPhone',
        'Ремонт функции Face ID с проблемой поднимите, опустите',
        'Восстановление модема (нет сети) на iPhone 5s,6,6s,7 и выше',
        'Восстановление аудиокодека (не работает динамик и микрофон, так же недоступен значек громкой связи) на iPhone',
        'Восстановление после попадание влаги',
        'Инженерные работы по ремонту платы',
        'Замена стекла дисплея с сохранением оригинальной матрицы',
        'Замена стекла дисплея на Apple Watch',
        'Замена заднего стекла корпуса вашего iPhone лазером',
        'Ремонт Apple техники, Android, планшетов, ноутбуков',
        'Замена задних стёкол корпуса iPhone лазером без разборки аппарата!',
        'Разблокировка Apple техники (отвязка от Icloud)',
        'Расширение памяти IPhone (32, 64, 128, 256)',
        'Устранение ошибок iTunes',
        'Устранение ошибок активации',
        'Прошивка устройств',
        'Замена дисплейного модуля',
        'Замена контроллера питания',
        'Замена стекол на специальном оборудовании',
        'Исправление неисправности - не заряжается',
        'Исправление неисправности - не ловит сеть',
        'Исправление неисправности - не работает Wi-fi',
        'Замена сенсорного стекла',
        'Калибровка сенсора',
        'Замена разъема питания, TypeC, MicroUSB и т.д.',
        'Восстановление после воды',
        'Замена динамика, чистка',
        'Замена микрофона (цифровой, аналоговый)',
        'Замена кнопки (чистка)',
        'Замена гнезда наушников, разъема гарнитуры',
        'Замена аккумулятора (переделка, адаптация любого)',
        'Замена камеры (не фокусирует, стекло камеры)',
        'Погнут корпус - правка корпуса, восстановление',
        'Починка ноутбуков, планшетов (Петли, чистка, матрицы, дисплеи)',
        'Чистка от пыли (Замена термопасты, чистка кулера - вентилятора)',
        'Сохранение информации, клонирование диска',
        'Замена матрицы (экрана)',
        'Замена клавиатуры (топ кейс)',
        'Замена петель крепления, восстановление петель',
        'Замена жесткого диска (SSD - M2)',
        'Замена памяти - увеличение памяти DDR2, DDR3, DDR4',
        'Замена разъема питания (USB, HDMI, TypeC)',
        'Замена аккумулятора, вздулся, изношен, не держит заряд',
        'Устранение попадания жидкости, восстановление',
        'Установка ПО (Программный ремонт)',
        'Замена кулера (вентилятор, греется, шумит, трещит)',
        'Восстановление корпуса, склейка, наращивание пластика, восстановление крепежа, петель, рамки дисплея'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  &__box {
    margin-bottom: 20px;
    &__title {
      background-color: #090909;
      padding-bottom: 40px;
      & h2 {
        margin: 0;
        padding: 40px 0 10px;
      }
      & span {
        margin: 0;
        font-size: 18px;
        & p {
          display: inline;
          margin: 0;
          color: #e2e2e2;
          cursor: pointer;
        }
      }
    }
    &__contacts {
      background-color: #0b0b0b;
      padding: 40px 0;
      margin-bottom: 40px;
      &__box {
        display: flex;
        justify-content: center;
        gap: 30px;
      }
    }
    &__list {
      &__table {
        border: 1px solid #0b0b0b;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 #e2e2e2;
        &__item {
          padding: 10px 20px;
          font-weight: 600;
          letter-spacing: -1px;
          &:nth-child(even) {
            background-color: #0b0b0b;
          }
        }
      }
    }
  }
}
.super-btn {
  position: relative;
  width: 440px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e2e2e2;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  &__block {
    display: grid;
    grid-template-areas: "A B"
                             "A C";
    row-gap: 5px;
    column-gap: 20px;
    padding: 15px 20px 15px 20px;
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      &:first-child {
        grid-area: A;
        display: flex;
        align-items: center;
        width: 30px;
        font-size: 35px;
        color: #e2e2e2;
      }
      &:nth-child(2) {
        grid-area: B;
        color: #e2e2e2;
        font-size: 36px;
        align-self: flex-end;
      }
      &:last-child {
        grid-area: C;
        align-self: flex-start;
      }
    }
  }
  &__btn {
    position: absolute;
    height: 100%;
    width: 0;
    top: 0;
    right: 0;
    overflow: hidden;
    border-radius: 0 10px 10px 0;
    background-color: #e2e2e2;
    box-shadow: 3px 0 10px 0 #0b0b0b inset;
    transition: .3s;
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      height: 100%;
      color: #0f0f0f;
    }
  }
  &:hover {
    .super-btn {
      &__btn {
        width: 100px;
      }
    }
  }
}
</style>
