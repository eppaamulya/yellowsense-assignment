import './index.css'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'

const Bookmarks = ({bookmarkedJobs}) => {
    return (
        <div className='bookmark-bg-container'>
            <h1 className='heading'>Bookmarks</h1>
            <ul className='bookmark-list'>
                {bookmarkedJobs.map(each => (
                    <li key={each.jobId} className='bookmark-list-item'>
                        <p>{each.companyName}</p>
                        <p>{each.jobTitle}</p>
                        <p>{each.jobLocation}</p>
                        <p>{each.jobSalary}</p>
                        <p>{each.phoneNumber}</p>
                    </li>
                ))}
            </ul>
            <Link to="/"><button className='close-button'><IoClose className='close-icon' /></button></Link>
        </div>
    )
}

export default Bookmarks