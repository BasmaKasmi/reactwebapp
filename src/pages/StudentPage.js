import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Student from '../components/student/Student';

const StudentPage = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Student />
    </div>
  )
}

export default StudentPage;