import React from "react";
import { MainLayout } from "../../layouts";
import { CustomCharacterCard, NewCharacterForm } from "../../components";
import { Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

export const NewCharacter: React.FC = () => {
  const { customCharacters } = useSelector(({ characters }: AppState) =>  characters);

  return (
      <MainLayout>
        <NewCharacterForm />
        <div className="mt-5">
          <Row>
            {
              customCharacters.map((el: CustomCharacter, index: React.Key) => (
                  <Col md={4} key={index}>
                    <CustomCharacterCard {...el}/>
                  </Col>
              ))
            }
          </Row>
        </div>
      </MainLayout>
  )
}
