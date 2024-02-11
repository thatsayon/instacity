import React, { useEffect, useState } from "react";
import SideNavBar from "./Components/SideNavBar";
import { Outlet, useNavigation } from "react-router-dom";
import StartLoad from "./Components/LoadingReels/StartLoad";
import Create from "./Components/Create";
import More from "./Components/More";
import Mode from "./Components/Modals/Mode";
import SwitchAccount from "./Components/Modals/SwitchAccount";
import './CustomStyles/App.css';
import useShareobj from "./CustomHooks/useShareobj";
import ReportProblem from "./Components/Modals/ReportProblem";
import Private from "./Components/Private";
import LoadingOne from "./Components/LoadingReels/LoadingOne";
import LogoutModal from "./Components/Modals/LogoutModal";

function App() {
  const navigation = useNavigation();
  const [StartonLoad, setStartOnLoad] = useState(true);
  const [swithaccount, setSwitchaccount] = useState(false)
  const [isCreate, setCreate] = useState(false);
  const [clickMore, setClickMore] = useState(false);
  const [Dark, setDark] = useState(false);
  const [Report, setReport] = useState(false);
  const [checked, setchecked] = useState(false);


  const { LogoutLoading } = useShareobj();


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
        <div className="flex gap-2 min-h-screen">
          <header style={{ maxHeight: "calc(5vh + 12rem)" }} className="lg:w-[20vw]  overflow-y-auto w-fit sidebar-header dark:border-[#262626]">
            <SideNavBar setCreate={setCreate} clickMore={clickMore} setClickMore={setClickMore} />
          </header>
          <main style={{ maxHeight: "calc(0vh + 15rem)" }} className="flex-1 overflow-y-scroll min-h-screen">
            {navigation.state == "idle" ? <Private> <Outlet /> </Private> : <LoadingOne />}

          </main>
        </div>
      )}







      {
        isCreate && <Create setCreate={setCreate} />
      }
      {
        clickMore && <More setClickMore={setClickMore} setDark={setDark} setSwitchaccount={setSwitchaccount} setReport={setReport} />
      }
      {
        Dark && <Mode setDark={setDark} setClickMore={setClickMore} checked={checked} setchecked={setchecked} />
      }
      {
        swithaccount && <SwitchAccount setSwitchaccount={setSwitchaccount} swithaccount={swithaccount} />
      }
      {
        Report && <ReportProblem setReport={setReport} setClickMore={setClickMore} />
      }
      {
        LogoutLoading && <LogoutModal />
      }
    </>
  );
}

export default App;
