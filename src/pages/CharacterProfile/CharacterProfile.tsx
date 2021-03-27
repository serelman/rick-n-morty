import React, {useEffect} from "react";
import { MainLayout } from "../../layouts";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearProfile, getCharacter } from "../../state/characters/actions";
import { CharacterCard } from "../../components";
import { Spinner } from "reactstrap";

export const CharacterProfile: React.FC = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const { character } = useSelector(({ characters }: AppState) => characters);


  useEffect(() => {
    dispatch(getCharacter(id))

    return () => void dispatch(clearProfile())
  }, [])

  return (
      <MainLayout>
        <Spinner className="loading-spinner"/>
        <CharacterCard character={character} isProfilePage={true}/>
      </MainLayout>
  )
}
