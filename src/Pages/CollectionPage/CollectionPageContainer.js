import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../Components/WithSpier/WithSpiner";
import { selectIsCollectionLoaded } from "../../Redux/shop/shop-selectors";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state)
})

export const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)