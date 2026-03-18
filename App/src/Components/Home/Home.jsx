import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Home() {
    const navigation = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
            if (!token) {
                navigation("/login")
            }
            },[]);

     const handleLogout = ()=>  {
        localStorage.removeItem("token");
         navigation("/login")


     }





return (
    <>
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>


    </>
);
}
export default Home;