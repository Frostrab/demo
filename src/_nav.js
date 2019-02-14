export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Inbox',
      url: '/inbox',
      icon: 'icon-drawer'
    },
    {
      name: 'New Item',
      url: '/new-item',
      icon: 'icon-screen-tablet'
    },
    {
      name: 'Supplier',
      url: '/supplier',
      icon: 'icon-user-follow'
    },
    {
      name: 'Purchase Order',
      url: '/po',
      icon: 'icon-doc'
    },
    {
      name: 'Product Example',
      url: '/product',
      icon: 'icon-magnifier-add'
    },
    {
      name: 'Material Maintenance',
      url: '/Material-Master-Maintenance',
      icon: 'icon-wrench'
    },
    {
      name: 'การติดตั้งแบบประเมิณ CA',
      icon: 'icon-wrench',
      children:[{
        name: 'ตัวชี้วัด',
        url: '/indicate',
        icon: 'icon-wrench'
      },
      {
        name: 'กลุ่มตัวชี้วัด',
        url: '/groupindi',
        icon: 'icon-wrench'
      },
      {
        name: 'หลักเกณฑ์',
        url: '/formula',
        icon: 'icon-wrench'
      },
      {
        name: 'แบบประเมิณ',
        url: '/formtest',
        icon: 'icon-wrench'
      },
      {
        name: 'ระยะเวลาการประเมิณ',
        url: '/timetest',
        icon: 'icon-wrench'
      },
      {
        name: 'การกำหนดระยะเวลากับแบบประเมิณ',
        url: '/managetime',
        icon: 'icon-wrench'
      },
      {
        name: 'สินค้านับสต็อก',
        url: '/checkstock',
        icon: 'icon-wrench'
      },
      {
        name: 'สินค้าสำหรับการประเมิณ CA',
        url: '/itemcheck',
        icon: 'icon-wrench'
      },
      {
        name: 'ตารางเกรด CA',
        url: '/gradeca',
        icon: 'icon-wrench'
      },]
    },
  ],
};
