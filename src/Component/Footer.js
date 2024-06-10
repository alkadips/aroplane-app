import { FaBasketballBall } from "react-icons/fa";

const Footer=()=>{
    return(
        <div className="flex p-3 justify-between border-t-2 border-gray-300 sticky bottom-0 bg-white shadow-md z-10 p-4">
        <div>
            <div className="text-center flex justify-center"><FaBasketballBall className="h-10 w-10 text-gray-300"/>
            </div>
            <div className="text-center flex justify-center">Name</div>
        </div>
        <div>
            <div className="text-center flex justify-center"><FaBasketballBall className="h-10 w-10 text-gray-300"/>
            </div>
            <div className="text-center flex justify-center">Name</div>
        </div>    
        <div>
            <div className="text-center flex justify-center ">< FaBasketballBall className="h-10 w-10 text-gray-300"/>
            </div>
            <div className="text-center flex justify-center">Name</div>
        </div>  
        <div>
            <div className="text-center flex justify-center"><FaBasketballBall className="h-10 w-10 text-gray-300"/>
            </div>
            <div className="text-center flex justify-center">Name</div>
        </div>                
        <div>
            <div className="text-center flex justify-center"><FaBasketballBall className="h-10 w-10 text-gray-300"/>
            </div>
            <div className="text-center flex justify-center">Name</div>
        </div>
    </div>
    )
   
}
export default Footer;