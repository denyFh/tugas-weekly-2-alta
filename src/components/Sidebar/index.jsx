import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import materies from '../../materies';

export default function Sidebar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    let activeClassName = "bg-slate-300 flex items-center py-4 px-4 h-8 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 cursor-pointer";
    let sidebarClassName = "flex items-center py-4 px-4 h-8 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 cursor-pointer";

    return (
        <div className="fixed flex flex-col flex-shrink-0 w-full px-4 py-3 text-gray-700 bg-white shadow-xl md:w-64 h-fit md:h-full">
            <div className="flex flex-row flex-wrap items-center justify-between flex-shrink-0 px-4 py-4">
                    <NavLink
                        to="/" className="flex flex-col items-center">
                        <span className="self-center hidden text-xl font-semibold md:block whitespace-nowrap">Weekly Task 2</span>
                        <span className="text-xl font-semibold whitespace-nowrap">ReactJS FE Engineer A</span>
                    </NavLink>
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                    {
                        !isNavExpanded
                        ?
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                        :
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    }
                </button>
            </div>
            <ul className={`md:space-y-2 md:relative md:block ${isNavExpanded ? 'block' : 'hidden'}`} id="#sidenavExample">
                {
                    materies.map((course, courseIdx) => (
                        <li className="relative" id={courseIdx} key={courseIdx}>
                            <NavLink 
                                to={`/materi/${course.id}`}
                                className={({ isActive }) => 
                                    isActive ? activeClassName : sidebarClassName
                                }
                                onClick={() => {
                                    setIsNavExpanded(!isNavExpanded);
                                }}
                            >{course.title}</NavLink>
                        </li>
                    ))
                }
                <hr />
                <li className="relative">
                    <p className="text-base text-gray-500">&copy; Deny Firdhaus H.P 2022
                        <br />
                        <span>All rights reserved.</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}
