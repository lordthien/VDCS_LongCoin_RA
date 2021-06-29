import {appImage} from '../Assets/Images';
import {numberWithCommas} from '../Theme/Size';

export const appData = {
  transactionData: [
    {
      source: appImage.withdrawn,
      VDCS: 204,
      VND: 204,
      action: 'Withdrawn',
      date: 'Aug 19, 2019',
      status: 'Transaction Confirmed',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
    {
      source: appImage.deposited,
      VDCS: 609,
      VND: 609,
      action: 'Deposited',
      date: 'Aug 19, 2019',
      status: 'Transaction Confirmed',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
    {
      source: appImage.sent,
      VDCS: 250,
      VND: 250,
      action: 'Sent',
      date: 'Aug 19, 2019',
      status: 'Transaction Confirmed',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
    {
      source: appImage.loan,
      VDCS: 100,
      VND: 100,
      action: 'Loan Pay in May',
      date: 'Aug 19, 2019',
      status: 'Transaction Confirmed',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
    {
      source: appImage.deposited,
      VDCS: 695,
      VND: 695,
      action: 'Deposited',
      date: 'Aug 19, 2019',
      status: 'Transaction Confirmed',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
    {
      source: appImage.sent,
      VDCS: 250,
      VND: 250,
      action: 'Sent',
      date: 'Aug 19, 2019',
      status: 'Transaction Confirmed',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
    {
      source: appImage.withdrawn,
      VDCS: 100,
      VND: 100,
      action: 'Loan Pay in May',
      date: 'Aug 19, 2019',
      status: 'Transaction Confirmed',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
    {
      source: appImage.withdrawn,
      VDCS: 100,
      VND: 100,
      action: 'Withdrawn',
      date: 'Aug 19, 2019',
      status: 'Pending',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
    {
      source: appImage.withdrawn,
      VDCS: 100,
      VND: 100,
      action: 'Withdrawn',
      date: 'Aug 19, 2019',
      status: 'Rejected',
      detail: {
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
            subtitle: numberWithCommas(100000),
            unit: 'VDCS',
            type: 1,
          },
          {
            title: 'Total Amount (VNĐ)',
            subtitle: numberWithCommas(100000),
            unit: 'VNĐ',
            type: 1,
          },
          {
            title: 'Withdrawn fee',
            subtitle: 0.5,
            type: 1,
            unit: 'VDCS',
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
    },
  ],
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
  recipientData: [
    {
      name: 'Ada Perry',
      phone: '786-222-8410',
      source: {uri: 'https://i.pravatar.cc/150?img=1'},
    },
    {
      name: 'Alex McCaddy',
      phone: '445-120-4592',
      source: {uri: 'https://i.pravatar.cc/150?img=21'},
    },
    {
      name: 'Blexandra Josh',
      phone: '786-222-8410',
      source: {uri: 'https://i.pravatar.cc/150?img=24'},
    },
    {
      name: 'Blexis Henson',
      phone: '445-120-4592',
      source: {uri: 'https://i.pravatar.cc/150?img=35'},
    },
    {
      name: 'Clexis Henson',
      phone: '445-120-4592',
      source: {uri: 'https://i.pravatar.cc/150?img=54'},
    },
    {
      name: 'Clexis Henson',
      phone: '445-120-4592',
      source: {uri: 'https://i.pravatar.cc/150?img=21'},
    },
    {
      name: 'Dlexis Henson',
      phone: '445-120-4592',
      source: {uri: 'https://i.pravatar.cc/150?img=42'},
    },
    {
      name: 'Elexis Henson',
      phone: '445-120-4592',
      source: {uri: 'https://i.pravatar.cc/150?img=15'},
    },
    {
      name: 'Flexis Henson',
      phone: '445-120-4592',
      source: {uri: 'https://i.pravatar.cc/150?img=54'},
    },
    {
      name: 'Glexis Henson',
      phone: '445-120-4592',
      source: {uri: 'https://i.pravatar.cc/150?img=14'},
    },
  ],
};
