import { FaBahai } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Homepage = () => {

    return (
        <>
            <Header />
            <div className=" border-[20px] border-orange-400  m-auto w-[95%] mt-5 rounded-xl  ">
                <div className="flex justify-between">
                    <div>
                        <div>  <div className="flex justify-center pt-20">
                            <img className="h-20" src='https://clipart-library.com/2023/2018-frequent-flyer.gif' />
                        </div>
                            <div className="mt-28 pl-20 font-bold">No Upcoming Travel</div>
                        </div>
                    </div>
                    <div >
                        <div className="font-bold text-xs mt-2 flex justify-end pr-5">DATE</div>
                        <div className="text-gray-400 mt-3 flex justify-end pr-5">Seat#</div>
                        <div className="flex justify-end pr-5 font-bold">-</div>
                        <div className="text-gray-400 flex justify-end pr-5">Flight#</div>
                        <div className="flex justify-end pr-5 font-bold">-</div>
                        <div className="text-gray-400 flex justify-end pr-5">PNR#</div>
                        <div className="flex justify-end pr-5 font-bold">-</div>
                        <div className="text-gray-400 flex justify-end pr-5">Seq#</div>
                        <div className="flex justify-end flex justify-end pr-5 font-bold">-</div>
                    </div>
                </div>
                <div className="border-b-2 border-dashed border-gray-400 p-2"></div>
                <div className="flex justify-between p-4 pb-20">
                    <div>
                        <div className="font-bold">Arrival</div>
                        <div className="flex justify-center font-bold">-</div>
                    </div>
                    <div>
                        <img src='gif.gif' className="h-16" />
                    </div>
                    <div>
                        <div className="font-bold">Deparature</div>
                        <div className="flex justify-center font-bold">-</div>
                    </div>
                </div>
            </div>
            <div className="flex border rounded-full border-gray-400 pl-3 p-5 mt-5 justify-between">
                <Link to="/credentials" ><FaBasketballBall /></Link>
                <div><FaBasketballBall /></div>
                <div><FaBasketballBall /></div>
            </div>
            <Carousel autoPlay={true} className="p-5">
                <div>
                    <img className="h-[170px] rounded-xl" src="slider1.png" />
                </div>
                <div>
                    <img className="h-[170px] rounded-xl" src="slider2.png" />
                </div>
                <div>
                    <img src="slider3.png" className="rounded-xl h-[170px]" />
                </div>
            </Carousel>

            <Footer />

        </>
    )
}
export default Homepage;