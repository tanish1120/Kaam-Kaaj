import { Link,useNavigate } from "react-router-dom"

export const Appbar = () =>{

    const navigate = useNavigate();

    return(
        <div className="flex border-b justify-between py-4 px-10">
            
            <div className="flex flex-col justify-center font-bold text-2xl cursor-pointer">
                <Link to='/todos'>
                    Kaam-Kaaj
                </Link>
            </div>
            
            <div>
                <Link to={`/publish`}>
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New Todo</button>
                </Link>
                <button onClick={()=>{
                    localStorage.clear();
                    navigate('/')
                }} type="button" className="text-white   focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700">Logout</button>
            </div>
        </div>
    )
}