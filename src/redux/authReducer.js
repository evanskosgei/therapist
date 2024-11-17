import { REHYDRATE } from 'redux-persist';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false  // Added this flag for easier auth checking
};

// Action types
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const LOGOUT = 'LOGOUT';

// Action creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setToken = (token) => ({ type: SET_TOKEN, payload: token });
export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
export const logout = () => ({ type: LOGOUT });

// Thunk for handling authentication
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Authentication failed');
    }

    const data = await response.json();
    dispatch(setToken(data.token));
    dispatch(setUser(data.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('persist:root'); // Clear persisted state
  dispatch(logout());
};

// Reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      // Handle rehydration with validation
      if (action.payload?.auth?.token) {
        return {
          ...state,
          ...action.payload.auth,
          isAuthenticated: true,
        };
      }
      return state;
      
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
      
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: !!action.payload,
      };
      
    case SET_LOADING:
      return { ...state, loading: action.payload };
      
    case SET_ERROR:
      return { ...state, error: action.payload };
      
    case LOGOUT:
      return initialState;
      
    default:
      return state;
  }
}