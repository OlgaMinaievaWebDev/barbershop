import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

function Root() {
 return (
  <>
   <Footer />
   <main>
    <Outlet/>
   </main>
  </>
 )
}

export default Root
