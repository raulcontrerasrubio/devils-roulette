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
    {
      id: 7,
      title: 'Matrimonio',
      description: 'Pide matrimonio a una persona desconocida de otra clase',
    },
    {
      id: 8,
      title: 'Baño',
      description: 'Di "Te espero en 5 minutos en el baño" a la persona que digan los TA\'s',
    },
    {
      id: 9,
      title: 'Tic nervioso',
      description: 'Cada vez que alguien diga tu nombre tienes que levantar el hombro como si tuvieses un tic nervioso durante todo el día',
    },
    {
      id: 10,
      title: 'Una vaca lechera',
      description: 'Ve a otra clase y, de punta a punta, canta la canción de "Tengo una vaca lechera" mientras golpeas una botella metálica con un boli. ¿No te la sabes? Dice así: "Tengo una vaca lecheeeeera, no es una vaca cualquieeeera, me da leche merengada, ¡ay! qué vaca tan salada, tolón tolóooon, tolón tolóooooon"',
    },

  ],
  getThingById(id){
    return this.dataset.filter(thing => thing.id === id)[0];
  }
};