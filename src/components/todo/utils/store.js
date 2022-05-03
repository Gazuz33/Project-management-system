const cards = [
    {
      id: 'card-1',
      title: 'To make a presentation',
    },
    {
      id: 'card-2',
      title: 'To write a scientific article',
    },
    {
      id: 'card-3',
      title: 'To make a Pull Request',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'To do',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'In progress...',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2'],
  };
  
  export default data;