import { FaBahai, FaBasketballBall } from "react-icons/fa"

const Header = () => {
    return(
        <div className="flex justify-between justify-items-center items-center p-3 border-b-2 border-gray-300 sticky top-0 bg-white shadow-md z-10 p-4">
        <div><FaBasketballBall />
        </div>
        <div className="font-bold text-xl">Welcome to Digi Yatra</div>
        <div><FaBahai /></div>
    </div>

    )
}
export default Header