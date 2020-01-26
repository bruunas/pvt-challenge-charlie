// Actions 
const SET_DATA_WEATHER = 'SET_DATA_WEATHER'

const findDataGroup = (obj, days) => {
  const currentDate = new Date()

  const prevDataDay = currentDate.getDate() + days
  const dataDay = new Date(obj.dt_txt).getDate()

  return dataDay === prevDataDay
}

export default function reducer (
  state = {
    0: {
      title: 'Hoje',
      data: {}
    },
    1: {
      title: 'Amanhã',
      data: {}
    },
    2: {
      title: 'Depois de Amanhã',
      data: {}
    }
  }, action = {}) {
    switch (action.type) {
      case SET_DATA_WEATHER:
        const { weather } = action

        const dateToday = {...weather[0]}
        const dateTomorrow = {...weather.filter( (i) => findDataGroup(i, 1)).slice(0, 1)[0]}
        const dataAfterTomorrow = {...weather.filter( (i) => findDataGroup(i, 2)).slice(0, 1)[0]}
        
        return {
          ...state,
          0: {
            title: 'Hoje',
            data: dateToday
          },
          1: {
            title: 'Amanhã',
            data: dateTomorrow
          },
          2: {
            title: 'Depois de Amanhã',
            data: dataAfterTomorrow
          }
          
        }
      
      default:
        return state
    }
  }
  
  // Action Creators
  export function setDataWeather (weather) {
    return { type: SET_DATA_WEATHER, weather}
  }