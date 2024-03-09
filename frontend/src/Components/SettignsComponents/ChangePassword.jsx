import React, { useEffect, useState } from 'react'
import anynomoususer from "../../assets/Anynomous.webp";
import useShareobj from '../../CustomHooks/useShareobj';
import ReactLoading from "react-loading";

function ChangePassword() {
  const { user, image_url } = useShareobj();
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewpass, setConfirmNewpass] = useState('');
  const [error, setError] = useState('');
  const [succesMessage, setsuccessMessage] = useState('');
  const [isDisable, setDisable] = useState(true);
  const [btnLoading, setbtnLoading] = useState(false);
  const { changePassword } = useShareobj() || '';



  useEffect(() => {
    if (oldPass && confirmNewpass && newPass) {
      if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(newPass) && !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(confirmNewpass)) {
        setError(
          "password should be at least 6 characters a-z or special characters? and the first character should be uppercase!"
        );
        setDisable(true)
        return;
      }

      if (newPass != confirmNewpass) {
        setError("New Password and Confrim password does not match!!");
        setDisable(true)
        return;
      }
      setError('')
      setDisable(false)

    }
  }, [oldPass, newPass, confirmNewpass])

  const HandleChangePassword = (e) => {
    e.preventDefault();
    setbtnLoading(true);
    setTimeout(() => {
      setbtnLoading(false);
    }, 800);

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(oldPass)) {
      setError("Old password is wrong, please try again !");
      return;
    }

    if (oldPass == newPass) {
      setError("Old password or new password are same please try another !");
      return;
    }

    const obj = {
      "old_password": oldPass,
      "new_password": newPass

    }

    changePassword(obj)
      .then(res => {
        if (res?.data?.message) {
          e.target.reset();
          setsuccessMessage(res?.data?.message)
          setTimeout(() => {
            setsuccessMessage('')
          }, 4000);
        }
      })
      .catch(err => {
        if (err?.response?.status) {
          setError("Old password is wrong, please try again !");
        }

      })

  }
  return (
    <>
      <div className="max-w-lg mx-auto py-5 dark:text-white">
        <form onSubmit={HandleChangePassword}>
          <div className="E_D_P_flex">
            <div className="first-div ">
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
            <div className="second-div ">
              <h1 className="text-base font-medium text-black dark:text-white">
                {user?.username || "anynomous user"}
              </h1>
              {
                error && <p className='mt-5 error-color text-sm font-semibold whitespace-pre-wrap'>
                  {error}
                </p>
              }
              {
                succesMessage &&
                <p className='mt-5 success-color text-sm font-semibold whitespace-pre-wrap'>
                  {succesMessage}
                </p>
              }
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="OldPassword">Old Password</label>
            </div>
            <div className="second-div">
              <input
                required
                id="OldPassword"
                placeholder="Old Password"
                name="OldPassword"
                type="text"
                onChange={(e) => { setOldPass(e?.target?.value) }}

              />
              <div>
              </div>
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="NewPassword">New Password</label>
            </div>
            <div className="second-div">
              <input
                required
                id="NewPassword"
                name="NewPassword"
                placeholder="New Password"
                type="text"
                onChange={(e) => { setNewPass(e?.target?.value) }}
              />
              <div>

              </div>
            </div>
          </div>

          <div className="E_D_P_flex">
            <div className="first-div">
              <label htmlFor="ConfrimPassword">Confirm new password</label>
            </div>

            <div className="second-div">
              <input id="ConfirmPassword" onChange={(e) => { setConfirmNewpass(e?.target?.value) }} required name="ConfrimPassword" placeholder="Confrim Password" type="text" />
              <div>
              </div>
            </div>
          </div>





          <div className="E_D_P_flex">
            <div className="first-div"></div>
            <div className="second-div">
              <div className="flex flex-row justify-between">
                <div>
                  <button disabled={isDisable} className="button-primary disabled:opacity-60 w-40 h-8 ">
                    {btnLoading ? (
                      <ReactLoading
                        type="spokes"
                        height="20px"
                        width="20px"
                        color="#fff"
                      />
                    ) : (
                      "Change password"
                    )}
                  </button>
                </div>

                <h1 className="text-xs text-medium text-[#0095f6] tracking-normal hover:text-gray-700 cursor-pointer hover:underline">
                  Forget Password ?
                </h1>
              </div>
            </div>
          </div>
        </form>



      </div>











    </>
  )
}

export default ChangePassword