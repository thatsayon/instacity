import React from "react";
import { Link } from "react-router-dom";
import '../../CustomStyles/SettingsModal.css'
import useShareobj from "../../CustomHooks/useShareobj";

function SettingsModal({ setSettings }) {

    const { Logout } = useShareobj();
    return (
        <>
            <div
                onClick={(e) => {
                    if (e.target !== e.currentTarget) {
                        return;
                    }
                    setSettings(false);
                }}
                className=" fixed overflow-scroll right-0 top-0 z-50   left-0 bottom-0 justify-center items-center flex dropdown bg-[#00000080] "
            >
                <div className="scrollbar-hide min-h-[70vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg z-50  dark:shadow-black max-w-sm mx-auto py-4 w-full rounded-md ">

                    <ul id="settings-ul-style">
                        <li>
                            <Link to='/Settings/ChangePassword'>Change password</Link>
                        </li>
                        <li>
                            <Link to='/Settings/EditProfile'>QR Code</Link>
                        </li>
                        <li>
                            <Link to='/Settings/PushNotification'>Push Notification</Link>
                        </li>
                        <li>
                            <Link to='/Settings/EmailNotification'>Email Notifications</Link>
                        </li>
                        <li>
                            <Link to='/Settings/Privacy'>Privacy & Security</Link>
                        </li>
                        <li>
                            <Link to='/Settings/Language'>website Languages</Link>
                        </li>
                        <li>
                            <Link to='/Settings/LoginActivity'>Login Activity</Link>
                        </li>
                        <li>
                            <Link to='/Settings/Email_Sent'>Email from Instacity</Link>
                        </li>
                        <li>
                            <button onClick={() => { setSettings(false), Logout() }}>Log out</button>
                        </li>
                        <li className="border-none" >
                            <button onClick={()=> setSettings(false)}>Cancel </button>
                        </li>

                    </ul>




                </div>
            </div>
        </>
    );
}

export default SettingsModal;
