import React from "react";

const TableMin = (props) => {
  return (
    <div>
      <table>
        {props.bodyData && props.renderBody ? (
          <tr>
            <td> {props.email}</td>
            <td>{props.phone}</td>
            <td> {props.location}</td>
          </tr>
        ) : null}
      </table>
    </div>
  );
};

export default TableMin;
