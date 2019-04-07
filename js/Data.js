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
      title: 'Moonwalker',
      description: 'Ve a una clase y, sin decir nada, haz el moonwalker ida y vuelta',
    },
    {
      id: 5,
      title: 'Mirón',
      description: 'Ve a una clase y haz como si estuvieras espiándoles',
    },
    {
      id: 6,
      title: 'El joker',
      description: 'Píntate la sonrisa del joker y llévala durante todo el día',
    },

  ],
  getThingById(id){
    return this.dataset.filter(thing => thing.id === id)[0];
  }
};