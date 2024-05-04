const tariffs = [
  {
      id: 1,
      name: { text: 'Безлимитный 300', backgroundColor: '#219cab' },
      price: { value: 300, backgroundColor: '#2cc1d5' },
      speed: { value: 10 },
      traffic: { text: 'Объем включенного трафика неограничен'}
  },
  {
      id: 2,
      name: { text: 'Безлимитный 450', backgroundColor: '#1f8972' },
      price: { value: 450, backgroundColor: '#24ae8d' },
      speed: { value: 50 },
      traffic: { text: 'Объем включенного трафика неограничен'}
  },
  {
      id: 3,
      name: { text: 'Безлимитный 550', backgroundColor: '#c4554e'},
      price: { value: 550, backgroundColor: '#f46a5f' },
      speed: { value: 100 },
      traffic: { text: 'Объем включенного трафика неограничен' },
      isSelected: true,
  },
  {
      id: 4,
      name: { text: 'Безлимитный 1000', backgroundColor: '#282f37'},
      price: { value: 1000, backgroundColor: '#333a44' },
      speed: { value: 200 },
      traffic: { text: 'Объем включенного трафика неограничен'}
  }
];
export { tariffs };