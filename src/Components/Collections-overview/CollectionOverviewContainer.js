import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFatching } from "../../Redux/shop/shop-selectors";
import WithSpinner from "../WithSpier/WithSpiner";
import ColectionsOwereiew from "./ColectionsOwereiew";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFatching
})

export const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ColectionsOwereiew)