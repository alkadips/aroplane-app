import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import ConfirmationModal from "./Component/Modal";

function UploadDoc() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleConfirm = () => {
        if (isChecked) {
            console.log('Agreed to terms and conditions');
            closeModal();
        }
    };
    return (
        <div>
            <div className='flex gap-5 justify-items-center items-center border-b-2 border-gray-300 p-3'>
                <Link to='/'><FaArrowLeft /></Link>
                <div className='font-bold'>Add Your Credentials</div>
            </div>
            <div className="pl-3 mt-5 font-bold">Identify Credential Issuer</div>
            <div onClick={openModal} className='cursor-pointer mt-5 border border-black rounded-xl w-[95%] m-auto text-center'>
                <div className="flex justify-items-center items-center p-5 justify-around shadow-xl">
                    <div className="font-bold">Continue with DigiLocker</div>
                    <div>
                        <img className="m-auto  h-5" src='https://clipart-library.com/2023/2018-frequent-flyer.gif' />
                    </div>
                </div>
            </div>
            <div onClick={openModal} className='cursor-pointer mt-5 border border-black rounded-xl w-[95%] m-auto text-center shadow-xl'>
                <div className="flex justify-items-center items-center p-5 justify-around">
                    <div className="font-bold">Continue with DigiLocker</div>
                    <div>
                        <img className="  m-auto  h-5" src='https://clipart-library.com/2023/2018-frequent-flyer.gif' />
                    </div>
                </div>
            </div>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={handleConfirm}
                isChecked={isChecked}
                onCheckboxChange={handleCheckboxChange}
            />

        </div>
    )
}
export default UploadDoc