import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Bookmarks from './components/Bookmarks';

import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';


class App extends Component {

  state = {jobsList: [],  bookmarkedJobs: []}

  componentDidMount = () => {
    this.getJobsList()
  }

  getJobsList = async () => {
    const url = 'https://testapi.getlokalapp.com/common/jobs?page=1'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(res => ({
      jobId: res.id,
      companyName: res?.company_name || 'Compnay Name not available',
      jobTitle: res?.title || 'Title not available',
      jobLocation: res.primary_details?.Place || 'Location not available',
      jobSalary: res.primary_details?.Salary || 'Salary not available',
      phoneNumber: res?.whatsapp_no || 'Contact not available'
    }))
    this.setState({jobsList: updatedData})
  }

  toggleBookmark = (jobId) => {
    const { jobsList, bookmarkedJobs } = this.state;
    const isBookmarked = bookmarkedJobs.some(job => job.jobId === jobId);

    if (isBookmarked) {
      const updatedBookmarks = bookmarkedJobs.filter(job => job.jobId !== jobId);
      this.setState({ bookmarkedJobs: updatedBookmarks });
    } else {   
      const jobToBookmark = jobsList.find(job => job.jobId === jobId);
      this.setState({ bookmarkedJobs: [...bookmarkedJobs, jobToBookmark] });
    }
  }

  render() {
    const {jobsList, bookmarkedJobs} = this.state;
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route 
            exact 
            path="/jobs" 
            element={<Jobs jobsList={jobsList} bookmarkedJobs={bookmarkedJobs} toggleBookmark={this.toggleBookmark}/>} 
          />
          <Route 
            exact 
            path="/bookmarks" 
            element={<Bookmarks bookmarkedJobs={bookmarkedJobs} />} 
          />
        </Routes>
      </>
    );
  }
}

export default App;
