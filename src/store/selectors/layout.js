import { createSelector } from 'reselect';

// Select layout initial state elements
const selectRaw = (state) => state.layout;
const selectMenuTransparent = createSelector([selectRaw], (layout) => layout.menuTransparent);
const selectMobileMenuVisible = createSelector([selectRaw], (layout) => layout.mobileMenuVisible);
const selectIsLoading = createSelector([selectRaw], (layout) => layout.loading);

const layoutSelectors = {
    selectRaw,
    selectMenuTransparent,
    selectMobileMenuVisible,
    selectIsLoading
};

export default layoutSelectors;