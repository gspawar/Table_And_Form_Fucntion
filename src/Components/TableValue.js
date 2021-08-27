import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const TableValue = (props) => {
    return (
        <div>

            <table>

                        <td>{props.newUser.fname}</td>
                        <br/>
                        <td>{props.newUser.mobile}</td>
                        <br/>
                        <td>{props.newUser.age}</td>

            </table>

        </div>
    );



}
export default TableValue;