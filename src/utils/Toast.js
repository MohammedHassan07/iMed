
import { toast } from "react-toastify";

const showToast = (label, bgColor) => {

  toast(label, {
    style: {
      backgroundColor: `${bgColor}`,
      color: '#FFFFFF'
    },
    progressClassName: "#FFFFFF"
  });
}

export default showToast