import * as actionTypes from './action';

const initialState = {
    toggleSidebar: false,
    hasChart: false,
    hasPages: false,
    hasSubAuth: false,
    hasOtherPages: false,
    todoList: [
        { 'id': 1, 'title': 'Finish Dashboard UI Kit update', 'added_on': 'DEC 15,2018', 'status': true },
        { 'id': 2, 'title': 'Create new prototype for the landing page', 'added_on': 'DEC 15,2018', 'status': false },
        { 'id': 3, 'title': 'Add new Google Analytics code to all main files', 'added_on': 'DEC 15,2018', 'status': false },
        { 'id': 4, 'title': 'Update parallax scroll on team page', 'added_on': 'DEC 15,2018', 'status': false },
        { 'id': 5, 'title': 'Create online customer list book', 'added_on': 'DEC 15,2018', 'status': false },
        { 'id': 6, 'title': 'Lorem ipsum dolor sit amet, consectetur', 'added_on': 'DEC 15,2018', 'status': false }
    ],
    addTask: false,

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                toggleSidebar: !state.toggleSidebar
            }
        case actionTypes.ADD_TASK:
            return {
                ...state,
                addTask: !state.addTask
            }
        case actionTypes.ADD_NEW_ELEMENT:

            const obj = {
                'title': action.result, 'added_on': "Today",
                'status': false
            }
            return {
                ...state,
                todoList: state.todoList.concat(obj),
                addTask: !state.addTask
            }
        case actionTypes.UPDATE_TASK_STATUS:

            return {
                ...state,
                todoList: state.todoList.map((list, i) => i === action.ids ? { ...list, status: !list.status } : list)
            }
        case actionTypes.HAS_CHART:
            if (state.hasChart)
                return {
                    ...state,
                    hasChart: !state.hasChart,
                    hasPages: !state.hasChart
                }
            else

                return {
                    ...state,
                    hasChart: !state.hasChart,
                    hasPages: state.hasChart
                }

        case actionTypes.HAS_PAGES:
            if (state.hasPages)
                return {
                    ...state,
                    hasPages: !state.hasPages,
                    hasChart: !state.hasPages
                }
            else
                return {
                    ...state,
                    hasPages: !state.hasPages,
                    hasChart: state.hasPages
                }

        case actionTypes.HAS_SUB_AUTH:
            return {
                ...state,
                hasPages: !state.hasPages,
                hasSubAuth: !state.hasSubAuth,
                hasOtherPages: false,
            }
        case actionTypes.HAS_OTHER_PAGES:

            return {
                ...state,
                hasPages: !state.hasPages,
                hasOtherPages: !state.hasOtherPages,
                hasSubAuth: false,
            }

        case actionTypes.DASHBOARD:

            return {
                ...state,
                hasPages: false,
                hasChart: false
            }

        case actionTypes.INVOICE_MENU:

            return {
                ...state,
                hasPages: true,
                hasOtherPages: false,
                hasSubAuth: false
            }

        default:
            return {
                ...state
            };
    }
};

export default reducer;