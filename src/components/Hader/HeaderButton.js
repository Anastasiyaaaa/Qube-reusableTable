import React, {useContext} from 'react';
import tableContext from "../../store/table-context";

const HeaderButton = (props) => {
  const {button} = props;
  const tableCtx = useContext(tableContext)

  const columnVisibilityHandler = (e) => {
    e.preventDefault();
    //use name - as identifier for column's element
    // tableCtx.visibilityFunction(name);
    tableCtx.hideShowColumnFunction(button.col_name, button.col_visible)
  }

  return (
    <button onClick={columnVisibilityHandler}>
      {button.col_label !== '' ? button.col_label : button.col_name}
      <b>{button.col_visible ? ' Hide' : ' Show'}</b>
    </button>
  );
};

export default HeaderButton;