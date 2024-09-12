import './index.css'
import { Link } from 'react-router-dom'

import { IoClose } from 'react-icons/io5'
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { GrOrganization } from "react-icons/gr";


const Bookmarks = ({bookmarkedJobs}) => {
    return (
        <div className='job-bg-container'>
            <h1 className='heading'>Bookmarks</h1>
            <ul className='jobs-list'>
                {bookmarkedJobs.map(each => (
                    <li key={each.jobId} className='jobs-list-item'>
                        <div className='cont-1'>
                            <GrOrganization className='cont-icon' />
                            <p className='para-1'>{each.companyName}</p>
                        </div>
                        <p className='para-2'>{each.jobTitle}</p>
                        <hr className='hr-line' />
                        <div className="container-1">
                            <div className="cont-1">
                                <FaLocationDot className='cont-icon' />
                                <p className='para-3'>{each.jobLocation}</p>
                            </div>
                            <div className="cont-1">
                                <RiMoneyRupeeCircleFill className='cont-icon' />
                                <p className='para-4'>{each.jobSalary}</p>
                            </div>
                            <div className="cont-1">
                            <IoCall className='cont-icon' />
                            <p className='para-5'>{each.phoneNumber}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/"><button className='close-button'><IoClose className='close-icon' /></button></Link>
        </div>
    )
}

export default Bookmarks