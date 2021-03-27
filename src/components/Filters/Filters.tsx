import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import classNames from "classnames";
import { useHistory } from 'react-router-dom';
import { ROUTES } from "../../constants/routes";
import {removeDuplicateParams, updateUrlParameter} from "../utils/utils";

export const Filters: React.FC = () => {
  const history = useHistory()
  const params = new URLSearchParams(history.location.search);

  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);

  const handleClick = (e: any, type: string) => {
    let str = params.toString();
    const value = e.target.innerText.toLowerCase();
    let newStr = updateUrlParameter(str, type, value);
    str = removeDuplicateParams(newStr);

    console.log(params.toString())
    if(!str.includes(type)) {
      history.push({
        pathname: ROUTES.HOME,
        search: `${type}=${value}&${str}`
      })
    } else {
      history.push({
        pathname: ROUTES.HOME,
        search: str
      })
    }
  }

  const toggleGender = () => {
    setIsGenderOpen(!isGenderOpen);
  }
  const toggleStatus = () => {
    setIsStatusOpen(!isStatusOpen);
  }

  return (
    <>
      <div className="d-flex">
        <Dropdown isOpen={isGenderOpen} toggle={toggleGender} className="mr-2">
          <DropdownToggle caret className="bg-transparent">
            Gender filters
          </DropdownToggle>
          <DropdownMenu>
            <Filter name="Male" value={params.get('gender')!} type="gender" onClick={(e: any) => handleClick(e, 'gender')}/>
            <Filter name="Female" value={params.get('gender')!} type="gender" onClick={(e: any) => handleClick(e, 'gender')}/>
            <DropdownItem divider />
            <DropdownItem className=""
                          onClick={() => {
                            if(params.has('gender')) {
                              params.delete('gender');
                              history.push(`${ROUTES.HOME}?${params.toString()}`)
                            }
                          }}
            >
              Reset
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={isStatusOpen} toggle={toggleStatus} className="mr-2">
          <DropdownToggle caret className="bg-transparent">
            Status filters
          </DropdownToggle>
          <DropdownMenu>
            <Filter name="Alive"
                    value={params.get('status')!}
                    type="status"
                    onClick={(e: any) => handleClick(e, 'status')}
            />
            <Filter name="Dead"
                    value={params.get('status')!}
                    type="status"
                    onClick={(e: any) => handleClick(e, 'status')}
            />
            <Filter name="Unknown"
                    value={params.get('status')!}
                    type="status"
                    onClick={(e: any) => handleClick(e, 'status')}
            />
            <DropdownItem divider />
            <DropdownItem className=""
                          onClick={() => {
                            if(params.has('status')) {
                              params.delete('status');
                              history.push(`${ROUTES.HOME}?${params.toString()}`)
                            }
                          }}
            >
              Reset
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  )
}

const Filter = ({ name, value, type, ...props }: { name: string, value: string, type: string, [x:string]: any }) => {
  if(type === 'gender') {
    return (
        <DropdownItem {...props}
                      className={classNames({
                        "font-weight-bold": value === name.toLowerCase()
                      })}
        >
          { name }
        </DropdownItem>
    )
  } else if(type === 'status') {
    return (
        <DropdownItem {...props}
                      className={classNames({
                        "font-weight-bold": value === name.toLowerCase()
                      })}
        >
          { name }
        </DropdownItem>
    )
  }

  return null;
}
