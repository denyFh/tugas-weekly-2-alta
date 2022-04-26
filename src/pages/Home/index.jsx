import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

import logo from '../../logo.svg';
import '../../App.css';

import materies from '../../materies';

function Home() {
    return (
        // <>
        //     <Sidebar />
            <div className="App w-full pt-24 md:pt-0 md:pl-64">
                <div className="flex p-6">
                    <h5>Please Select Materi to Start..</h5>
                </div>
            </div>
        // </>
    );
}

export default Home;
