import {toast} from 'react-toastify';

const Toast = (type,message,position="top-right") => {
    if(type=='success'){
        toast.success(message, {
            position: position,
          });
    }else if(type=='warning'){
        toast.error(message, {
            position: position,
          });
    }else if(type=='error'){
        toast.warn(message, {
            position: position,
          });
    }else if(type=='info'){
        toast.info(message, {
            position: position,
          });
    }
}

export default Toast