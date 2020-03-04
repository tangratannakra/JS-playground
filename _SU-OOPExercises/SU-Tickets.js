// Write a program that manages a database of tickets. 
// Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string, 
// representing a sorting criterion. The ticket descriptions have the following format:
// <destinationName>|<price>|<status>

// Store each ticket and at the end of execution return a sorted summary of all tickets, 
// sorted by either destination, price or status, depending on the second parameter that your program received. 
// Always sort in ascending order (default behavior for alphabetical sort). If two tickets compare the same, 
// use order of appearance. See the examples for more information.

const inputArr = ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

const sortCr = 'destination';

function ticketDBManager(tickets, sortCr) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const outputTickets = tickets.map(ticket => {
        const data = ticket.split("|");
        [destination, price, status] = data;
        return new Ticket(destination, price, status);
    });

    switch (sortCr) {
        case 'destination':
            return outputTickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            return outputTickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            return outputTickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
}

console.log(ticketDBManager(inputArr, sortCr))

// Input
// Your program will receive two parameters - an array of strings and a single string.
// Output
// Return a sorted array of all the tickets that where registered.

//  Examples
// Sample Input	Output Array
// ['Philadelphia|94.20|available',
//  'New York City|95.99|available',
//  'New York City|95.99|sold',
//  'Boston|126.20|departed'],
// 'destination'	[ Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' }, 
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' }, 
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' }, 
//   Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' } ]
// ['Philadelphia|94.20|available',
//  'New York City|95.99|available',
//  'New York City|95.99|sold',
//  'Boston|126.20|departed'],
// 'status'	[ Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' } ] 