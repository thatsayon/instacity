import React, { useEffect, useState } from "react";
import SideNavBar from "./Components/SideNavBar";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import StartLoad from "./Components/LoadingReels/StartLoad";
import Create from "./Components/Create";
import More from "./Components/More";
import Mode from "./Components/Modals/Mode";
import SwitchAccount from "./Components/Modals/SwitchAccount";
import "./CustomStyles/App.css";
import useShareobj from "./CustomHooks/useShareobj";
import ReportProblem from "./Components/Modals/ReportProblem";
import Private from "./Components/Private";
import LoadingOne from "./Components/LoadingReels/LoadingOne";
import LogoutModal from "./Components/Modals/LogoutModal";
import DiscardPost from "./Components/Modals/DiscardPost";
import Search from "./Components/Search";
import Notification from "./Components/Notification";
import { LuHome } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";



function App() {



  const navigation = useNavigation();
  const [StartonLoad, setStartOnLoad] = useState(true);
  const [swithaccount, setSwitchaccount] = useState(false);
  const [isCreate, setCreate] = useState(false);
  const [clickMore, setClickMore] = useState(false);
  const [Dark, setDark] = useState(false);
  const [Report, setReport] = useState(false);
  const [checked, setchecked] = useState(false);
  const [isNotification, setNotification] = useState(false);
  const [isDicardPost, setDiscardPost] = useState(false);
  const [isSearch, setSearch] = useState(false);

  const { LogoutLoading, user, image_url } = useShareobj();

  useEffect(() => {
    setTimeout(() => {
      setStartOnLoad(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const dark = localStorage.getItem("Dark");

    if (dark == "true") {
      document.body.classList.add("dark");
      setchecked(true);
    } else {
      document.body.classList.remove("dark");
      setchecked(false);
    }
  }, [localStorage.getItem("Dark")]);

  return (
    <>
      {StartonLoad ? (
        <StartLoad />
      ) : (
        <div className="flex md:flex-row flex-col gap-2 md:min-h-screen">
          <header
            style={{ maxHeight: "calc(5vh + 12rem)", zIndex: "999999" }}
            className={`${isNotification || isSearch ? "lg:max-w-[20vw]" : "lg:min-w-[20vw] "} dark:bg-black overflow-y-auto sidebar-header md:min-h-[100vh] dark:border-[#262626] bg-white`}
          >
            <SideNavBar
              setCreate={setCreate}
              clickMore={clickMore}
              isCreate={isCreate}
              setClickMore={setClickMore}
              setNotification={setNotification}
              isNotification={isNotification}
              setSearch={setSearch}
              isSearch={isSearch}
            />
          </header>
          <main
            style={{ maxHeight: "calc(0vh + 15rem)" }}
            className="md:flex-1 overflow-y-scroll min-h-screen"
          >
            {navigation.state == "idle" ? (
              <Private>
                <Outlet />

              </Private>
            ) : (
              <LoadingOne />
            )}
          </main>
        </div>



      )}

      {isCreate && (
        <Create setCreate={setCreate} setDiscardPost={setDiscardPost} />
      )}
      {clickMore && (
        <More
          setClickMore={setClickMore}
          setDark={setDark}
          setSwitchaccount={setSwitchaccount}
          setReport={setReport}
        />
      )}
      {Dark && (
        <Mode
          setDark={setDark}
          setClickMore={setClickMore}
          checked={checked}
          setchecked={setchecked}
        />
      )}
      {swithaccount && (
        <SwitchAccount
          setSwitchaccount={setSwitchaccount}
          swithaccount={swithaccount}
        />
      )}
      {Report && (
        <ReportProblem setReport={setReport} setClickMore={setClickMore} />
      )}
      {LogoutLoading && <LogoutModal />}
      {isDicardPost && (
        <DiscardPost setDiscardPost={setDiscardPost} setCreate={setCreate} />
      )}
      {
        // -------Notification---bar----
        isNotification && <Notification isNotification={isNotification} />
      }

      {
        // ------Search--bar-------
        isSearch && <Search isSearch={isSearch} />

      }
    </>
  );
}

export default App;
