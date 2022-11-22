import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import tableContext from "../../store/table-context";
import HeaderButton from "./HeaderButton";
import './Header.css'

const Header = () => {
  const tableCtx = useContext(tableContext);
  const buttons = tableCtx[tableCtx.currentPage].tableColumnStructure.map(e => {
    return <HeaderButton key={e.col_name} button={e}/>
  })

  return (
    <header>
      <div className='nav'>
        <NavLink to='/orders-page'> Orders page</NavLink>
        <NavLink to='/schedules-page'> Schedules page</NavLink>
        <NavLink to='/screens-page'> Screens page</NavLink>
        <NavLink to='/shows-page'> Shows page</NavLink>
      </div>
      <div>
        {/*add button for check hide/show column*/}
        {buttons}
      </div>
    </header>
  );
};

export default Header;