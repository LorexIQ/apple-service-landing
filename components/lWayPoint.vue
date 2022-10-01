<template>
  <div class="way" :class="{'way--close': !opened}">
    <div class="way__block way__block--left">
      <span>{{ min }}:00</span>
      <lfa icon="circle"/>
    </div>
    <div class="way__road" ref="main-block-way">
      <lfa class="way__road__circle" icon="circle" ref="circle-obj" v-show="opened"/>
    </div>
    <div class="way__block way__block--right">
      <lfa icon="circle"/>
      <span>{{ max }}:00</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "lWayPoint",
  data() {
    return {
      opened: false
    }
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 24
    },
    value: {
      type: Number,
      default: 12
    }
  },
  watch: {
    value() {
      this.parseCirclePosition()
    }
  },
  mounted() {
    this.parseCirclePosition()
  },
  methods: {
    parseCirclePosition() {
      const roadObj = this.$refs['main-block-way']
      let circleObj = this.$refs['circle-obj']
      const maxWidth = roadObj.getBoundingClientRect().width
      if (this.value > this.min && this.value < this.max) {
        circleObj.style.left = `${((maxWidth / (this.max - this.min)) * (this.value - this.min)) / maxWidth * 100}%`
        if (!this.opened) {
          this.opened = true
        }
      } else {
        this.opened = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.way {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__block {
    display: flex;
    align-items: center;
    gap: 10px;
    & svg {
      font-size: 18px;
      color: #adacab;
    }
    & span {
      color: #e2e2e2;
    }
  }
  &__road {
    position: relative;
    background-color: #7a7978;
    height: 6px;
    width: 100%;
    &__circle {
      position: absolute;
      font-size: 16px;
      top: -5px;
      color: #e2e2e2;
      transition: .3s;
    }
  }
  &--close {
    .way {
      &__block {
        & svg {
          color: #ff3b6b;
        }
      }
    }
  }
}
</style>
