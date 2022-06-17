import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import '../component/Navbar.css'
function Navbar() {
    const countCadidate = useSelector((state) => state.User.strength_of_candidate)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <h5>Candidate Registrations Portal</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id='Navbar-Button-Div'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul > */}
                            {/* <li className='nav-item navLink mx-5'> */}
                                <button className="btn btn-outline-success mx-2" type="">
                                    <Link className='nav-link' to='/'>Register Candidate</Link>
                                </button>
                            {/* </li> */}

                            {/* <li className='nav-item mx-5'> */}
                                <button className="btn btn-outline-success active mx-2" type="">
                                    <Link className='nav-link' to='/list'>{countCadidate} Candidate list</Link>
                                </button>
                            {/* </li> */}
                        {/* </ul> */}
                    </div>
                </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar