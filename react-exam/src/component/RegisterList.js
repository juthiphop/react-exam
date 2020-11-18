import React from 'react';
import RegisterItem from './RegisterItem';

function RegisterList(props) {
  const { items, handleEdit, handleDelete , clearData , selectDelete} = props;
  return (
      <div className="container my-3">
        <div className="blueTable outerTableFooter">
          <div className="tableFootStyle">
          <button className="btn btn-danger font-weight-bold" onClick={clearData}>Delete All</button>
            {/* <div className="links col-md2">
              <a href="#">&laquo;</a>{' '}
              <a className="active" href="#">
                1
              </a>{' '}
              <a href="#">2</a> <a href="#">3</a> <a href="#">4</a>{' '}
              <a href="#">&raquo;</a>
            </div> */}
          </div>
        </div>
         
        <div className="divTable blueTable">
        <div className="divTableHeading">
            <div className="divTableRow">
              {/* <div className="divTableHead"><input type="checkbox"/></div> */}
              <div className="divTableHead">NAME</div>
              <div className="divTableHead">GENDER</div>
              <div className="divTableHead">MOBILE PHONE</div>
              <div className="divTableHead">NATIONALITY</div>
              <div className="divTableHead">box</div>
            </div>
          </div>

      {items.map((item) => {
        return (
          <RegisterItem
            key={item.id}
            item={item}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
            selectDelete={() => selectDelete(item.id)}
          />
        );
      })}
      
      </div>
      </div>

      
  );
}

export default RegisterList;
