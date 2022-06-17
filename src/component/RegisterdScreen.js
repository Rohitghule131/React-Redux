import React from 'react'
import { useSelector } from 'react-redux'
import '../component/RegisterdScreen.css'
import { removeCandidate } from '../Action_Reducer/reducers'
import { useDispatch } from 'react-redux'

function RegisterdScreen() {
    const candidates = useSelector((state) => state.User.candidates)
    const candidate_count = useSelector((state) => state.User.strength_of_candidate)
    console.log("in registred", candidates)
    const remove = useDispatch(removeCandidate())
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
                    <td>
                        <button type='button' className='btn btn-danger' onClick={()=>{
                            remove(removeCandidate((element.payload.email)))
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
                    <th>Action</th>
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