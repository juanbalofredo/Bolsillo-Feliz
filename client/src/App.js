import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Route, Routes} from "react-router-dom";
import DetalleProd from "./views/detalleProd/Detail";
import DashUsers from "./components/dashboard/DashUsers";
import Form from "./views/form/Form"
import MercadoP from "./views/cart/Cart"
import SuperMerc from "./views/SuperMerc/SuperMerc"
import About from "./views/about/About"
import Market from "./views/market/Market";
import AutorizacionMercader from "./views/autorizacionMercader/AutorizacionMercader";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import Error from "./views/Error/Error"
import Perfil from "./components/PerfilUser/PerfilUser";

import Navbar from "./components/Navbar/NavBar";
import SeguraSeguirisima from "./views/segurasegurisima";
import { useLocation } from "react-router-dom";
const App =()=>{
    const { pathname } = useLocation();
  const {user, type_account} = useSelector((state) => state.bolsilloPersist);
  return (
    <div>
      {pathname !== "/" && <Navbar></Navbar>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/listasupers" element={<SuperMerc/>} />
        <Route exact path="/products/id/:id" element={<DetalleProd/>} />
        <Route exact path="/market/id/:id" element={<Market/>} />
        <Route exact path="/seguraseguirisima" element={<SeguraSeguirisima/>} />
        <Route exact path="/about" element={<About/>} />
        <Route path="*" element={<Error />} />
        <Route exact path="/form" element={ 
            <ProtectedRoute user={!!user}>
                <Form />
            </ProtectedRoute>}/>
        <Route exact path="/dashuser" element={ 
            <ProtectedRoute user={!!user && type_account === "3"}>
                <DashUsers/>
            </ProtectedRoute>}/>
        <Route exact path="/mp" element={ 
            <ProtectedRoute user={!!user}>
                <MercadoP/>
            </ProtectedRoute>}/>    
        <Route exact path="/autorizacion" element={ 
            <ProtectedRoute user={!!user}>
                <AutorizacionMercader/>
            </ProtectedRoute>}/>
        <Route exact path="/perfil" element={ 
            <ProtectedRoute user={!!user}>
                <Perfil/>
            </ProtectedRoute>}/>
      </Routes>
    </div>
  );
}
export default App;
