import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Home() {
    const navigation = useNavigate();

     const handleLogout = ()=>  {
        localStorage.removeItem("token");
         navigation("/login")


     }





return (
    <>
        <div>
            <p>Jai babu</p>
            <button onClick={handleLogout}>Logout</button>
        </div>


    </>
);
}
export default Home;