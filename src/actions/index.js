export const actions = {
  setFavorite:'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
}

// describe la informacion y pasa un objeto 
export const setFavorite = payload => ({
  type: actions.setFavorite,
  payload, 
});

export const deleteFavorite = payload => ({
  type: actions.deleteFavorite,
  payload,
});

export const loginRequest = payload => ({
  type: actions.loginRequest,
  payload,
});