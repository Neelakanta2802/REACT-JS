import { useNavigate } from "react-router-dom";
function Dashboard(){
    const nav = useNavigate();
    function handleLogin(){
        nav("/");
    }
    return (
        <>
        <p>Welcome to Zerodha</p>
        <button onClick={handleLogin}>Go to LOGIN</button>
        </>
    );
}
export default Dashboard;