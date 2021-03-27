import React from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

interface Interface {
  isProfilePage: boolean,
  character: Character
}

export const CharacterCard: React.FC<Interface> =
 ({ isProfilePage, character }) => {
  const history = useHistory();
  const { gender, species, name, image, status, episode, id } = character;

  const handleClick = () => {
    if(isProfilePage) return;
    history.push(`/character/${id}`);
  }

  const episodes = () => episode.map(el => {
      const items = el.split('/');

      return items[items.length - 1];
    }).join(', ');


  return (
      <div className={
        classNames({
          "cursor-auto": isProfilePage,
          "cursor-pointer": !isProfilePage
        }, 'character-card')
      } onClick={handleClick}>
        <div className="character-card__img">
          <img src={ image }/>
        </div>
        <div className="character-card__wrapper">
          <div className="character-card__title">
            <span>{ name }</span>
          </div>
          <div className={classNames({
            'status--alive': status === 'Alive',
            'status--dead': status === 'Dead',
          }, 'character-card__info')}>
            Status: <span>{ status }</span>
          </div>
          { isProfilePage && (
              <>
                <div className="character-card__info">
                  Gender: <span>{ gender }</span>
                </div>
                <div className="character-card__info">
                  Species: <span>{ species }</span>
                </div>
                <div className="character-card__info episodes--list">
                  Episodes: <span>{ episodes() }</span>
                </div>
              </>
          )}
        </div>
      </div>
  )
}
