import { Routes, Route } from "react-router-dom";
import { UserEffilateDashboardComponent } from "./userAffilateDashboard/rightPanel/UserEffilateDashboardComponent";
import { UserEffilateDashboard } from "./userAffilateDashboard/UserEffilateDashboard";

function App() {
  return (
    <div className="overflow-hidden max-w-[2000px] m-auto">
      <Routes>
         <Route path="/" element={<div>Hey There !!!!</div>} />
        <Route element={<UserEffilateDashboard />}>
          <Route
            path="user-dashboard"
            element={<UserEffilateDashboardComponent />}
          />
          {/* <Route path="user-dashboard/payment" element={<UserEffilateDashboardPayment />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
