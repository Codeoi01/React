import Navbar from "./Componentas/Navbar.jsx";
import Footer from "./Componentas/footer.jsx";
import UserGreating from './Componentas/UserGreating.jsx'
import List from "./Componentas/List.jsx";

function App() {

  return (
    <>
    <Navbar/>
    <UserGreating isLoggedIn={true} />
    <List/> 
    <Footer/>
    </>
  );
}

export default App
