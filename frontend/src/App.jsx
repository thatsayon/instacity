import React, { useEffect, useState } from "react";
import SideNavBar from "./Components/SideNavBar";
import { Outlet, useNavigation } from "react-router-dom";
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

  const { LogoutLoading } = useShareobj();

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
        <div className="flex gap-2 min-h-screen">
          <header
            style={{ maxHeight: "calc(5vh + 12rem)" , zIndex : '999999' }}
            className={`${
              isNotification ? "lg:max-w-[20vw] " : "lg:min-w-[20vw]  "
            }   overflow-y-auto w-fit sidebar-header dark:border-[#262626] bg-white`}
          >
            <SideNavBar
              setCreate={setCreate}
              clickMore={clickMore}
              setClickMore={setClickMore}
              setNotification={setNotification}
              isNotification={isNotification}
            />
          </header>
          <main
            style={{ maxHeight: "calc(0vh + 15rem)" }}
            className="flex-1 overflow-y-scroll min-h-screen"
          >
            {navigation.state == "idle" ? (
              <Private>
                {" "}
                <Outlet />{" "}
              </Private>
            ) : (
              <LoadingOne />
            )}
          </main>
        </div>
      )}

      {isCreate && <Create setCreate={setCreate} />}
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
      {
        <div
          id="NotificationPopup"
          className={`fixed min-h-screen right-0 top-0  bottom-0 justify-center items-center flex  max-w-md  transition-all duration-500 ${
            isNotification ? "lg:left-[54px] left-[69px]" : "left-[-456px]"
          } `}
        >
          <div
            style={{ maxHeight: "calc(100vh - 10vh)" }}
            className="min-h-screen overflow-y-scroll bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg   dark:shadow-black max-w-md mx-auto py-4 w-full px-1"
          >
            qui totam atque temporibus non sunt omnis optio sit quas
            exercitationem eligendi incidunt nam sed velit aliquid quo iusto

            ipsa. Illo et non nesciunt quisquam, nobis magnam obcaecati
            reiciendis id, ducimus suscipit rerum iusto
            qui totam atque temporibus non sunt omnis optio sit quas
            exercitationem eligendi incidunt nam sed velit aliquid quo iusto
            ipsam expedita fugiat. Odio nihil maxime expedita exercitationem
            velit assumenda delectus placeat incidunt aperiam labore. Harum
            consectetur magnam et eius possimus veniam fuga id officiis fugit
           
          </div>
        </div>
      }
    </>
  );
}

export default App;
