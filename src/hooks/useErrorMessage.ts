import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "material-react-toastify";
import { toastOptionsError } from "../constants/toastOptions";
import { authActions } from "../redux/actions";
import { getErrorMessage } from "../redux/selectors";

export const useErrorMessage = ():void => {
    const errorMessage = useSelector(getErrorMessage)
    const dispatch = useDispatch()

    useEffect(() => {
        if (errorMessage) {            
            toast.error(errorMessage, toastOptionsError)
            dispatch(authActions.resetError())
        }
    }, [errorMessage])
};