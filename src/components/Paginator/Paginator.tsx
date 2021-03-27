import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { PagesInfoInstance } from "../../constants/character";
import { ROUTES } from "../../constants/routes";
import {removeDuplicateParams, updateUrlParameter} from "../utils/utils";


export const Paginator: React.FC = () => {
  const { pagesInfo = PagesInfoInstance } = useSelector(({ characters }: AppState) => characters);
  const history = useHistory();

  const handleClick = (url: string) => {
    const params = new URLSearchParams(history.location.search);
    const page = url.split('page=')[1];
    const type = 'page';
    let str = params.toString();
    let newStr = updateUrlParameter(str, type, page);
    str = removeDuplicateParams(newStr);

    if(!str.includes(type)) {
      history.push({
        pathname: ROUTES.HOME,
        search: removeDuplicateParams(`${type}=${page}&${str}`)
      })
      return window.scrollTo(0, 0);
    } else {
      history.push({
        pathname: ROUTES.HOME,
        search: str
      })
      return window.scrollTo(0, 0);
    }
  }

  return (
      <div className="d-flex justify-content-between">
        <Button disabled={!pagesInfo.prev}
                onClick={() => handleClick(pagesInfo.prev)}
        >
          Previous page
        </Button>
        <Button disabled={!pagesInfo.next}
                onClick={() => handleClick(pagesInfo.next)}
        >
          Next page
        </Button>
      </div>
  )
}
