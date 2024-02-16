import React, { useState } from "react";
import "../../CustomStyles/EditProfile.css";
import useShareobj from "../../CustomHooks/useShareobj";
import anynomoususer from "../../assets/Anynomous.webp";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function EditProfile() {
  const { user, image_url } = useShareobj();
  const [isOpen, setIsOpen] = useState();
  const [selectedGender, setSelectedGender] = useState("");
  const [word , setWord ] = useState(0);
  

  const HandleUpdateInfo = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const Name = data.get('Name');
    const UserName = data.get('UserName');
    const social_link = data.get('social-link');
    const Bio = data.get('Bio');
    const Email = data.get('Email');
    const Phone = data.get('Phone');
    const Gender = data.get('Gender');
    
    const obj = {
      "Name" : Name ,
      "user_name" : UserName,
      "Social_link" : social_link || '',
      "Bio" : Bio || "",
      "Email" : Email, 
      "Phone" : Phone || '',
      "Gender" : Gender || ''

    }


    console.log(obj)

  };
  return (
    <>
      <div className="max-w-lg mx-auto py-5 dark:text-white">
        <form onSubmit={HandleUpdateInfo}>
          <div className="E_D_P_flex">
            <div className="first-div">
              <img
                className="w-[50px] rounded-full"
                src={
                  user?.profile_pic
                    ? image_url + user.profile_pic
                    : anynomoususer
                }
                alt={user?.username || "userPhoto"}
              />
            </div>
            <div className="second-div">
              <h1 className="text-base font-medium text-black dark:text-white">
                {user?.username || "anynomous user"}
              </h1>
              <p className="cursor-pointer text-sm font-medium text-[#0095f6] tracking-tight hover:underline">
                Change Profile photo
              </p>
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="Name">Name</label>
            </div>
            <div className="second-div">
              <input
                id="Name"
                placeholder="Name"
                name="Name"
                type="text"
                defaultValue={user?.full_name}
              />
              <div>
                <span>
                  Editing your name is only available on website. Visit the
                  Instacity website and edit your profile name.
                </span>
              </div>
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="Username">Username</label>
            </div>
            <div className="second-div">
              <input
                id="UserName"
                name="UserName"
                aria-required="true"
                placeholder="Username"
                value={user?.username}
                type="text"
                readOnly
              />
              <div>
                <span>
                  In most cases, you'll be able to change your username back to
                  <span>here is current name</span> for another 14 days.
                </span>
              </div>
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="social-link">Social Link</label>
            </div>

            <div className="second-div">
              <input id="social-link" name="social-link" placeholder="Social Link" type="text" />
              <div>
                <span>
                  Editing your links is only available on website. Visit the
                  Instacity website and edit your profile and change your
                  thinks.
                </span>
              </div>
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="Bio">Bio</label>
            </div>
            <div className="second-div">
              <textarea
                onChange={(e)=>{setWord(e?.target?.value?.length)}}
                id="Bio"
                name="Bio"
                rows="5"
                disabled={word >= 150}
                placeholder="write bio"
              ></textarea>
              <div>
                <span>{word} / 150</span>
              </div>
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="Email">Email</label>
            </div>
            <div className="second-div">
              <input
                id="Email"
                name="Email"
                placeholder="Email"
                type="text"
                defaultValue={user?.email}
              />
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="Phone">Phone number</label>
            </div>
            <div className="second-div">
              <input
                id="Phone"
                name="Phone"
                placeholder="Phone number"
                type="text"
              />
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="Gender">Gender </label>
            </div>
            <div className="second-div">
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className=" w-full"
              >
                <input
                  onChange={(e) => setSelectedGender(e.target.value)}
                  id="Gender"
                  name="Gender"
                  readOnly
                  type="text"
                  value={selectedGender}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div"></div>
            <div className="second-div">
              <div className="flex flex-row justify-between">
                <div>
                  <button className="button-primary uppercase">Submit</button>
                </div>

                <h1 className="text-xs text-medium text-[#0095f6] tracking-normal hover:text-gray-700 cursor-pointer hover:underline">
                  Temporarily deactivate my account
                </h1>
              </div>
            </div>
          </div>
        </form>

        {/* --footer-- */}
        <footer className="mt-9 text-center">
          <ul id="footer-ul" className=" mx-auto justify-center">
            <li>
              <Link to={"/Notfound"}>About ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>Help ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>press ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>jobs ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>privacy ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>Terms ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>Location ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>instagram ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>Migen ,</Link>
            </li>
            <li>
              <Link to={"/Notfound"}>Blog , </Link>
            </li>
            <li>
              <Link to={"/Notfound"}>contact uploading</Link>
            </li>
          </ul>

          <div className="mt-2 copy-write">
            <span>&copy; 2024 Instacity from Midgen</span>
          </div>
        </footer>
      </div>

      {isOpen && (
        <div
          onClick={(e) => {
            if (e.target !== e.currentTarget) {
              return;
            }
            setReport(false);
          }}
          className=" fixed overflow-scroll right-0 top-0 z-50 left-0 bottom-0 justify-center items-center flex dropdown bg-[#00000080] "
        >
          <div className="scrollbar-hide min-h-[43vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg z-50  dark:shadow-black max-w-md mx-auto py-4 w-full rounded-md ">
            <div className="text-[#000000] dark:text-[#ffffff] flex flex-row justify-between items-center border-b-2 dark:border-[#555555] px-2 pb-2 ">
              <div></div>

              <div>
                <p className="text-base font-medium dark:text-[#ffffff] text-[#000000] ">
                  Select Gender
                </p>
              </div>
              <div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#000000] text-base font-semibold dark:text-[#ffffff]"
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-5 mt-4">
              <button
                onClick={() => setSelectedGender("Male")}
                className={`py-2 px-4 rounded-lg dark:border-[#555555] border-[1px] ${selectedGender === "Male" ? "button-primary" : ""
                  }`}
              >
                Male
              </button>
              <button
                onClick={() => setSelectedGender("Female")}
                className={`py-2 px-4 rounded-lg dark:border-[#555555] border-[1px] ${selectedGender === "Female" ? "button-primary" : ""
                  }`}
              >
                Female
              </button>
              <button
                onClick={() => setSelectedGender("Other")}
                className={`py-2 px-4 dark:border-[#555555] rounded-lg border-[1px] ${selectedGender === "Other" ? "button-primary" : ""
                  }`}
              >
                Other
              </button>
            </div>
            <div className="flex justify-between gap-4 mt-4 px-5">
              <button
                onClick={() => {
                  setSelectedGender(selectedGender), setIsOpen(false);
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Confirm
              </button>

              <button
                onClick={() => { setIsOpen(false)}}
                className="dark:bg-[#363636] bg-[#efefef] py-[8px] text-[#000000] dark:text-[#ffffff] px-[10px] rounded-md text-[14px] font-medium hover:opacity-70 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditProfile;
