
import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import CompanyIDCard from './Component/CompanyIDCard';
import { useParams } from 'react-router-dom';

function Credentials() {
    const  params  = useParams();
    const { state } = useLocation();
    console.log("Image in credentials",params,state?.image);
    return (
        <div>
            <div className='flex gap-5 justify-items-center items-center border-b-2 border-gray-300 p-3'>
                <Link to='/'><FaArrowLeft /></Link>
                <div className='font-bold'>Wallet</div>
            </div>
            <div className='px-10'>
                <div className='font-bold text-center bg-blue-100 p-2  mt-5 rounded-xl'>Identify Credential</div>
            </div>
            {state?.image?<div className='mt-5 w-[95%] m-auto text-center'>
            <CompanyIDCard
                name="John Doe"
                status="verified"
                photo="https://via.placeholder.com/100"
                company="Identity Credential"
                type="Aadhar"
            />
            </div>:<>
            <div className='font-semibold mt-5 text-center'>Start adding your credentials now to save time at the Airport ,with our app is easy and secure.</div>
            <div className='mt-5 border border-black rounded-xl w-[95%] m-auto text-center'>
                <img className="h-20  m-auto mt-20" src='https://clipart-library.com/2023/2018-frequent-flyer.gif' />
                <div className='mt-8'>No Authenticated IDs yet</div>
                <div className='pb-8 mt-3'>Ids once authenticated will show here</div>
            </div>
            <div className="fixed bottom-4 right-4">
                <button className="bg-black hover:bg-blue-700 text-white font-bold p-5 rounded-full shadow-lg">
                    <Link to="/uploadDoc">
                        <FaPlus />
                    </Link>
                </button>
            </div>
            </>}
          
        </div>
    );
}

export default Credentials;