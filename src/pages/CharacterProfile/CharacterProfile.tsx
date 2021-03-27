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
  const { character, isLoaded, isFailure, isLoading, message } = useSelector(({ characters }: AppState) => characters);


  useEffect(() => {
    dispatch(getCharacter(id))
    return () => void dispatch(clearProfile())
  }, [dispatch, id])

  return (
      <MainLayout>
        { isLoading && (<Spinner className="loading-spinner"/>) }
        { isLoaded && (<CharacterCard character={character} isProfilePage={true}/>)}
        { isFailure && (<h6 className="text-danger">{ message }</h6>)}
      </MainLayout>
  )
}
