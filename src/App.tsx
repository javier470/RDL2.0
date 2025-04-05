import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import RoutesComponent from "./routes/RoutesComponent";
import NavbarComponent from "./components/navbar/Navbar";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";

function App() {
  
  return (
    <AuthProvider>
      <Router>
        <div className="AppContainer-layout">
          <NavbarComponent />
          <div className="MainContent-layout">
            <SideBar />
            <div className="ContentArea-layout">
              <RoutesComponent />
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
