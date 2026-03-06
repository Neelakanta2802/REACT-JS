import { useNavigate } from "react-router-dom";
function Dashboard(){
    const nav = useNavigate();
    function handleMen(){
        nav("/dashboard");
    }
    return (
        <>
        <p>Welcome to Zerodha</p>
        <button onClick={handleMen}>Go to Dashboard</button>
        </>
    );
}
export default Dashboard;