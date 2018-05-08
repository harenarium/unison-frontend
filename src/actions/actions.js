// import { store } from '../store.js';
const jwt = localStorage.getItem('jwt')
const URL = 'http://localhost:3000/api/v1';
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Token ${jwt}`
  }

export function loginUser(code, history) {
  return (dispatch) => {
    return fetch(`${URL}/access`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem("jwt", user.jwt)
      dispatch({ type: 'LOGIN', payload: user.currentUser })
      history.push("/home")
    });
  };
};

export function fetchPlaylists() {
  return (dispatch) => {
    return fetch(`${URL}/refresh_playlists`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'FETCH_PLAYLISTS', payload: data.playlists })
    });
  };
};

export function findUser(query) {
  return (dispatch) => {
    return fetch(`${URL}/find_user?q=${query}`)
    .then(res => res.json())
    .then(user => {
      dispatch({ type: 'FIND_USER', payload: user })
    });
  };
};

export function connectUser(otheruser) {
  return (dispatch) => {
    return fetch(`${URL}/connect_user`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ jwt, otheruser })
    })
    .then(res => res.json())
    .then(user => {
      dispatch({ type: 'CONNECT_USER', payload: user })
    });
  };
};

export function updatePlaylistTracks() {
  return (dispatch) => {
    return fetch(`${URL}/update_playlist_tracks`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ jwt })
    })
  };
};

export function updateUserArtists() {
  return (dispatch) => {
    return fetch(`${URL}/update_user_artists`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ jwt })
    })
  };
};

export function updateUserTracks() {
  return (dispatch) => {
    return fetch(`${URL}/update_user_tracks`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ jwt })
    })
  };
};


export function fetchResults(connection) {
  return (dispatch) => {
    return fetch(`${URL}/results`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ jwt, connection })
    })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'FETCH_RESULTS', payload: data })
    });
  };
};
////
export function logOutUser() {
  console.log("logout");
  return dispatch => {
    localStorage.clear();
    dispatch({ type: 'LOGOUT', payload: "logout" })
  };
};

export function fetchUser(jwt, history) {
  return (dispatch) => {
    return fetch(`${URL}/find_user`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then(user => {
      dispatch({ type: 'FETCH_USER', payload: user.currentUser })
    });
  };
};


export function fetchTracks() {
  return (dispatch) => {
    return fetch(`${URL}/top_tracks`, { headers: headers })
    .then(res => res.json())
    .then(data => {
       dispatch({ type: 'FETCH_TRACKS', payload: data.top_tracks.items })
    });
  };
};

export function fetchArtists() {
  return (dispatch) => {
    return fetch(`${URL}/top_artists`, { headers: headers })
    .then(res => res.json())
    .then(data => {
       dispatch({ type: 'FETCH_ARTISTS', payload: data.top_artists.items })
    });
  };
};

export function fetchPlaylist(data) {
  return (dispatch) => {
    return fetch(`${URL}/recommended_playlists?q=${data}`, { headers: headers })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'FETCH_PLAYLIST', payload: data.playlist.tracks })
    });
  };
};
