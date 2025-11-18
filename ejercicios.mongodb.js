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
//2
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

//3

db.animales.aggregate([{
    $project: {
      _id: 0,
      nombre: 1,
      raza: 1,
      totalVacunas: { $size: "$historico_vacunas" },
      vacunasMinimas: { $cond: {
          if: {$eq: [{$size: "$historico_vacunas" }, 3]},
          then: true,
          else: false,
        }}
    }
  },{
    $match: {
      vacunasMinimas: true
    }
  }
])
//4
db.animales.aggregate([{
    $match: {
      consulta: "Le duele la pata derecha"
    }
    
  },{$project:{ _id:0,nombre:1}}
])

//5
db.animales.aggregate([{
    $match: {
      "historico_vacunas": {
        $elemMatch: { tipo: "Parvovirus" }
  }}},{
    $project: {
      _id: 0,
      nombre: 1,
      raza: 1,
    }
  }
])

//6
db.animales.aggregate([{
    $match: {
      "historico_vacunas": {
        $elemMatch: {
          fechaVacuna: { $regex: "^2023" } }
  }}},{
    $project: {
      _id: 0,
      nombre: 1,
      raza: 1,
    }
  }
])


