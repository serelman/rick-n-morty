import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../state/characters/actions";
import { MainLayout } from "../../layouts";
import { CharacterCard, Paginator } from "../../components";
import { Col, Row, Spinner} from "reactstrap";
import { useHistory } from "react-router-dom";

export const Home: React.FC = () => {
  const { isLoaded, isLoading, isFailure, message } = useSelector(({ characters }: AppState) => characters)
  const { characters = [] } = useSelector(({ characters }: AppState) => characters);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    dispatch(getCharacters(params.toString()))
  }, [window.location.search])

  return (
      <MainLayout>
        <Row>
          {
            isLoaded && characters.slice(0, 12).map((character: Character, index: number) => (
                <Col key={`${character.id}${index}`} md="4" sm={6}>
                  <CharacterCard character={character} isProfilePage={false}/>
                </Col>
            ))
          }
        </Row>
        { isLoaded && (
            <Row>
              <Col>
                <Paginator/>
              </Col>
            </Row>
        )}
        { isFailure && (<h6 className="text-dark">{ message }</h6>)}
        { isLoading && (<Spinner className="loading-spinner"/>) }
      </MainLayout>

  )
}
