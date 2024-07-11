import React, { createContext, useContext } from "react";
import { toast } from "react-hot-toast";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const CustomToast = (message, type) => {
    return toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex items-center ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div
            className={`flex items-start ${
              type === "success" ? "text-green-500" : "text-red-500"
            } font-medium text-base`}
          >
            {message || "Something wrong try again !"}
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50 active:ring-2 active:ring-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
            >
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
            </svg>
          </button>
        </div>
      </div>
    ));
  };

  const SuccessToast = (message) => {
    return toast.success(`${message || "Success"}`);
  };

  const ErrorToast = (message) => {
    return toast.error(`${message || "Something wrong"}`);
  };

  const saveSettings = async (settings) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (settings) {
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  };

  const PromiseToast = (settings, message) => {
    const promise = saveSettings(settings);
    toast.promise(promise, {
      loading: "Loading...",
      success: <b>{message}</b>,
      error: <b>{message}</b>,
    });
  };

  const Contextvalue = {
    CustomToast,
    SuccessToast,
    ErrorToast,
    PromiseToast,
  };

  return (
    <ToastContext.Provider value={Contextvalue}>
      {children}
    </ToastContext.Provider>
  );
};
