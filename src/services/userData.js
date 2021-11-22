import photo from '../images/user.jpg';
import fleg from  '../images/visa-seeklogo.com.svg';

const data = [
  {
    email: 'letborges23@gmail.com',
    image: photo,
    name: 'Letícia',
    lastName: 'Borges',
    user: '@letborges23',
    account: {
      account: '01234567',
      digit: '9',
    },
    agency: '0001',
    balance: 750,
    cards: {
      creditCards: {
        number: '.... .... 2645 1655',
        dateValidity: {
          month: '05',
          year: '2025',
        },
        code: '025',
        fleg: fleg,
        creditBalance: 2000,
      },
    },
    expenses: [
      {
        expense: 'Lojas Magalu',
        date: '15/05/2021',
        hours: '17:48',
        value: 129.9,
      },
      {
        expense: 'Padaria Costa Mendes',
        date: '22/05/2021',
        hours: '10:05',
        value: 16.9,
      },
      {
        expense: 'Pizzaria 4 Estrelas',
        date: '28/05/2021',
        hours: '19:30',
        value: 32.9,
      },
    ],
  },
];

export default data;
