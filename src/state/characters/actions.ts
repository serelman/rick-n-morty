import axios, { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {
  LOADED,
  REQUEST,
  FAILURE,
  NEW_CHARACTER,
  REMOVE_CHARACTER,
  GET_CHARACTERS,
  GET_CHARACTER, CLEAR_PROFILE
} from "./constants";
import API_URL from "../../constants/api";

export const getCharacters = (filters?: string) => (dispatch: Dispatch) => {
  const filter = filters
  const url = `${API_URL}/character/?${filter}`

  dispatch(request());
  axios.get(url)
      .then((res: AxiosResponse) => {
        dispatch({
          type: GET_CHARACTERS,
          characters: res.data.results,
          pagesInfo: res.data.info
        });
        dispatch(loaded());
      })
      .catch((err: AxiosError) => {
        dispatch(failure(err.message));
      })
}

export const getCharacter = (id: number | string) => (dispatch: Dispatch) => {
  dispatch(request());
  axios.get(`${API_URL}/character/${id}`)
      .then((res: AxiosResponse) => {
        dispatch({
          type: GET_CHARACTER,
          character: res.data
        });
        dispatch(loaded());
      })
      .catch((err: AxiosError) => {
        dispatch(failure(err.message));
      })
}

export const clearProfile = () => (dispatch: Dispatch) => {
  dispatch({
    type: CLEAR_PROFILE
  })
}

export const getFilteredCharacters = () => (dispatch: Dispatch) => {
  const filters = 'status=alive';
  const url = `${API_URL}/character/?${filters}`

  axios.get(url)
       .then((res: AxiosResponse) => {
         dispatch({
           type: GET_CHARACTERS,
           characters: res.data.results
         });
         dispatch(loaded());
       })
      .catch((err: AxiosError) => {
        dispatch(failure(err.message));
      })
}

export const newCharacter = (character: CustomCharacter) => (dispatch: Dispatch) => {
  dispatch({
    type: NEW_CHARACTER,
    character
  })
}
export const removeCharacter = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_CHARACTER,
    id
  })
}

const request = () => ({
  type: REQUEST
})

const loaded = () => ({
  type: LOADED
})
const failure = (message: string) => ({
  type: FAILURE,
  message
})

