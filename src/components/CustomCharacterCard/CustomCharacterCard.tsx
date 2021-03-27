import React from "react";
import { useDispatch } from "react-redux";
import { removeCharacter } from "../../state/characters/actions";

export const CustomCharacterCard: React.FC<CustomCharacter> =
    ({ name, email, image, gender, id}) => {
  const dispatch = useDispatch();

  const onCharacterRemove = () => {
    dispatch(removeCharacter(id!))
  }

  return (
      <div className="character-card cursor-auto">
        <div className="character-card__img">
          <img src={ image }/>
        </div>
        <div className="character-card__wrapper">
          <div className="character-card__title">
            Name: <span>{ name }</span>
          </div>
          <div className="character-card__info">
            Email: <span>{ email }</span>
          </div>
          <div className="character-card__info">
            Gender: <span>{ gender }</span>
          </div>
        </div>
        <button type="button"
                className="close character-card__remove"
                aria-label="Close"
                onClick={onCharacterRemove}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  )
}
