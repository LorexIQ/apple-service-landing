export default {
  state() {
    return {
      data: [
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
          hourStart: 10,
          hourEnd: 19
        },
        {
          day: 'Воскресенье',
          abbr: 'Вс',
          closed: true
        },
      ]
    }
  },
  getters: {
    GET_TIMETABLE: (state) => {
      return state.data;
    },
    GET_DAY: (state) => {
      return state.data[new Date().getDay() - 1]
    },
    GET_OPEN_STATE: (state) => {
      const time = new Date()
      const dayObj = state.data[time.getDay() - 1]
      return dayObj.closed || time.getHours() > dayObj.hourStart && time.getHours() < dayObj.hourEnd
    }
  }
}
