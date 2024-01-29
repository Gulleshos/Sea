"use client";
import { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
import {
    SET_CREATE_ENTITY_TYPE,
    OPEN_SEARCH_MODAL,
    CLOSE_SEARCH_MODAL,
    OPEN_CREATE_ENTITY_MODAL,
    CLOSE_CREATE_ENTITY_MODAL,
    OPEN_APPOINTMENT_MODAL,
    CLOSE_APPOINTMENT_MODAL,
    OPEN_UPDATE_MODAL,
    CLOSE_UPDATE_MODAL,
} from "./actions";

const initialState = {
    createEntityType: null,
    isSearchModalOpen: false,
    isCreateEntityModalOpen: false,
    isAppointmentModalOpen: false,
    appointmentModalData: null,
    isUpdateModalOpen: false
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setCreateEntityType = (type) => {
        dispatch({ type: SET_CREATE_ENTITY_TYPE, payload: type });
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

    const openUpdateModal = () => {
        dispatch({ type: OPEN_UPDATE_MODAL});
    };

    const closeUpdateModal = () => {
        dispatch({ type: CLOSE_UPDATE_MODAL });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                setCreateEntityType,
                openSearchModal,
                closeSearchModal,
                openCreateEntityModal,
                closeCreateEntityModal,
                openAppointmentModal,
                closeAppointmentModal,
                openUpdateModal,
                closeUpdateModal,
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
