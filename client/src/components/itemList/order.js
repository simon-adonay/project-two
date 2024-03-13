import React from "react";
import OrderedItems from "../order/orders";
import { connect } from "react-redux";
import * as itemBuilderAction from "../../actions/index";

class OrderedList extends React.Component {
  componentDidMount() {
    console.log("ooooooooo", this.props.token);
    this.props.displayFoodList(this.props.token);
  }
  deleteItemHandler = (id) => {
    console.log('mmmmmmmmm',id);
    this.props.deleteItemFromOrder(id)
  };

  render() {
    return (
      <div>
        <OrderedItems menu={this.props.lists} delete={this.deleteItemHandler} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.order.orderLists,
    totalprice: state.order.totalprice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayFoodList: () =>dispatch(itemBuilderAction.getOrderedList()),
    deleteItemFromOrder: (id) =>dispatch(itemBuilderAction.deleteItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderedList);
