use("ClinicaVeterinaria");

//1
db.animales.aggregate([
  {
    $match: {
      "tipo": "Perro",
      "precio": { $gte: 50 },
    },
  },
]);

db.animales.aggregate([
    {$match:{
        edad: { $gt: 3},
        peso: { $lt: 10},
    }},{
  $project: {
    _id: 0,
    nombre: 1,
    raza: 1,
  }
}
])

