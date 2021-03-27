import {
  CLEAR_PROFILE,
  FAILURE,
  GET_CHARACTER,
  GET_CHARACTERS, LOADED,
  NEW_CHARACTER,
  REMOVE_CHARACTER, REQUEST,
} from "./constants";
import { CharacterInstance, PagesInfoInstance } from "../../constants/character";

const initialState = {
  pagesInfo: PagesInfoInstance,
  characters: [],
  customCharacters: [],
  character: CharacterInstance,
  isLoaded: false,
  isLoading: false,
  isFailure: false,
  message: ''
};

export function characters(state = initialState, action: any) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
        pagesInfo: action.pagesInfo
      }
    case GET_CHARACTER:
      return {
        ...state,
        character: action.character
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        character: CharacterInstance
      }
    case NEW_CHARACTER:
      return {
        ...state,
        customCharacters: [...state.customCharacters, action.character]
      }
    case REMOVE_CHARACTER:
      return {
        ...state,
        customCharacters: state.customCharacters.filter(({ id }) => id !== action.id)
      }
    case REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case LOADED:
      return {
        ...state,
        isLoading: false,
        isLoaded: true
      }
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isFailure: true,
        message: action.message
      }
    default:
      return state;
  }
}
