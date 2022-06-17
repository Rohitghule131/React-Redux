import React from 'react'
import { useSelector } from 'react-redux'
import '../component/RegisterdScreen.css'
import { removeCandidate } from '../Action_Reducer/reducers'
import { useDispatch } from 'react-redux'

function RegisterdScreen() {
    const candidates = useSelector((state) => state.User.candidates)
    const candidate_count = useSelector((state) => state.User.strength_of_candidate)
    const remove = useDispatch(removeCandidate())

    const removeHandler = (email)=>{
        remove(removeCandidate(email))
    }
    if (candidate_count !== 0) {
        var candidatesList = candidates.map(((element) => {
            return (
                <>
                  <tr className='table-row'>
                    <td> 
                        {element.name}
                    </td>
                    <td> 
                        {element.email}
                    </td>
                    <td> 
                        {element.phone}
                    </td>
                    <td> 
                        {element.gender}
                    </td>
                    <td> 
                        {element.address}
                    </td>
                    <td>
                        <button type='button' className='btn btn-danger' onClick={()=>{
                            removeHandler(element.email)
                        }}>
                            Remove
                        </button>
                    </td>
                  </tr>
                </>
            )
        }))
    }

    console.log(candidates.map(element => {
        return (
            element.name
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
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
            {candidatesList}
            </tbody>
            </table>
            </>
            : <p> There is No data available yet </p>}
        </div>
        
    )
}

export default RegisterdScreen;