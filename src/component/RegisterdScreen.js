import React from 'react'
import { useSelector } from 'react-redux'
import '../component/RegisterdScreen.css'

function RegisterdScreen() {
    const candidates = useSelector((state) => state.User.candidates)
    const candidate_count = useSelector((state) => state.User.strength_of_candidate)
    console.log("in registred", candidates)

    if (candidate_count !== 0) {
        var candidatesList = candidates.map(((element) => {
            return (
                <>
                  <tr className='table-row'>
                    <td> 
                        {element.payload.name}
                    </td>
                    <td> 
                        {element.payload.email}
                    </td>
                    <td> 
                        {element.payload.phone}
                    </td>
                    <td> 
                        {element.payload.gender}
                    </td>
                    <td> 
                        {element.payload.address}
                    </td>
                  </tr>
                </>
            )
        }))
    }

    console.log(candidates.map(element => {
        return (
            element.payload.name
        )
    }))
    return (
        <div id='candidate'>
            {candidate_count ? 
            <><h5 id='Table_Heading'>REGISTERED CANDIDATE</h5>
            <table className='table'>
                <thead>
                <tr className="table-row">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
            {candidatesList}
            </tbody>
            </table>
            </>
            : <p> There is No data available yet</p>}
        </div>
        
    )
}

export default RegisterdScreen