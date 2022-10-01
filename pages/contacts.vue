<template>
  <div class="contacts">
    <div class="wrap">
      <div class="contacts__info">
        <div class="contacts__info__graphic">
          <span
            :class="opened ? 'contacts__info__graphic__title--open' : 'contacts__info__graphic__title--close'"
            class="contacts__info__graphic__title"
          >
            {{ opened ? 'Открыто' : 'Закрыто' }}
          </span>
          <l-way-point :min="today.hourStart" :max="today.hourEnd" :value="timeNow"/>
          <div class="contacts__info__graphic__under-way">
            <div class="contacts__info__graphic__under-way__timer">
              <span v-if="opened">Закрытие через {{ closeAfter }}</span>
            </div>
            <div class="contacts__info__graphic__under-way__table">
              <span
                :style="index + 1 === new Date().getDay() ? 'color: #e2e2e2;' : ''"
                v-for="(day, index) in days"
                :key="index"
              >
                <span>{{ day.day }}</span>
                <span v-if="!day.closed">с {{ day.hourStart }}:00 по {{ day.hourEnd }}:00</span>
                <span v-else>Выходной</span>
              </span>
            </div>
          </div>
        </div>
        <div class="contacts__info__cards">
          <a
            v-for="(contact, index) in contacts"
            :key="index"
            :href="contact.link"
            target="_blank"
            draggable="false"
          >
            <div class="contacts__info__cards__card">
              <span :style="contact.color ? `color: ${contact.color};` : ''">
                <img v-if="contact.iconSvg" :src="contact.iconSvg" alt="icon">
                <lfa v-else :icon="contact.icon"/>
              </span>
              <span>{{ contact.title }}</span>
              <span>{{ contact.description }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <l-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "contacts",
  data () {
    return {
      action: 0,
      contacts: [
        {
          title: '+7 (980) 307-38-82',
          link: 'tel:79803073882',
          icon: 'mobile'
        },
        {
          title: '338-010',
          link: 'tel:338010',
          icon: 'phone'
        },
        {
          title: 'Viber',
          description: '+7 (980) 307-38-82',
          link: 'viber://chat?number=%2B79803073882',
          icon: ['fab', 'viber'],
          color: '#774e97'
        },
        {
          title: 'Telegram',
          description: '@gerik1705',
          link: 'https://t.me/gerik1705',
          icon: ['fab', 'telegram'],
          color: '#138ac5'
        },
        {
          title: 'VK',
          description: 'Сергей Брянск',
          link: 'https://vk.com/comp32bryansk',
          icon: ['fab', 'vk'],
          color: '#0077ff'
        },
        {
          title: 'Avito',
          description: 'Сергей',
          link: 'https://www.avito.ru/user/cbd51e5f936d89ba6363cf2de974c006/profile?id=2494107392',
          iconSvg: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iX9Ch0LvQvtC5XzEiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODMuMSA4My4xIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjOTdjZjI2OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmZjYxNjM7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzBhZjsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjYTE2OWY3OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjYwLjY1IiBjeT0iNjAuNjUiIHI9IjIyLjQ1Ii8+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTQiIGN4PSIxOC40NSIgY3k9IjYwLjY1IiByPSIxMC40NSIvPgogIDxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNjAuNjUiIGN5PSIxOC40NSIgcj0iMTQuNDUiLz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMyIgY3g9IjE4LjQ1IiBjeT0iMTguNDUiIHI9IjE4LjQ1Ii8+Cjwvc3ZnPg=='
        }
      ],
      today: this.GET_DAY(),
      timeNow: this.getNowTime(),
      timeUpdateIntervalId: null,
      opened: this.GET_OPEN_STATE(),
      closeAfter: null,
      days: this.GET_TIMETABLE()
    }
  },
  mounted() {
    if (this.$route.query.action) {
      this.action = this.$route.query.action
    }
    this.closeAfter = this.getLastTime()
    clearInterval(this.timeUpdateIntervalId)
    this.timeUpdateIntervalId = setInterval(() => {
      this.timeNow = this.getNowTime()
      this.opened = this.GET_OPEN_STATE()
      if (this.opened) {
        this.closeAfter = this.getLastTime()
      }
    }, 1000)
  },
  methods: {
    ...mapGetters([
      'GET_DAY',
      'GET_OPEN_STATE',
      'GET_TIMETABLE'
    ]),
    getNowTime() {
      const time = new Date()
      return time.getHours() + time.getMinutes() / 60
    },
    getLastTime() {
      return `${`${Math.round(this.today.hourEnd - this.timeNow)}`.padStart(2, '0')}:
      ${`${60 - Math.round((this.timeNow - Math.round(this.timeNow)) * 60)}`.padStart(2, '0')}`
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  position: relative;
  height: 100%;
  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 20px 0;
    &__cards {
      display: grid;
      grid-template-areas: "A B"
                           "C D"
                           "E F";
      grid-auto-columns: 30% 30%;
      gap: 15px 15px;
      justify-content: center;
      width: 100%;
      &__card {
        display: grid;
        grid-template-areas: "A B"
                             "A C";
        grid-auto-columns: 25px calc(100% - 35px);
        column-gap: 10px;
        padding: 8px 15px;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        box-sizing: border-box;
        cursor: pointer;
        transition: .3s;
        & span {
          display: flex;
          align-items: center;
          justify-content: center;
          &:first-child {
            grid-area: A;
            color: #e2e2e2;
            & svg {
              font-size: 25px;
            }
            & img {
              width: 25px;
            }
          }
          &:nth-child(2) {
            grid-area: B;
            color: #e2e2e2;
          }
          &:last-child {
            grid-area: C;
            font-size: 16px;
          }
        }
        &:first-child {
          grid-area: A;
        }
        &:nth-child(2) {
          grid-area: B;
        }
        &:nth-child(3) {
          grid-area: C;
        }
        &:nth-child(4) {
          grid-area: D;
        }
        &:nth-child(5) {
          grid-area: E;
        }
        &:last-child {
          grid-area: F;
        }
        &:hover {
          background-color: #353535;
        }
      }
    }
    &__graphic {
      display: flex;
      flex-direction: column;
      width: 75%;
      padding: 10px 20px;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      box-sizing: border-box;
      &__title {
        text-align: center;
        font-size: 30px;
        padding: 15px 0;
        &--open {
          color: #86de74;
        }
        &--close {
          color: #ff3b6b;
        }
      }
      &__under-way {
        &__timer {
          display: flex;
          justify-content: center;
          & span {
            color: #e2e2e2;
          }
        }
        &__table {
          display: flex;
          flex-direction: column;
          padding-top: 20px;
          & > span {
            display: flex;
            & span {
              width: 100%;
              &:last-child {
                text-align: right;
              }
            }
          }
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
