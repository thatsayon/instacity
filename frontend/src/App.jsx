import React, { useEffect, useState } from "react";

import SideNavBar from "./Components/SideNavBar";
import { Outlet, useNavigation } from "react-router-dom";
import StartLoad from "./Components/LoadingReels/StartLoad";
import SystemLoading from "./Components/LoadingReels/SystemLoading";
import Create from "./Components/Create";
import Register from "./Components/Register";

function App() {
  const navigation = useNavigation();
  const [StartonLoad, setStartOnLoad] = useState(true);
  const [isCreate, setCreate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartOnLoad(false);
    }, 1500);
  }, []);

  return (
    <>
      {StartonLoad ? (
        <StartLoad />
      ) : (
        <div className="flex gap-2">
          <header className="w-[20vw] sidebar-header">
            <SideNavBar setCreate={setCreate} />
          </header>
          <main className="w-full">
            {navigation.state == "idle" ? <Outlet /> : <SystemLoading />}
          </main>
        </div>
      )}





      {
        isCreate && <Create setCreate={setCreate} />
      }
    </>
  );
}

export default App;
