import {appImage} from '../Assets/Images';

export const appData = {
  transactionData: [
    {
      id: 1,
      source: appImage.withdrawn,
      VDCS: 204,
      VND: 204,
      action: 'Withdrawn',
      date: 'Aug 19, 2019',
    },
    {
      id: 2,
      source: appImage.deposited,
      VDCS: 609,
      VND: 609,
      action: 'Deposited',
      date: 'Aug 19, 2019',
    },
    {
      id: 3,
      source: appImage.sent,
      VDCS: 250,
      VND: 250,
      action: 'Sent',
      date: 'Aug 19, 2019',
    },
    {
      id: 4,
      source: appImage.loan,
      VDCS: 100,
      VND: 100,
      action: 'Loan Pay in May',
      date: 'Aug 19, 2019',
    },
    {
      id: 5,
      source: appImage.deposited,
      VDCS: 695,
      VND: 695,
      action: 'Deposited',
      date: 'Aug 19, 2019',
    },
    {
      id: 6,
      source: appImage.sent,
      VDCS: 250,
      VND: 250,
      action: 'Sent',
      date: 'Aug 19, 2019',
    },
    {
      id: 7,
      source: appImage.withdrawn,
      VDCS: 100,
      VND: 100,
      action: 'Loan Pay in May',
      date: 'Aug 19, 2019',
    },
  ],
  transactionDetails: {
    date: [
      {
        title: 'Date',
        subtitle: 'May 19, 2021',
        type: 1,
      },
      {
        title: 'Time',
        subtitle: '11:38 AM',
        type: 2,
      },
    ],
    amount: [
      {
        title: 'Total Amount',
        subtitle: 100000,
        unit: 'VDCS',
        type: 1,
      },
      {
        title: 'Total Amount (VNĐ)',
        subtitle: 100000,
        unit: 'VNĐ',
        type: 1,
      },
      {
        title: 'Withdrawn fee',
        subtitle: 0.5,
        type: 1,
        unit: 'VDCS',
      },
      {
        title: 'Status',
        subtitle: 'Transaction confirmed',
        type: 3,
      },
    ],
    id: [
      {
        title: 'Transaction ID',
        subtitle: '3M8w2knJKsr3jqMatYiyuraxVvZA',
        type: 1,
      },
      {
        title: 'From',
        subtitle: '0x0b06d4JH48e5DK3jm4a3af69BnVO51c12i8',
        type: 1,
      },
      {
        title: 'To',
        subtitle: '3M8w2knJKsr3jqM3aatYiyuraxVvZAmuZy24lK8',
        type: 1,
      },
    ],
  },
  transactionTypeData: [
    {
      source: appImage.plusCircle,
      type: 'Deposited',
    },
    {
      source: appImage.withdrawn,
      type: 'Withdrawn',
    },
    {
      source: appImage.sent,
      type: 'Sent',
    },
    {
      source: appImage.plusCircle1,
      type: 'Pay',
    },
  ],
};
