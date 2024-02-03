import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  describe('ticketListReducer', () => {
    test('Should return default state if there is no action type passed into the reducer', () => {
      expect(ticketListReducer({}, { type: null })).toEqual({});
    });

    test('should successfully add new ticket data to mainTicketList', () => {
      const { names, location, issue, id } = ticketData;
      action = {
        type: 'ADD_TICKET',
        names: names,
        location: location,
        issue: issue,
        id: id
      };

      expect(ticketListReducer({}, action)).toEqual({
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
    });
  });
});

// import ticketListReducer from '../../reducers/ticket-list-reducer';

// describe('ticketListReducer', () => {

//   let action;
//   const ticketData = {
//     names: 'Ryan & Aimen',
//     location: '4b',
//     issue: 'Redux action is not working correctly.',
//     id: 1
// });

// describe('ticketListReducer', () => {
//   test('Should return default state if there is no action type passed into the reducer', () => {
//     expect(ticketListReducer({}, { type: null })).toEqual({});
//   });

//   test('should succuessfully add new ticket data to mainTicketList',() => {
//     const {names, location, issue, id} = ticketData;
//     action = {
//       type: 'ADD_TICKET',
//       names: names,
//       location: location,
//       issue: issue,
//       id: id
//     };

//     expect(ticketListReducer({}, action)).toEqual({
//       [id] : {
//         names: names,
//         location: location,
//         issue: issue,
//         id: id
//       }
//     });
//   });
// });