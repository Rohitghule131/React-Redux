import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCandidates } from '../Action_Reducer/reducers'
import './CadidateRegistration.form.css'

function CadidateRegistration() {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const add = useDispatch(addCandidates())

    const setDefaultEmpty = () => {
        setName("")
        setAddress("")
        setEmail("")
        setGender("")
        setPhone("")
    }
    const submitHandle = () => {

        let detail = {

            'email': email,
            'name': name,
            'address': address,
            'phone': phone,
            'gender': gender,

        }
        add(addCandidates(detail))
        setDefaultEmpty()

    }
    return (
        <div className='form-body'>
            <h5 id='header'>Candidate Registration</h5>
            <div className='container' id='form'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        value={name}
                        aria-describedby="name"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input t
                        type="address"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select id="gender" className="form-select" aria-label="Default select example"
                        onChange={(e) => {
                            setGender(e.target.value)
                        }}
                        placeholder="Select Gender"
                    >
                        <option value="not to say">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="not to say">Not To Say</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Contact Number</label>
                    <input
                        type="number"
                        className="form-control"
                        id="number"
                        value={phone}
                        aria-describedby="number"
                        onChange={(e) => {
                            setPhone(e.target.value)
                            console.log(phone)
                        }}
                    />
                </div>
                <div id='Div-Button'>
                    <button className="btn btn-primary" onClick={() => {
                        submitHandle()
                    }}>Submit</button>

                </div>
            </div>
        </div>

    )
}

export default CadidateRegistration;

