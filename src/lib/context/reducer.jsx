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

const reducer = (state, action) => {
    if (action.type === SET_CREATE_ENTITY_TYPE) {
        return {
            ...state,
            createEntityType: action.payload,
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

    if (action.type === OPEN_UPDATE_MODAL) {
        return {
            ...state,
            isUpdateModalOpen: true
        };
    }

    if (action.type === CLOSE_UPDATE_MODAL) {
        return {
            ...state,
            isUpdateModalOpen: false
        };
    }
    throw new Error(`no such action: ${action.type}`);
};

export default reducer;
