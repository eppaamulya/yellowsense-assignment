import { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    
    render() {
        
        return (
            <div className='home-bg-container'>
                <h1>Welcome, Find Your Jobs Here</h1>
                <div className='home-container'>
                    <Link to="/jobs"><button className='button'>Jobs</button></Link>
                    <Link to="/bookmarks"><button className='button'>Bookmarks</button></Link>
                </div>
               
            </div>
        )
    }
}

export default Home