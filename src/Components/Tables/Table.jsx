import React from "react";

import "./Table.css";

const Table = (props) => {
  return (
    <div>
      <div className="tableWrapper">
        <table>
          {props.headData && props.renderHead ? (
            <thead>
              <tr>
                {props.headData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </tr>
            </thead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {props.bodyData.map((item, index) =>
                props.renderBody(item, index)
              )}
            </tbody>
          ) : null}
        </table>
      </div>
    </div>
  );
};

export default Table;
