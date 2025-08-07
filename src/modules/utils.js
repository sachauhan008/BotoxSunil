import { toast } from "react-toastify";

export const getLocalItem = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (err) {
    console.error(`Error parsing localStorage item '${key}':`, err);
    return null;
  }
};

export const setLocalItem = (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  } catch (err) {
    console.error(`Error setting localStorage item '${key}':`, err);
  }
};

export const deleteLocalItem = (key) => localStorage.removeItem(key);

export const showToast = (msg, status) => {
  if (status) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  } else {
    toast.error(msg, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      hideProgressBar: true,
    });
  }
};

export const getErrorMessage = (error) => {
  return (
    error?.response?.data?.responseMessage ??
    error?.response?.data?.message ??
    error?.response?.data ??
    error?.response ??
    error
  );
};
