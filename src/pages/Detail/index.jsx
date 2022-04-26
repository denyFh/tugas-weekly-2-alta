import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import materies from "../../materies";

const Detail = () => {

    const { materiId } = useParams();
    const navigate = useNavigate();
    
    const currentMateri = materies.find(materi => materi.id === materiId);
    const [materi, setMateri] = useState(currentMateri);

    return (
        <>
        {/* <Sidebar /> */}

        <div className="bg-white p-6 pt-24 md:pt-6 rounded-lg shadow-lg w-full md:ml-64 px-8">
            <div className="flex flex-row-reverse justify-between pt-4 md:pt-0">
                <h5>Home / Materi / {materi?.title}</h5>
                <button onClick={() => navigate('/')} className="bg-red-500 text-ellipsis rounded px-3 py-1 text-white hover:bg-red-700">Back To Home</button>
            </div>
            <h2 className="text-2xl font-bold my-2 text-gray-800">{materi?.title}</h2>
            {
                materi?.summary.map(({ point, description }, idx) =>
                    <Fragment key={idx}>
                        <h4 className="text-xl font-bold mb-2 text-gray-800">{point}</h4>
                        <p className="text-gray-700 mb-3">{description}</p>
                    </Fragment>
                )
            }
            <h4 className="text-xl font-bold mb-3">
                Link Tugas:
                {
                    materi?.links.map((link, idx) => (
                        <a href={link} rel="noreferrer" target="_blank" className="text-indigo-400 hover:text-indigo-600" key={idx}> Tugas {materi?.title} v{idx + 1}</a>
                    ))
                }
            </h4>
            <h3 className="text-xl font-bold mb-3">Screenshot Tugas</h3>
            {
                materi?.screenshots.map((img, idx) => (
                    <img src={img} alt={materi?.title} key={idx} className="mb-3" />
                ))
            }
        </div>
        </>
    );
}

export default Detail;