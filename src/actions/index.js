import * as c from './../actions/ActionTypes';


export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: c.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}

// export const updateTicket = (ticket) => {
//   const { names, location, issue, id } = ticket;
//   return {
//     type: c.UPDATE_TICKET,
//     names: names,
//     location: location,
//     issue: issue,
//     id: id
//   }
// }

export const updateTicketIssue = (values) => {
  const {issue, id} = values;
  return {
    type: c.UPDATE_TICKET_ISSUE,
    issue: issue,
    id: id
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
})