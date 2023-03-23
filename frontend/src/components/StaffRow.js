import React from "react";


function StaffRow( {person} ) {
    return(
        <tr>
            <td> 
                <img src={person.picture.thumbnail} alt="" />
            </td>
            <td> 
                <a className="staff-link" href="mailto:{person.email}">{person.name.first} {person.name.last}</a>
            </td>
            <td className="staff-phone"> {person.phone} </td>
            <td className="staff-city"> {person.location.city} </td>
        </tr>
    );
}

export default StaffRow;