const prefix = "LAYOUT";

const layoutActions = {
    MENU_TRANSPARENT: `${prefix}_MENU_TRANSPARENT`,
    MENU_OPAQUE: `${prefix}_MENU_OPAQUE`,
    MENU_MOBILE_OPEN: `${prefix}_MENU_MOBILE_OPEN`,
    MENU_MOBILE_CLOSE: `${prefix}_MENU_MOBILE_CLOSE`,
    MENU_MOBILE_TOGGLE: `${prefix}_MENU_MOBILE_TOGGLE`,

    doMenuTransparent: () => {
        return {
            type: layoutActions.MENU_TRANSPARENT
        }
    },

    doMenuOpaque: () => {
        return {
            type: layoutActions.MENU_OPAQUE
        }
    },

    doOpenMobileMenu: () => {
        return {
            type: layoutActions.MENU_MOBILE_OPEN
        }
    },

    doCloseMobileMenu: () => {
        return {
            type: layoutActions.MENU_MOBILE_CLOSE
        }
    },

    doToggleMobileMenu: () => {
        return {
            type: layoutActions.MENU_MOBILE_TOGGLE
        }
    }
};

export default layoutActions;