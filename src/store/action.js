export const TOGGLE_SIDEBAR = "TOGGLESIDEBAR";
export const HAS_CHART = "HASCHART";
export const HAS_PAGES = "HAS_PAGES";
export const HAS_SUB_AUTH = "HASSUBAUTH";
export const HAS_OTHER_PAGES = "HASOTHERPAGES";
export const ADD_TASK = "ADDTASK";
export const ADD_NEW_ELEMENT = "ADDNEWELEMENT";
export function addElement(value) {
    return {
        type: ADD_NEW_ELEMENT,
        result: value
    };
}
export const UPDATE_TASK_STATUS = "UPDATETASKSTATUS";