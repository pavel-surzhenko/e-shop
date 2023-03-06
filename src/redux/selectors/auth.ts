import { RootState } from "../init/store";

export const getToken = (state: RootState): string => {
    return state.auth.token;
};

export const getErrorMessage = (state: RootState): string => {
    return state.auth.errorMessage;
};
