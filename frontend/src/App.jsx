import React, { useEffect, useState } from "react";

import SideNavBar from "./Components/SideNavBar";
import { Outlet, useNavigation } from "react-router-dom";
import StartLoad from "./Components/LoadingReels/StartLoad";
import SystemLoading from "./Components/LoadingReels/SystemLoading";
import Create from "./Components/Create";
import More from "./Components/More";
import Mode from "./Components/Modals/Mode";
import SwitchAccount from "./Components/Modals/SwitchAccount";
import Post from "./Components/ShareComponent/Post";

function App() {
  const navigation = useNavigation();
  const [StartonLoad, setStartOnLoad] = useState(true);
  const [swithaccount, setSwitchaccount] = useState(false)
  const [isCreate, setCreate] = useState(false);
  const [clickMore, setClickMore] = useState(false);
  const [Dark, setDark] = useState(false);
  const [checked, setchecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartOnLoad(false);
    }, 1500);
  }, []);








  useEffect(() => {
    const dark = localStorage.getItem('Dark')

    if (dark == "true") {
      document.body.classList.add('dark')
      setchecked(true)
    }
    else {

      document.body.classList.remove('dark')
      setchecked(false)
    }




  }, [localStorage.getItem('Dark')])

  return (
    <>
      {StartonLoad ? (
        <StartLoad />
      ) : (
        <div className="flex gap-2 h-screen">
          <header className="lg:w-[20vw] w-fit sidebar-header dark:border-[#262626]">
            <SideNavBar setCreate={setCreate} clickMore={clickMore} setClickMore={setClickMore} />
          </header>
          <main className="flex-1 overflow-y-scroll">
            {navigation.state == "idle" ? <Outlet /> : <SystemLoading />}

          </main>
        </div>
      )}







      {
        isCreate && <Create setCreate={setCreate} />
      }
      {
        clickMore && <More setClickMore={setClickMore} setDark={setDark} setSwitchaccount={setSwitchaccount} />
      }
      {
        Dark && <Mode setDark={setDark} setClickMore={setClickMore} checked={checked} setchecked={setchecked} />
      }
      {
        swithaccount && <SwitchAccount setSwitchaccount={setSwitchaccount} />
      }
    </>
  );
}

export default App;
