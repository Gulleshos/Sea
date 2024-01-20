import {
    SET_USER,
    SET_CREATE_ENTITY_TYPE,
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_ALERT,
    CLOSE_ALERT,
    OPEN_SEARCH_MODAL,
    CLOSE_SEARCH_MODAL,
    OPEN_CREATE_ENTITY_MODAL,
    CLOSE_CREATE_ENTITY_MODAL,
    OPEN_APPOINTMENT_MODAL,
    CLOSE_APPOINTMENT_MODAL,
} from "./actions";

const reducer = (state, action) => {

    if (action.type === SET_USER) {
        return {
            ...state,
            user: action.payload,
        };
    }

    if (action.type === SET_CREATE_ENTITY_TYPE) {
        return {
            ...state,
            createEntityType: action.payload,
        };
    }

    if (action.type === OPEN_MODAL) {
        return {
            ...state,
            isModalOpen: true,
        };
    }

    if (action.type === CLOSE_MODAL) {
        return {
            ...state,
            isModalOpen: false,
        };
    }
    if (action.type === OPEN_SEARCH_MODAL) {
        return {
            ...state,
            isSearchModalOpen: true,
        };
    }

    if (action.type === CLOSE_SEARCH_MODAL) {
        return {
            ...state,
            isSearchModalOpen: false,
        };
    }

    if (action.type === OPEN_CREATE_ENTITY_MODAL) {
        return {
            ...state,
            isCreateEntityModalOpen: true,
        };
    }

    if (action.type === CLOSE_CREATE_ENTITY_MODAL) {
        return {
            ...state,
            isCreateEntityModalOpen: false,
        };
    }

    if (action.type === OPEN_ALERT) {
        return {
            ...state,
            isAlertOpen: true,
            alertType: action.payload.type,
            alertMessage: action.payload.message,
        };
    }

    if (action.type === CLOSE_ALERT) {
        return {
            ...state,
            isAlertOpen: false,
            alertType: "warning",
            alertMessage: "-",
        };
    }

    if (action.type === OPEN_APPOINTMENT_MODAL) {
        return {
            ...state,
            isAppointmentModalOpen: true,
            appointmentModalData: action.payload,
        };
    }

    if (action.type === CLOSE_APPOINTMENT_MODAL) {
        return {
            ...state,
            isAppointmentModalOpen: false,
            appointmentModalData: null,
        };
    }

    throw new Error(`no such action: ${action.type}`);
};

export default reducer;
