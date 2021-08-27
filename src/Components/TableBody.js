import React from "react";
import TableValue from "./TableValue";

const TableBody = (props) => {
    return (
        <div>
            <TableValue newUser = {props.myItem}></TableValue>
        </div>
    );
}

export default TableBody;