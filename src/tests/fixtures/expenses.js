import moment from 'moment';

export default [{
    id: '1', 
    description: 'GUS', 
    note: 'lalala', 
    amount: 43, 
    createdAt: 0
}, {
    id: '2', 
    description: 'rent', 
    note: '', 
    amount: 9943, 
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3', 
    description: 'dentist', 
    note: 'broken tooth', 
    amount: 188.99, 
    createdAt: moment(0).add(5, 'days').valueOf()
}];

