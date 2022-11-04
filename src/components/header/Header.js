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
        <NavLink to='/main-table'> GO to main table</NavLink>
        <NavLink to='/extra-table'> GO to extra table</NavLink>
      </div>
      <div>
        {/*add button for check hide/show column*/}
        {buttons}
      </div>
    </header>
  );
};

export default Header;