DR.Data = {
  dataset: [
    {
      id: 1,
      title: 'Rey León',
      description: 'Cantar el Rey León delante de personas desconocidas',
    },
    {
      id: 2,
      title: 'Ir descalzo',
      description: 'Debes ir descalzo durante toda la tarde',
    },
    {
      id: 3,
      title: 'Perreo',
      description: 'Ponte a perrear como si no hubiera un mañana durante 10 minutos',
    },
    {
      id: 4,
      title: 'Cosa chunga 3',
      description: 'Se me ha acabado la imaginación',
    },
    {
      id: 5,
      title: 'Cosa chunga 5',
      description: 'Idear más cosas chungas para añadir cosas a la ruleta',
    },

  ],
  getThingById(id){
    return this.dataset.filter(thing => thing.id === id)[0];
  }
};