import { toast } from "react-toastify";

function handleError(error) {
  toast.error(error);
}

export default handleError;
