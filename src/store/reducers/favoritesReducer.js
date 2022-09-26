const defaultState = {
  favorites: [],
}

const FAVORITES = 'FAVORITES'

export const favoritesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FAVORITES:
      return { ...state, favorites: action.payload }

    default:
      return state
  }
}

export const favoritesAction = (payload) => ({
  type: FAVORITES,
  payload,
})
