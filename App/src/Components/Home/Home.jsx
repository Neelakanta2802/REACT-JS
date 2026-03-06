import { useNavigate } from "react-router-dom";
function Home(){
    const nav = useNavigate();
    function handleHome(){
        nav("/");
    }
    return (
        <>
        <button onClick={handleHome}>Home</button>
        </>
    );
}
export default Home;