export default {
  state() {
    return {
      data: [
        {
          day: 'Воскресенье',
          abbr: 'Вс',
          closed: true
        },
        {
          day: 'Понедельник',
          abbr: 'Пн',
          hourStart: 10,
          hourEnd: 19
        },
        {
          day: 'Вторник',
          abbr: 'Вт',
          hourStart: 10,
          hourEnd: 19
        },
        {
          day: 'Среда',
          abbr: 'Ср',
          hourStart: 10,
          hourEnd: 19
        },
        {
          day: 'Четверг',
          abbr: 'Чт',
          hourStart: 10,
          hourEnd: 19
        },
        {
          day: 'Пятница',
          abbr: 'Пт',
          hourStart: 10,
          hourEnd: 19
        },
        {
          day: 'Суббота',
          abbr: 'Сб',
          hourStart: 11,
          hourEnd: 17
        }
      ]
    }
  },
  getters: {
    GET_TIMETABLE: (state) => {
      return state.data;
    },
    GET_DAY: (state) => {
      return state.data[new Date().getDay()]
    },
    GET_OPEN_STATE: (state) => {
      const time = new Date()
      const dayObj = state.data[time.getDay()]
      return !dayObj.closed || time.getHours() >= dayObj.hourStart && time.getHours() < dayObj.hourEnd
    }
  }
}
