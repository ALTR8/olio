var cuid = require('cuid');

export default function Addon(state = [], action){
  switch (action.type) {
    case 'ADD_ADDON':
      return [...state, {x: 50, y: 100, h: action.payload.initial_height, w: action.payload.initial_width, url: action.payload.url, category: action.payload.category, id: cuid() }]
    case 'REMOVE_ADDON':
      return state.filter((a) => {
        return a.id !== action.payload.id
      })
    case 'STORE_LOCATION':
      let found = state.filter(addon => addon.id === action.payload.id)[0]
      let rest = state.filter(addon => addon.id !== action.payload.id)
      let newLocation = {
        id: found.id,
        url: found.url,
        y: action.payload.coordinates.top,
        x: action.payload.coordinates.left,
        h: found.category === 'text' ? (
          action.payload.coordinates.height - 4)
          : (action.payload.coordinates.height),
        w: found.category === 'text' ? (
          action.payload.coordinates.width - 4)
          : (action.payload.coordinates.width),
        category: found.category,
      }
      if (newLocation.category === 'text') { newLocation.value = action.payload.value }
      return [...rest, newLocation]
    case 'DELETE_ADDONS':
      return []
    case 'RESTORE_CREATION':
      return action.payload.composition
    default:
      return state
  }
}
