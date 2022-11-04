import React, {useContext} from 'react';
import tableContext from "../../store/table-context";
import HeaderButton from "./HeaderButton";

const Header = () => {
  const tableCtx = useContext(tableContext);

  const buttons = tableCtx.tableColumnStructure.map(e => {
    return <HeaderButton key={e.col_name} button={e}/>
  })

  return (

    <div>
      {/*add button for check hide/show column*/}
      {buttons}
    </div>
  );
};

export default Header;