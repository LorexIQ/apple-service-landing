<template>
  <div
    class="full-watch"
    v-show="selectedImg.length"
    @click="$emit('input', '')"
  >
    <div class="full-watch__box">
      <div class="full-watch__box__img">
        <img
          draggable="false"
          :style="`background-color: ${selectedImg.split('|')[1]};`"
          :src="selectedImg.split('|')[0]"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IFullScreenImage",
  data() {
    return {
      selectedImg: ''
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value() {
      this.selectedImg = this.value
    }
  },
  mounted() {
    this.selectedImg = this.value
  }
}
</script>

<style lang="scss" scoped>
.full-watch {
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
  @media (max-width: 1099px) and (min-width: 300px) {
    &__box {
      height: 100%;
    }
  }
}
</style>
