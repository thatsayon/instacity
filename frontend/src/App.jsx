import React, { useEffect, useState } from "react";

import SideNavBar from "./Components/SideNavBar";
import { Outlet, useNavigation } from "react-router-dom";
import StartLoad from "./Components/LoadingReels/StartLoad";
import SystemLoading from "./Components/LoadingReels/SystemLoading";
import Create from "./Components/Create";
import Register from "./Components/Register";
import More from "./Components/More";

function App() {
  const navigation = useNavigation();
  const [StartonLoad, setStartOnLoad] = useState(true);
  const [isCreate, setCreate] = useState(false);
  const [clickMore , setClickMore] = useState(false)

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
          <header className="lg:w-[20vw] w-fit sidebar-header">
            <SideNavBar setCreate={setCreate} clickMore={clickMore}  setClickMore={setClickMore} />
          </header>
          <main className="w-full">
            {navigation.state == "idle" ? <Outlet /> : <SystemLoading />}
          </main>
        </div>
      )}





      {
        isCreate && <Create setCreate={setCreate} />
      }
      {
        clickMore && <More  setClickMore={setClickMore} />
      }
    </>
  );
}

export default App;
