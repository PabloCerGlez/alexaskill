const Alexa=require('ask-sdk');

 var jugadoresNombre = [];
 var turno,x;
   var jugadoruno; 
  var jugadordos ;
  var jugadortres ;
  var jugadorcuatro; 
const vidas_alexa=5;
const LaunchRequestHandler={
  canHandle(handlerInput){
    
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
   
    
  },
  handle(handlerInput){
    return handlerInput.responseBuilder
    .speak(Bienvenida)
   .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./main.json'),
        datasources: { 
          "bodyTemplate7Data": {
              
              
        "type": "object",
        "objectId": "bt7Sample",
        "title": "Calabozo de historia",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "image": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/InicioSkill.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/InicioSkill.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "logoUrl": "https://s3.amazonaws.com/emarketcerglez/skill_logo+(1).png",
        "hintText": "Try, \"Alexa, search for blue cheese\""
    
          }
        }
      })
 
    .reprompt(AYUDA_REPROMPT)
    
    .getResponse();
  },
  
};

const RespuestaHandler = {
  canHandle(handlerInput){
   const request = handlerInput.requestEnvelope.request;

    
    
    return request.intent.name === 'respuestaItent';
  },
   handle(handlerInput){
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const respuestaSession = sessionAttributes.respuesta; 
    console.log(respuestaSession);
    const respuestaUser = handlerInput.requestEnvelope.request.intent.slots.respuesta.value;
    console.log(respuestaUser);
    if (respuestaSession!=respuestaUser){
        var speech ="jajajajaja parece ser que alguien va a perder, tu respuesta es incorrecta, deberías hacer un mayor esfuerzo para ganarme";
        console.log(speech);



return handlerInput.responseBuilder
      .speak(speech)
       .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./main.json'),
        datasources: { 
          "bodyTemplate7Data": {
              
              
        "type": "object",
        "objectId": "bt7Sample",
        "title": "Calabozo de historia",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "image": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/InorrectaSkill.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/InorrectaSkill.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "logoUrl": "https://s3.amazonaws.com/emarketcerglez/skill_logo+(1).png",
        "hintText": "Try, \"Alexa, search for blue cheese\""
    
          }
        }
      })
      .reprompt(speech)
      .getResponse();




    }else{
      speech= "Ohhhhhhhhh rayos!, tu respuesta es correcta, aunque no será tan facíl de ganarme, sigue así y puede que tengas una oportunidad";
      console.log(speech);
        

return handlerInput.responseBuilder
      .speak(speech)
       .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./main.json'),
        datasources: { 
          "bodyTemplate7Data": {
              
              
        "type": "object",
        "objectId": "bt7Sample",
        "title": "Calabozo de historia",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "image": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/CorrectaSkill.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/CorrectaSkill.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "logoUrl": "https://s3.amazonaws.com/emarketcerglez/skill_logo+(1).png",
        "hintText": "Try, \"Alexa, search for blue cheese\""
    
          }
        }
      })
      .reprompt(speech)
      .getResponse();



    }
    
    
      
      
      
  },
  
};



const JugarHandler = {

canHandle(handlerInput){
  
  const request = handlerInput.requestEnvelope.request;
  return  request.intent.name==='jugadoresIntent';
},
async handle(handlerInput){
  const request = handlerInput.requestEnvelope.request;
  jugadoruno = request.intent.slots.nombreuno.value;
  jugadordos = request.intent.slots.nombredos.value;
  jugadortres = request.intent.slots.nombretres.value;
  jugadorcuatro = request.intent.slots.nombrecuatro.value;


  //preguntas  
   const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  jugadoresNombre = [jugadoruno, jugadordos, jugadortres, jugadorcuatro];
   var turno = Math.floor(Math.random()*jugadoresNombre.length);
    var x = Math.floor(Math.random()*preguntasrespuesta.length);
    var pregunta = preguntasrespuesta[x].pregunta;
    var respuesta = preguntasrespuesta[x].respuesta;
    var jugador = jugadoresNombre[turno];
    
    sessionAttributes.respuesta = respuesta;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    sessionAttributes.pregunta = pregunta;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes); 

    sessionAttributes.jugador = jugador;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);    
 
    //storePastFactInSession(handlerInput,respuesta);
    const speechout = jugador+', Contesta correctamente la siguiente pregunta, dime, '+ pregunta;
        
    return handlerInput.responseBuilder
      .speak(speechout)
      
         .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./main.json'),
        datasources: { 
          "bodyTemplate7Data": {
              
              
        "type": "object",
        "objectId": "bt7Sample",
        "title": "Calabozo de historia",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "image": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/PreguntaSkill.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/PreguntaSkill.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "logoUrl": "https://s3.amazonaws.com/emarketcerglez/skill_logo+(1).png",
        "hintText": "Try, \"Alexa, search for blue cheese\""
    
          }
        }
      })
      
      .reprompt(speechout)
      .getResponse();    
  
  
},

  
};


const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(AYUDA_MENSAJE)
      
            .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./main.json'),
        datasources: { 
          "bodyTemplate7Data": {
              
              
        "type": "object",
        "objectId": "bt7Sample",
        "title": "Calabozo de historia",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "image": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/HelpSkill.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/HelpSkill.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "logoUrl": "https://s3.amazonaws.com/emarketcerglez/skill_logo+(1).png",
        "hintText": "Try, \"Alexa, search for blue cheese\""
    
          }
        }
      })
      
      
      
      .reprompt(AYUDA_REPROMPT)
      .getResponse();
  },
};
const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Muchas gracias por usar nuestra skill, te esperamos de nuevo,  podrás vencer a alexina la siguiente vez?')
           .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./main.json'),
        datasources: { 
          "bodyTemplate7Data": {
              
              
        "type": "object",
        "objectId": "bt7Sample",
        "title": "Calabozo de historia",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "image": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/ADIOSSkill.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/ADIOSSkill.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "logoUrl": "https://s3.amazonaws.com/emarketcerglez/skill_logo+(1).png",
        "hintText": "Try, \"Alexa, search for blue cheese\""
    
          }
        }
      })
      
      
      .withShouldEndSession(true)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Se ha terminado la sesión por las siguientes causas: ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('<say-as interpret-as="interjection">épale ocurrió un error</say-as>')
      
             .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./main.json'),
        datasources: { 
          "bodyTemplate7Data": {
              
              
        "type": "object",
        "objectId": "bt7Sample",
        "title": "Calabozo de historia",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/930.jpg",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "image": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/ErrorSkill.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://s3.amazonaws.com/emarketcerglez/ErrorSkill.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "logoUrl": "https://s3.amazonaws.com/emarketcerglez/skill_logo+(1).png",
        "hintText": "Try, \"Alexa, search for blue cheese\""
    
          }
        }
      })
      
      .reprompt('Lo siento, ocurrió un error')
      .getResponse();
  },
};



const AYUDA_MENSAJE='es necesario que sean un total de 4 participantes por ronda. la meta es vencermea mi respondiendo correctamente las pregunta que se te indicaran';
const AYUDA_REPROMPT ='¿Como te puedo ayudar?';
const SKILL_NOMBRE = 'calabozos de historia';
const STOP_MENSAJE='Gracias por usar la skill el Calabozos de historia de esperamos pronto , adios';
const Bienvenida='Bienvenido a Calabozos de historia, en este lugar la reina soy yo! estan preparados para la contienda? si no es asi digan cancelar para salir';


const skillBuilder= Alexa.SkillBuilders.standard();
exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    JugarHandler,
    RespuestaHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
.lambda();


var preguntasrespuesta= [{
  'pregunta':'Cual fue el primer presidente de México?',
  'respuesta':'guadalupe victoria'
},{
  'pregunta':'Cual fue la primera cultura Mesoamericana?',
  'respuesta':'olmeca'
},{
  'pregunta':'Cual es la fecha de la independencia de Mexíco',
  'respuesta':'16 de septiembre de 1810'
},{
  'pregunta':'Cual es la fecha de la revolucion de Mexíco',
  'respuesta':'once de noviembre de mil novecientos diez'
},
{
  'pregunta':'nombre completo de quien inicio el movimiento de la Independecia Mexicana',
  'respuesta':'miguel hidalgo y costilla'
},{
  'pregunta':'Cuando fue la batalla de Puebla?',
  'respuesta':'5 de mayo de 1862'
},
{
 'pregunta':'Cuando es el dia del nacimiento de Benito Juarez',
 'respuesta':'21 de Marzo'
},
{
 'pregunta':'Es la civilizacion que se fundo desde la epoca clasica, y su apogeo fue en la era postclasica',
 'respuesta':'Maya'
},
{
 'pregunta':'Quien fue quien descubrio america?',
 'respuesta':'Cristobal Colon'
},
{
 'pregunta':'Año en que se firmo la primera constituciòn de Mèxico',
 'respuesta':'1817'
},
{
 'pregunta':'Cuantos años durò el porfiriato?',
 'respuesta':'30 años'
},
{
 'pregunta':'Quien fue el fundador de la Revoluciòn Mexicana?',
 'respuesta':'Francisco I. Madero'
}
];

