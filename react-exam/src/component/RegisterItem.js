import React from 'react';

function RegisterItem(props) {
  let { item, handleEdit, handleDelete } = props;
  return (
    <div className="divTableBody">
      <div className="divTableRow">
        {/* <div className="divTableCell"><input type="checkbox" checked={item.select} onChange={selectDelete}/></div> */}
        <div className="divTableCell mx-5">
          {item.title} {item.firstName} {item.lastName}
        </div>
        <div className="divTableCell mx-3">{item.gender}</div>
        <div className="divTableCell  mx-3">
          {item.dialcode} {item.phoneNumber}
        </div>
        <div className="divTableCell  mx-5">{item.nationality}</div>
        <div className="divTableCell">
          <span onClick={handleEdit}>
            <i className="fas fa-edit mx-2 text-warning"></i>
          </span>
          <span onClick={handleDelete} className="mx-3">
            <i className="fas fa-trash-alt mx-2 text-danger"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegisterItem;
