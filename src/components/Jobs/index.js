import { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { GrOrganization } from "react-icons/gr";

class Jobs extends Component {
    
    render() {
        const {jobsList, bookmarkedJobs, toggleBookmark} = this.props;
        
        return (
            <div className='job-bg-container'>
                <h1 className='heading'>Jobs</h1>
                <ul className='jobs-list'>
                    {jobsList.map(each => (
                        <li key={each.jobId} className='jobs-list-item'>
                            <div>
                                <GrOrganization />
                            <p className='para-1'>{each.companyName}</p>
                            </div>
                           
                            <p className='para-2'>{each.jobTitle}</p>
                            <hr className='hr-line' />
                            <div>
                            <div>
                                <FaLocationDot />
                            <p className='para-3'>{each.jobLocation}</p>
                            </div>
                            <div>
                                <RiMoneyRupeeCircleFill />
                            <p className='para-4'>{each.jobSalary}</p>
                            </div>
                            <div>
                                <IoCall />
                            <p className='para-5'>{each.phoneNumber}</p>
                            </div>
                            </div>
                           
                            
                            
                            <button onClick={() => toggleBookmark(each.jobId)} className='star-button'>
                                {bookmarkedJobs.some(job => job.jobId === each.jobId) ? <FaStar className='icon' /> : <FaRegStar className='icon' />}
                            </button>
                        </li>
                    ))}
                </ul>  
                <Link to="/"><button className='close-button'><IoClose className='close-icon' /></button></Link>
            </div>
        )
    }
}

export default Jobs;


 