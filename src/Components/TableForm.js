import React from "react";
import TableBody from "./TableBody";
import 'bootstrap/dist/css/bootstrap.min.css';

const TableForm = (props) => {

    const TableHead = () => {
    return(
        <div>
            <table >
                <tbody>
                    <th>FullName..</th>
                    <th>MobileNo..</th>
                    <th>Age..</th>
                </tbody>
            </table>
        </div>
    );
}

    let Data = false;
    if(props.filter === "Filter By" || props.value === ""){
        Data = true;
    }
    if(props.filter === "FullName"){
        let fName = props.array.filter(event => event.fname.toLowerCase().includes(props.value));
        return(
            <div >
                <TableHead> </TableHead>
                {fName.map(item => <TableBody myItem = {item} key = {item.id}/>)}
            </div>
        );
    }
    if(props.filter === "MobileNo"){
        let mobile = props.array.filter(event => event.mobile.toLowerCase().includes(props.value));
        return(
            <div>
                <TableHead> </TableHead>
                {mobile.map(item => <TableBody myItem = {item} key = {item.id}/>)}
            </div>
        );
    }
    if(props.filter === "Age"){
        let age = props.array.filter(event => event.age.toLowerCase().includes(props.value));
        return(
            <div>
                <TableHead> </TableHead>
                {age.map(item => <TableBody myItem = {item} key = {item.id}/>)}
            </div>
        );
    }
    return (
        <div>
            <TableHead> </TableHead>
            {Data && props.array.map(item => <TableBody myItem = {item} key = {item.id}/>)}
        </div>
    );


}

export default TableForm;