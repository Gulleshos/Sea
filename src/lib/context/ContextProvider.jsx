"use client";
import { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
import {
    SET_USER,
    SET_CREATE_ENTITY_TYPE,
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_SEARCH_MODAL,
    CLOSE_SEARCH_MODAL,
    OPEN_CREATE_ENTITY_MODAL,
    CLOSE_CREATE_ENTITY_MODAL,
    OPEN_APPOINTMENT_MODAL,
    CLOSE_APPOINTMENT_MODAL,
    OPEN_ALERT,
    CLOSE_ALERT,
} from "./actions";

const initialState = {
    createEntityType: null,
    isModalOpen: false,
    isSearchModalOpen: false,
    isCreateEntityModalOpen: false,
    isAlertOpen: false,
    isAppointmentModalOpen: false,
    appointmentModalData: null,
    alertType: "warning",
    alertMessage: "-",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setUser = (user) => {
        dispatch({ type: SET_USER, payload: user });
    };

    const setCreateEntityType = (type) => {
        dispatch({ type: SET_CREATE_ENTITY_TYPE, payload: type });
    };

    const openModal = () => {
        dispatch({ type: OPEN_MODAL });
    };

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    const openSearchModal = () => {
        dispatch({ type: OPEN_SEARCH_MODAL });
    };

    const closeSearchModal = () => {
        dispatch({ type: CLOSE_SEARCH_MODAL });
    };

    const openCreateEntityModal = () => {
        dispatch({ type: OPEN_CREATE_ENTITY_MODAL });
    };

    const closeCreateEntityModal = () => {
        dispatch({ type: CLOSE_CREATE_ENTITY_MODAL });
    };

    const openAppointmentModal = (appointment) => {
        dispatch({ type: OPEN_APPOINTMENT_MODAL, payload: appointment });
    };

    const closeAppointmentModal = () => {
        dispatch({ type: CLOSE_APPOINTMENT_MODAL });
    };

    const openAlert = (type, message) => {
        dispatch({ type: OPEN_ALERT, payload: { type, message } });
    };

    const closeAlert = () => {
        dispatch({ type: CLOSE_ALERT });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                setUser,
                setCreateEntityType,
                openModal,
                closeModal,
                openSearchModal,
                closeSearchModal,
                openCreateEntityModal,
                closeCreateEntityModal,
                openAlert,
                closeAlert,
                openAppointmentModal,
                closeAppointmentModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};


const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
