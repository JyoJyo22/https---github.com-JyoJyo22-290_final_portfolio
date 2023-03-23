import React, { useState } from "react"
import StaffRow from "../components/StaffRow";


function StaffPage() {
    const [results, setResults] = useState([]);
    const fetchResults = () => {
    fetch("https://randomuser.me/api/?results=10")     // this fetches 10 random users, instead of just 1
        .then( (response) => response.json() )
        .then((response) => {
            setResults(response.results);
        })
        .catch(() => {
            alert("The RandomUser API server is currently unavailable")
        }); 
    };

    return(
        <>
            <h2>Our Staff</h2>
            <article>
                <p>
                    Add 10 staff from the RandomUser API via the Express server
                </p>
                <button id="fromServer" onClick={fetchResults} value="add_staff" className="add-staff">Add Staff From Server</button>
                <table className="staff-table">
                    <caption>Staff Members</caption>
                    <thead id="staffTableBody">
                        <tr>
                            <th className="staff-header">Portrait</th>
                            <th className="staff-header">Name/Email</th>
                            <th className="staff-header">Telephone</th>
                            <th className="staff-header">City</th>
                        </tr>
                    </thead>
                    <tbody id="staffTableBody">
                        {results.map((person, index) => <StaffRow person={person} key={index} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffPage;