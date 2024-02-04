import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TicketControl extends React.Component {
  constructor(props){
  super(props);
  console.log(props);
  this.state = {
    // formVisibleOnPage: false,
    selectedTicket: null,
    editing: false
  };
}


  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = ticketToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = newTicket;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }


  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  // handleClick = () => {
  //   const { dispatch } = this.props;
  //   if (this.state.selectedTicket != null) {
  //     this.setState({
  //       selectedTicket: null,
  //       editing: false
  //     });
  //   } else {
  //     // const action = a.toggleForm();
  //     // dispatch(action);
  //   }
  // }

  handleClick = () => {
    if (this.props.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({selectedTicket: selectedTicket});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing){
      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    }else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail 
    ticket = {this.state.selectedTicket} 
    onClickingDelete = {this.handleDeletingTicket} 
    onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Ticket List";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}  />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      buttonText = "Add Ticket";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <TicketList ticketList={this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
  //   return(
  //     <React.Fragment>
  //       {currentlyVisibleState}
  //       <button onClick={this.handleClick}>{buttonText}</button> 
  //     </React.Fragment>
  //   );
  // }
}

TicketControl.propTypes = {
  mainTicketList: PropTypes.object
};


const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
// const mapStateToProps = state => {
//   return {
//     mainTicketList: state
//   }
// }

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;


