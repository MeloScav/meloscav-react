import actions from "/src/store/actions/layout";

const initialState = {
    menuTransparent: false,
    mobileMenuVisible: false,
    loading: false,
};

const layout = (state = initialState, action) => {
    // Check action type then modify initialState
    switch (action.type) {
        case actions.MENU_TRANSPARENT:
            return {
                ...state,
                menuTransparent: true
            };
        case actions.MENU_OPAQUE:
            return {
                ...state,
                menuTransparent: false
            };
        case actions.MENU_MOBILE_OPEN:
            return {
                ...state,
                mobileMenuVisible: true
            };
        case actions.MENU_MOBILE_CLOSE:
            return {
                ...state,
                mobileMenuVisible: false
            };
        case actions.MENU_MOBILE_TOGGLE:
            return {
                ...state,
                mobileMenuVisible: !state.mobileMenuVisible
            };
        case actions.LOADING_START:
            return {
                ...state,
                loading: true
            };
        case actions.LOADING_FINISH:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default layout;