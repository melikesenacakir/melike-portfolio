import { toast } from 'react-toastify';
import { t } from 'i18next';

const showToast = (type, message) => {
  if (message && message !== "") {
    toast[type]?.(t(message, type), {
      position: "top-right",
      autoClose: 3000,  
    });
  } else {
    if (type === "dismiss") toast.dismiss();
  }
};

export { showToast };
