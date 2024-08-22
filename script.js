// creacion del json campers el cual guarda los datos de los campers
var Campers = [ 
    {
      "grupo": "T1",
      "ruta": "no asignado",
      "trainer": "Pedro",
      "campers": [
        {
          "id": 1,
          "nombres": "Juan Pablo",
          "apellidos": "Perez Gonzalez",
          "direccion": "Calle 123, Ciudad Imaginaria",
          "acudiente": "Maria Perez",
          "telefonos": { "celular": "5551234567", "fijo": "5559876543" },
          "estado": "Inscrito",
          "riesgo": "No asignado",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 2,
          "nombres": "Marada Alejandra",
          "apellidos": "Rodriguez Martnez",
          "direccion": "Avenida Principal, Ciudad Imaginaria",
          "acudiente": "Jos Rodradguez",
          "telefonos": { "celular": "5552345678", "fijo": "5558765432" },
          "estado": "No asignado",
          "riesgo": "no asignado",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 3,
          "nombres": "Carlos Alberto",
          "apellidos": "Garcada Hernandez",
          "direccion": "Calle Central, Ciudad Imaginaria",
          "acudiente": "Ana Garcada",
          "telefonos": { "celular": "5553456789", "fijo": "5557654321" },
          "estado": "Inscrito",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 4,
          "nombres": "Ana Gabriela",
          "apellidos": "Martnez Lopez",
          "direccion": "Avenida Norte, Ciudad Imaginaria",
          "acudiente": "Pedro Martadnez",
          "telefonos": { "celular": "5554567890", "fijo": "5556543210" },
          "estado": "Inscrito",
          "riesgo": "Alto",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 5,
          "nombres": "Luis Eduardo",
          "apellidos": "Hernandez Ramirez",
          "direccion": "Calle Sur, Ciudad Imaginaria",
          "acudiente": "Laura Hernandez",
          "telefonos": { "celular": "5555678901", "fijo": "5555432109" },
          "estado": "Reprobado",
          "riesgo": "Alto",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 6,
          "nombres": "Sofada Andrea",
          "apellidos": "Lupez Gomez",
          "direccion": "Calle Este, Ciudad Imaginaria",
          "acudiente": "Pablo Lopez",
          "telefonos": { "celular": "5556789012", "fijo": "5554321098" },
          "estado": "Reprobado",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 7,
          "nombres": "Diego Alejandro",
          "apellidos": "Ramadrez Martinez",
          "direccion": "Avenida Oeste, Ciudad Imaginaria",
          "acudiente": "Andrea Ramadrez",
          "telefonos": { "celular": "5557890123", "fijo": "5553210987" },
          "estado": "Inscrito",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 8,
          "nombres": "Valeria Isabel",
          "apellidos": "Castro Sanchez",
          "direccion": "Calle 456, Ciudad Imaginaria",
          "acudiente": "David Castro",
          "telefonos": { "celular": "5558901234", "fijo": "5552109876" },
          "estado": "Inscrito",
          "riesgo": "Medio",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 9,
          "nombres": "Mateo Alonso",
          "apellidos": "Flores Garcia",
          "direccion": "Avenida 789, Ciudad Imaginaria",
          "acudiente": "Sofia Flores",
          "telefonos": { "celular": "5559012345", "fijo": "5558765432" },
          "estado": "Cursando",
          "riesgo": "Alto",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        }
      ]
    },
    {
      "grupo": "T2",
      "ruta": "no asignado",
      "trainer": "no asignado",
      "campers": [
        {
          "id": 13,
          "nombres": "Juan Camilo",
          "apellidos": "Perez Gomes",
          "direccion": "Calle 128, Ciudad Imaginaria",
          "acudiente": "Marivel Perez",
          "telefonos": { "celular": "5551234568", "fijo": "5559876549" },
          "estado": "Inscrito",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 14,
          "nombres": "Ana Marada",
          "apellidos": "Rodriguez Lopez",
          "direccion": "Calle 123, Ciudad Imaginaria",
          "acudiente": "Carlos Rodriguez",
          "telefonos": { "celular": "5553456789", "fijo": "5557890123" },
          "estado": "Inscrito",
          "riesgo": "Alto",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 15,
          "nombres": "Juan Esteban",
          "apellidos": "Sanchez Gomez",
          "direccion": "Avenida 456, Ciudad Imaginaria",
          "acudiente": "Ana Sanchez",
          "telefonos": { "celular": "5554567890", "fijo": "5558901234" },
          "estado": "Inscrito",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 16,
          "nombres": "Pablo Andres",
          "apellidos": "Sanchez Ramirez",
          "direccion": "Avenida 456, Ciudad Imaginaria",
          "acudiente": "Ana Sanchez",
          "telefonos": { "celular": "5553456789", "fijo": "5558901234" },
          "estado": "Graduado",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 17,
          "nombres": "Julia Alejandra",
          "apellidos": "Gonzalez Martinez",
          "direccion": "Calle 789, Ciudad Imaginaria",
          "acudiente": "Juan Gonzalez",
          "telefonos": { "celular": "5554567890", "fijo": "5559012345" },
          "estado": "Inscrito",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 18,
          "nombres": "Martn Alejandro",
          "apellidos": "Duran Hernandez",
          "direccion": "Avenida 012, Ciudad Imaginaria",
          "acudiente": "Marta Duraz",
          "telefonos": { "celular": "5555678901", "fijo": "5552345678" },
          "estado": "Reprobado",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 19,
          "nombres": "Sofia Isabel",
          "apellidos": "Martadn Gonzalez",
          "direccion": "Calle 345, Ciudad Imaginaria",
          "acudiente": "Marcos Martadn",
          "telefonos": { "celular": "5556789012", "fijo": "5558901234" },
          "estado": "Inscrito",
          "riesgo": "Medio",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        }
      ]
    },
    {
      "grupo": "T3",
      "ruta": "no asignado",
      "trainer": "no asignado",
      "campers": [
        {
          "id": 24,
          "nombres": "Valentina Alejandra",
          "apellidos": "Garcia Martinez",
          "direccion": "Calle 901, Ciudad Imaginaria",
          "acudiente": "Carlos Garcia",
          "telefonos": { "celular": "5558901234", "fijo": "5550123456" },
          "estado": "Aprobado",
          "riesgo": "Bajo",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          },
          "evaluar_inscrito": {
            "nota_teorica": 80.0,
            "nota_practica": 70.0,
            "nota_total": 115.0
          }
        },
        {
          "id": 25,
          "nombres": "Alejandro David",
          "apellidos": "Fernandez Sanchez",
          "direccion": "Avenida 234, Ciudad Imaginaria",
          "acudiente": "Mara Fernandez",
          "telefonos": { "celular": "5559012345", "fijo": "5556789012" },
          "estado": "Inscrito",
          "riesgo": "Alto",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 26,
          "nombres": "Camila Sofia",
          "apellidos": "Ramirez Gomez",
          "direccion": "Calle 567, Ciudad Imaginaria",
          "acudiente": "Diego Ramirez",
          "telefonos": { "celular": "5550123456", "fijo": "5557890123" },
          "estado": "Expulsado",
          "riesgo": "Alto",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 27,
          "nombres": "Mateo Andres",
          "apellidos": "Martinez Gomez",
          "direccion": "Avenida 890, Ciudad Imaginaria",
          "acudiente": "Laura Martinez",
          "telefonos": { "celular": "5552345678", "fijo": "5556789012" },
          "estado": "Inscrito",
          "riesgo": "Medio",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        },
        {
          "id": 28,
          "nombres": "Natalia Alejandra",
          "apellidos": "Ramirez Gomez",
          "direccion": "Calle 345, Ciudad Imaginaria",
          "acudiente": "Diego Ramirez",
          "telefonos": { "celular": "5556789012", "fijo": "5559876543" },
          "estado": "Inscrito",
          "riesgo": "Medio",
          "modulos": {
            "modulo1": "no asignado",
            "modulo2": "no asignado",
            "modulo3": "no asignado"
          }
        }
      ]
    }
]

// creación del json trainers

var trainers=[
  {
      "trainer": [
          {
              "id": 1,
              "nombre": "Pedro",
              "apellido": "Rodrigues",
              "Horario": "6A.M-10A.M",
              "ruta": " NodeJS",
              "grupo": "T1"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 2,
              "nombre": "Julian",
              "apellido": "Gomez",
              "Horario": "10A.M - 2P.M",
              "ruta": "No asignada",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 3,
              "nombre": "Luis",
              "apellido": "sanchez",
              "Horario": "2P.M-6P.M",
              "ruta": " NodeJS",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 4,
              "nombre": "Nacho",
              "apellido": "Molina",
              "Horario": "6P.M - 10P.M",
              "ruta": "No asignada",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 5,
              "nombre": "Jhonatan",
              "apellido": "Villamizar",
              "Horario": "6A.M - 10A.M",
              "ruta": "No asignada",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 6,
              "nombre": "David",
              "apellido": "Gonzalo",
              "Horario": "10A.M - 2P.M",
              "ruta": "NetCore",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 7,
              "nombre": "Jesus",
              "apellido": "Rincon",
              "Horario": "2P.M - 6P.M",
              "ruta": "No asignada",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 8,
              "nombre": "Diego",
              "apellido": "Rey",
              "Horario": "6P.M - 10P.M",
              "ruta": "No asignada",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 9,
              "nombre": "Jose",
              "apellido": "Alberto",
              "Horario": "6A.M - 10A.M",
              "ruta": "NetCore",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 10,
              "nombre": "Albert",
              "apellido": "Montolla",
              "Horario": "10A.M - 2P.M",
              "ruta": "Java",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 11,
              "nombre": "Alberto",
              "apellido": "Mota",
              "Horario": "2P.M - 6P.M",
              "ruta": "Java",
              "grupo": "no asignado"
          }
      ]
  },
  {
      "trainer": [
          {
              "id": 12,
              "nombre": "Ruben",
              "apellido": "vega",
              "Horario": "6P.M - 10P.M",
              "ruta": "Java",
              "grupo": "no asignado"
          }
      ]
  }
]
var bucleprincipal=true
while (bucleprincipal==true){// se realiza el bucle principal de opciones 

    console.log("Menu principal")// se muestra el menu de opciones principales
    console.log("(1) Campers")
    console.log("(2) Trainers")
    console.log("(3) Coordinador")
    console.log("(4) Salir del programa")
    var opcion=prompt("Ingrese la opcion deseada")
    if (opcion==1){ // se imprimen los datos del camper que ingrese su id

      console.log("#######Camper#########")

      var idCamper=parseInt(prompt("Ingrese tu id de camper:"))
      for (var grupo of Campers){

        for (var camper of grupo.campers){

          if (camper.id == idCamper){
            console.log("ID", camper.id);
            console.log("Nombres:", camper.nombres);
            console.log("Apellidos:", camper.apellidos);
            console.log("Direccion:", camper.direccion);
            console.log("Acudiente:", camper.acudiente);
            console.log("Telefonos:", camper.telefonos);
            console.log("Estado:", camper.estado);
            console.log("Riesgo:", camper.riesgo);
            console.log("Modulos:", camper.modulos);
            
          }
        }
        
      }
      
          
        
    }else if(opcion==2){// se imprime los datos del Trainer que ingrese su id
      var bucleTrainer=true
      while (bucleTrainer==true){
        console.log("################################")
        console.log("Menu trainers")
        console.log("################################")
        console.log("(1) Verificar informacion del trainer")
        console.log("(2) Reportes")
        console.log("(3) Regresar al menu principal")
        var opcio=prompt("Ingrese la opcion deseada")
        if (opcio==1){
          
          var idTrainer=prompt("Ingrese tu id para ver tus datos");
          for (var grupo of trainers){

            for (var trainer of grupo.trainer){

              if (trainer.id== idTrainer){
                console.log("ID:",trainer.id);
                console.log("nombre:", trainer.nombre);
                console.log("apellido:", trainer.apellido);
                console.log("Horario:", trainer.Horario);
                console.log("ruta:", trainer.ruta);
                console.log("grupo:", trainer.grupo);
                
              }

            }
            
            
          }
          


        }else if(opcio==2){

          var bulianito=true
          while (bulianito==true){
              console.log("Menu de reportes")// se crea el menu de los reportes y se muestran las opciones al usuario
              console.log("(1)Listar los **campers** que se encuentren en estado de inscrito.")
              console.log("(2)Listar los **campers** que aprobaron el examen inicial.")
              console.log("(3)Listar los entrenadores que se encuentran trabajando con **CampusLands**.")
              console.log("(4)Listar los **campers** que cuentan con bajo rendimiento.")
              console.log("(5)Listar los **campers** y **trainers** que se encuentren asociados a una ruta de entrenamiento.")
              console.log("(6)Mostrar cuantos **campers** perdieron y aprobaron cada uno de los módulos teniendo en cuenta la ruta de entrenamiento y el entrenador encargado.")
              console.log("(7)volver al menu principal")
              var respuesta=prompt("Ingrese la opción deseada")

              if (respuesta==1){// se imprimen los campers que esten inscritos
                console.log("Los campers que se encuentran en estado inscrito son");
                var campersinscrito="Inscrito";
                console.log("######## Campers Inscrito #########")
                for (var grupo of Campers){
                  for (var camper of grupo.campers){

                    if (camper.estado == campersinscrito){

                      console.log("ID", camper.id);
                      console.log("Nombres:", camper.nombres);
                      console.log("Apellidos:", camper.apellidos);
                      console.log("Direccion:", camper.direccion);
                      console.log("Acudiente:", camper.acudiente);
                      console.log("Telefonos:", camper.telefonos);
                      console.log("Estado:", camper.estado);
                      console.log("Riesgo:", camper.riesgo);
                      console.log("Modulos:", camper.modulos);
                    }
                  }
                  
                }
                
                
              } else if (respuesta==2){// se imprimen los campers que hallan aprobado el examen inicial
                console.log("Los campers que aprobaron el examen inicial son:");
                var campersAprobados="Aprobado";
                console.log("######## Campers Aprobados #########")
                for (var grupo of Campers){
                  for (var camper of grupo.campers){

                    if (camper.estado == campersAprobados){

                      console.log("ID", camper.id);
                      console.log("Nombres:", camper.nombres);
                      console.log("Apellidos:", camper.apellidos);
                      console.log("Direccion:", camper.direccion);
                      console.log("Acudiente:", camper.acudiente);
                      console.log("Telefonos:", camper.telefonos);
                      console.log("Estado:", camper.estado);
                      console.log("Riesgo:", camper.riesgo);
                      console.log("Modulos:", camper.modulos);
                      
                    }
                  }
                  
                }

          } else if (respuesta==3){// Se imprimen los entrenadores que se encuentren trabajando en campusland
            console.log("los entrenadores que se encuentran trabajando con **CampusLands** son:")
            for (var grupo of trainers){

              for (var trainer of grupo.trainer){

                console.log("ID:",trainer.id);
                console.log("nombre:", trainer.nombre);
                console.log("apellido:", trainer.apellido);
                console.log("Horario:", trainer.Horario);
                console.log("ruta:", trainer.ruta);
                console.log("grupo:", trainer.grupo);

          }
        }
        } else if (respuesta==4){// Se imprimen los campers con un rendimiento bajo
          console.log("Los campers que cuentan con bajo rendimiento son:");
                var campersRendimiento="Alto";
                console.log("######## Campers con bajo rendimiento #########")
                for (var grupo of Campers){
                  for (var camper of grupo.campers){

                    if (camper.riesgo == campersRendimiento){

                      console.log("ID", camper.id);
                      console.log("Nombres:", camper.nombres);
                      console.log("Apellidos:", camper.apellidos);
                      console.log("Direccion:", camper.direccion);
                      console.log("Acudiente:", camper.acudiente);
                      console.log("Telefonos:", camper.telefonos);
                      console.log("Estado:", camper.estado);
                      console.log("Riesgo:", camper.riesgo);
                      console.log("Modulos:", camper.modulos);
                      
                    }
                  }
                  
                }

        } else if (respuesta==5){// Se imprimen los campers y trainer que esten asociados a una ruta de entrenamiento
          console.log("los **campers** y **trainers** que se encuentren asociados a una ruta de entrenamiento son:");
                var campersAprobados="Aprobado";
                console.log("######## los **campers** asociados a una ruta de entrenamiento son #########")
                for (var grupo of Campers){
                  for (var camper of grupo.campers){

                    if (camper.estado == campersAprobados){

                      console.log("ID", camper.id);
                      console.log("Nombres:", camper.nombres);
                      console.log("Apellidos:", camper.apellidos);
                      console.log("Direccion:", camper.direccion);
                      console.log("Acudiente:", camper.acudiente);
                      console.log("Telefonos:", camper.telefonos);
                      console.log("Estado:", camper.estado);
                      console.log("Riesgo:", camper.riesgo);
                      console.log("Modulos:", camper.modulos);
                      
                    }
                  }
                  
                }
                console.log("######## los **trainers** asociados a una ruta de entrenamiento son #########")
                var rutatrainer="No asignada"
                for (var grupo of trainers){

                  for (var trainer of grupo.trainer){
      
                    if (trainer.ruta != rutatrainer){
                      console.log("ID:",trainer.id);
                      console.log("nombre:", trainer.nombre);
                      console.log("apellido:", trainer.apellido);
                      console.log("Horario:", trainer.Horario);
                      console.log("ruta:", trainer.ruta);
                      console.log("grupo:", trainer.grupo);
    
                    }
      
                  }
              
                }
        } else if (respuesta==6){// Se imprimen los campers que aprobaron y reprobaron 
          console.log("Los **campers** perdieron y aprobaron cada uno de los módulos teniendo en cuenta la ruta de entrenamiento y el entrenador encargado.")
          console.log("Los campers que perdieron son:")
          var campersReprobados="Reprobado";
          for (var grupo of Campers){
            for (var camper of grupo.campers){

              if (camper.estado == campersReprobados){
                console.log("ID", camper.id);
                console.log("Nombres:", camper.nombres);
                console.log("Apellidos:", camper.apellidos);
                console.log("Direccion:", camper.direccion);
                console.log("Acudiente:", camper.acudiente);
                console.log("Telefonos:", camper.telefonos);
                console.log("Estado:", camper.estado);
                console.log("Riesgo:", camper.riesgo);
                console.log("Modulos:", camper.modulos);
                
              }
            }
            
          }
          console.log("")
          console.log("Los campers que aprobaron son:")
          var campersAprobados="Aprobado";
          for (var grupo of Campers){
            for (var camper of grupo.campers){

              if (camper.estado == campersAprobados){
                console.log("ID", camper.id);
                console.log("Nombres:", camper.nombres);
                console.log("Apellidos:", camper.apellidos);
                console.log("Direccion:", camper.direccion);
                console.log("Acudiente:", camper.acudiente);
                console.log("Telefonos:", camper.telefonos);
                console.log("Estado:", camper.estado);
                console.log("Riesgo:", camper.riesgo);
                console.log("Modulos:", camper.modulos);
                
              }
            }
            
          }


        }else if (respuesta==7){// se finaliza la opción de reportes y se vuelve al menu de Trainer
          console.log("Se volvio al menu Trainer")
          var bulianito=false
        }
    }
    }else if (opcio==3){// se finaliza la opcion de Trainer y se vuelve al menu principal
      var bucleTrainer=false
    }
  }

    }else if(opcion==3){// Se crea el menu para la opción del coordinador
      var buclecoordinador=true
      while (buclecoordinador==true){

        console.log("######################")
        console.log("Menu coordinador")
        console.log("######################")
        console.log("(1) Agregar nota del examen de ingreso")
        console.log("(2) Añadir nuevo campers")
        console.log("(3) Asignar notas a los campers")
        console.log("(4) Asignar las rutas de entrenamiento a los grupos")
        console.log("(5) Crear nuevas rutas")
        console.log("(6) Asignar los trainers encargados de cada ruta")
        console.log("(7) Realizar reportes")
        console.log("(8) Salir al menu principal")
        var respues=prompt("Ingrese la opción deseada:")
        if (respues==1){
          console.log("#######Camper#########")

        var idCamper=parseInt(prompt("Ingrese el id de camper:"));
        for (var grupo of Campers){

          for (var camper of grupo.campers){

            if (camper.id == idCamper){
              console.log("ID", camper.id);
              console.log("Nombres:", camper.nombres);
              console.log("Apellidos:", camper.apellidos);
              var notaTeorica=parseInt(prompt("Ingrese la nota teorica"));
              var notaPractica=parseInt(prompt("Ingrese la nota practica"));
              var notatotal= notaTeorica + notaPractica;
              var totalnota=notatotal/2;
              console.log("Nota total:",totalnota)
              if (totalnota>=60){
                camper.estado="Aprobado"
              }else if (totalnota<60){
                camper.estado="Reprobado"
              }
              console.log("El camper se encuentra",camper.estado," en el examen")
              
            }
          }
          
        }

        }else if(respues==2){
          console.log("Ingrese la siguiente informacion para añadir un nuevo camper:")
          var nuevoCamper=[]
          nuevoCamper["id"]=parseInt(prompt("Ingrese el id del nuevo camper:"))
          nuevoCamper["nombres"]=prompt("Ingrese los nombres del camper:")
          nuevoCamper["apellidos"]=prompt("Ingrese los apellidos del camper:")
          nuevoCamper["direccion"]=prompt("Ingrese la direccion del camper:")
          nuevoCamper["acudiente"]=prompt("Ingrese el nombre del acudiente:")
          nuevoCamper["telefonos"]=prompt("Ingrese el numero de telefono:")
          nuevoCamper["estado"]=prompt("Ingrese el estado en que se encuentra el camper")
          nuevoCamper["riesgo"]=prompt("Ingrese el riesgo en que se encuentra el camper")
          Campers.push(nuevoCamper)
          console.log("Camper añadido correctamente:")



        }else if (respues==3){
          console.log("#######Camper#########")

          var idCamper=parseInt(prompt("Ingrese el id de camper:"));
          for (var grupo of Campers){
  
            for (var camper of grupo.campers){
  
              if (camper.id == idCamper){
                console.log("ID", camper.id);
                console.log("Nombres:", camper.nombres);
                console.log("Apellidos:", camper.apellidos);
                var notaTeorica=parseInt(prompt("Ingrese la nota teorica"));
                var notaPractica=parseInt(prompt("Ingrese la nota practica"));
                var notatotal= notaTeorica + notaPractica;
                var totalnota=notatotal/2;
                console.log(totalnota)
                if (totalnota>=60){
                  camper.estado="Aprobado"
                }else if (totalnota<60){
                  camper.estado="Reprobado"
                }
                console.log("El camper se encuentra",camper.estado," en el examen")
                
              }
            }
            
          }

        } else if(respues==7){
          var bulianito=true
          while (bulianito==true){
              console.log("Menu de reportes")// se crea el menu de los reportes y se muestran las opciones al usuario
              console.log("(1)Listar los **campers** que se encuentren en estado de inscrito.")
              console.log("(2)Listar los **campers** que aprobaron el examen inicial.")
              console.log("(3)Listar los entrenadores que se encuentran trabajando con **CampusLands**.")
              console.log("(4)Listar los **campers** que cuentan con bajo rendimiento.")
              console.log("(5)Listar los **campers** y **trainers** que se encuentren asociados a una ruta de entrenamiento.")
              console.log("(6)Mostrar cuantos **campers** perdieron y aprobaron cada uno de los módulos teniendo en cuenta la ruta de entrenamiento y el entrenador encargado.")
              console.log("(7)volver al menu principal")
              var respuesta=prompt("Ingrese la opción deseada")

              if (respuesta==1){// se imprimen los campers que esten inscritos
                console.log("Los campers que se encuentran en estado inscrito son");
                var campersinscrito="Inscrito";
                console.log("######## Campers Inscrito #########")
                for (var grupo of Campers){
                  for (var camper of grupo.campers){

                    if (camper.estado == campersinscrito){

                      console.log("ID", camper.id);
                      console.log("Nombres:", camper.nombres);
                      console.log("Apellidos:", camper.apellidos);
                      console.log("Direccion:", camper.direccion);
                      console.log("Acudiente:", camper.acudiente);
                      console.log("Telefonos:", camper.telefonos);
                      console.log("Estado:", camper.estado);
                      console.log("Riesgo:", camper.riesgo);
                      console.log("Modulos:", camper.modulos);
                    }
                  }
                  
                }
                
                
              } else if (respuesta==2){// se imprimen los campers que hallan aprobado el examen inicial
                console.log("Los campers que aprobaron el examen inicial son:");
                var campersAprobados="Aprobado";
                console.log("######## Campers Aprobados #########")
                for (var grupo of Campers){
                  for (var camper of grupo.campers){

                    if (camper.estado == campersAprobados){

                      console.log("ID", camper.id);
                      console.log("Nombres:", camper.nombres);
                      console.log("Apellidos:", camper.apellidos);
                      console.log("Direccion:", camper.direccion);
                      console.log("Acudiente:", camper.acudiente);
                      console.log("Telefonos:", camper.telefonos);
                      console.log("Estado:", camper.estado);
                      console.log("Riesgo:", camper.riesgo);
                      console.log("Modulos:", camper.modulos);
                      
                    }
                  }
                  
                }

          } else if (respuesta==3){// Se imprimen los entrenadores que se encuentren trabajando en campusland
            console.log("los entrenadores que se encuentran trabajando con **CampusLands** son:")
            for (var grupo of trainers){

              for (var trainer of grupo.trainer){

                console.log("ID:",trainer.id);
                console.log("nombre:", trainer.nombre);
                console.log("apellido:", trainer.apellido);
                console.log("Horario:", trainer.Horario);
                console.log("ruta:", trainer.ruta);
                console.log("grupo:", trainer.grupo);

          }
        }
        } else if (respuesta==4){// Se imprimen los campers con un rendimiento bajo
          console.log("Los campers que cuentan con bajo rendimiento son:");
                var campersRendimiento="Alto";
                console.log("######## Campers con bajo rendimiento #########")
                for (var grupo of Campers){
                  for (var camper of grupo.campers){

                    if (camper.riesgo == campersRendimiento){

                      console.log("ID", camper.id);
                      console.log("Nombres:", camper.nombres);
                      console.log("Apellidos:", camper.apellidos);
                      console.log("Direccion:", camper.direccion);
                      console.log("Acudiente:", camper.acudiente);
                      console.log("Telefonos:", camper.telefonos);
                      console.log("Estado:", camper.estado);
                      console.log("Riesgo:", camper.riesgo);
                      console.log("Modulos:", camper.modulos);
                      
                    }
                  }
                  
                }

        } else if (respuesta==5){// Se imprimen los campers y trainer que esten asociados a una ruta de entrenamiento
          console.log("los **campers** y **trainers** que se encuentren asociados a una ruta de entrenamiento son:");
                var campersAprobados="Aprobado";
                console.log("######## los **campers** asociados a una ruta de entrenamiento son #########")
                for (var grupo of Campers){
                  for (var camper of grupo.campers){

                    if (camper.estado == campersAprobados){

                      console.log("ID", camper.id);
                      console.log("Nombres:", camper.nombres);
                      console.log("Apellidos:", camper.apellidos);
                      console.log("Direccion:", camper.direccion);
                      console.log("Acudiente:", camper.acudiente);
                      console.log("Telefonos:", camper.telefonos);
                      console.log("Estado:", camper.estado);
                      console.log("Riesgo:", camper.riesgo);
                      console.log("Modulos:", camper.modulos);
                      
                    }
                  }
                  
                }
                console.log("######## los **trainers** asociados a una ruta de entrenamiento son #########")
                var rutatrainer="No asignada"
                for (var grupo of trainers){

                  for (var trainer of grupo.trainer){
      
                    if (trainer.ruta != rutatrainer){
                      console.log("ID:",trainer.id);
                      console.log("nombre:", trainer.nombre);
                      console.log("apellido:", trainer.apellido);
                      console.log("Horario:", trainer.Horario);
                      console.log("ruta:", trainer.ruta);
                      console.log("grupo:", trainer.grupo);
    
                    }
      
                  }
              
                }
        } else if (respuesta==6){// Se imprimen los campers que aprobaron y reprobaron 
          console.log("Los **campers** perdieron y aprobaron cada uno de los módulos teniendo en cuenta la ruta de entrenamiento y el entrenador encargado.")
          console.log("Los campers que perdieron son:")
          var campersReprobados="Reprobado";
          for (var grupo of Campers){
            for (var camper of grupo.campers){

              if (camper.estado == campersReprobados){
                console.log("ID", camper.id);
                console.log("Nombres:", camper.nombres);
                console.log("Apellidos:", camper.apellidos);
                console.log("Direccion:", camper.direccion);
                console.log("Acudiente:", camper.acudiente);
                console.log("Telefonos:", camper.telefonos);
                console.log("Estado:", camper.estado);
                console.log("Riesgo:", camper.riesgo);
                console.log("Modulos:", camper.modulos);
                
              }
            }
            
          }
          console.log("")
          console.log("Los campers que aprobaron son:")
          var campersAprobados="Aprobado";
          for (var grupo of Campers){
            for (var camper of grupo.campers){

              if (camper.estado == campersAprobados){
                console.log("ID", camper.id);
                console.log("Nombres:", camper.nombres);
                console.log("Apellidos:", camper.apellidos);
                console.log("Direccion:", camper.direccion);
                console.log("Acudiente:", camper.acudiente);
                console.log("Telefonos:", camper.telefonos);
                console.log("Estado:", camper.estado);
                console.log("Riesgo:", camper.riesgo);
                console.log("Modulos:", camper.modulos);
                
              }
            }
            
          }

        }else if (respuesta==7){// se finaliza la opción de reportes y se vuelve al menu de Trainer
          console.log("Se volvio al menu Trainer")
          var bulianito=false
        }
    }

        } else if(respues==8){
          var buclecoordinador=false
        }
    }


    }else if (opcion==4){// Se finaliza el programa
        console.log("Se finalizo el programa")
        var bucleprincipal=false
    }
}

// Programa desarrollado por Camilo Machuca Vega Grupo:T2