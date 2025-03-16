import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from "../components/Footer"

function Root() {
 return (
   <>
     <div className="h-[80vh] font-funnel ">
       <Header />
       <main>
         <Outlet />
       </main>
       <Footer />
     </div>
   </>
 );
}

export default Root
