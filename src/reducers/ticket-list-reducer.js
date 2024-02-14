import * as c from './../actions/ActionTypes';

const ticketReducer = (state = {}, action) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
  case c.ADD_TICKET:
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
        timeOpen: timeOpen,
        formattedWaitTime: formattedWaitTime
      }
    });
    // return {...state, 
    //     [id]: {
    //       names: names,
    //       location: location,
    //       issue: issue,
    //       id: id
    //   }
    // };
  case c.UPDATE_TICKET_ISSUE:
    // const newStateUpdatestate[id], {
    //   [id]: {
    //     names: names,
    //     location: location,
    //     issue: issue,
    //     id: id,
    //     timeOpen: timeOpen,
    //     formattedWaitTime: formattedWaitTime
    //   }
    // } 
    // return = { ...state, [id]: { ...state[id], issue: issue } };
    const newStateUpdate = Object.assign({}, state, {
      [id]: Object.assign({}, state[id], {
        issue: issue,
      }),
    });
    return newStateUpdate;
  case c.DELETE_TICKET:
    const newState = { ...state };
    delete newState[id];
    return newState; 
  case c.UPDATE_TIME:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    const updatedState = Object.assign({}, state, {
      [id]: newTicket
    });
    return updatedState;
  default:
    return state;
  }
};

export default ticketReducer;

// import * as c from './../actions/ActionTypes';


// const reducer = (state = {}, action) => {
//   const { names, location, issue, id, formattedWaitTime, timeOpen } = action;
//   switch (action.type) {
//   case c.ADD_TICKET:
//     return Object.assign({}, state, {
//       [id]: {
//         names: names,
//         location: location,
//         issue: issue,
//         id: id
//       }
//     });
//     case c.DELETE_TICKET:
//       let newState = { ...state };
//       delete newState[id];
//       return newState;

//       case c.UPDATE_TIME:
//     const newTicket = Object.assign({}, state[id], {formattedWaitTime});
//     const updatedState = Object.assign({}, state, {
//       [id]: newTicket
//     });
//     return updatedState;
//     default:
//       return state;
//     }
//   };
  

// export default reducer;
