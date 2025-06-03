

    //fix for send analitics for preview.
    var isPreview = "False".toLowerCase();
    if (!isPreview) {
        isPreview = "false";
    }


    (function() {
        var shouldSendReport = false;
        var msg;

        //if (typeof game != 'undefined') {
        try {

            window.gameData = {
                gameLocale: "es-ES",
                gameId: "b516b5b7-3804-4aec-8426-a9ff0e31a32d",
                gameSpecificData:{  
                   "results":[  
                      {  
                         "id":"24ba162a-fbbd-460c-9c31-547a8fc28ffe",
                         "image":{  
                            "originalImageURL":"", 
                            "croppedImageURL":"",
                            "coords":{  
                               "x":106,
                               "y":4,
                               "width":763,
                               "height":572
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_kill_bill\"><\/div>",
                         "text":"Si hay algo que sabe hacer Will Hayes, es comunicar. Comunicarse con su hija, comunicarse con los votantes, con el público...Es un padre separado, pero supo hacer de su casa de padre soltero un hogar para su hija, su prioridad en la vida. Sabe reconocer sus errores, lo cual lo hace muy humano y lo aleja del 'porque yo lo digo' de los padres tradicionales. Es tan humano que su hija pre adolescente tiene que explicarle que debe ir a buscar a la chica de la cual está enamorado. Y tú, ¿qué tuviste que explicarle a papá?.",
                         "title":"Will Hayes"
                      },
                      {  
                         "id":"73c82448-0f29-45dc-8346-a43aa94a3cbb",
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":53,
                               "width":2334,
                               "height":1752
                            },
                            "imageSize":"landscape",
                            "width":"639",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_harley\"><\/div>",
                         "text":"Aunque el amor por su hijo y por su familia (vamos, Dory no necesita ser la madre de Nemo para ser parte de la familia) es indiscutible, el padre de Nemo puede tocarnos de nervios por sobreprotector. Su buen corazón hace que Marlin aprenda de sus errores y supere sus prejuicios. Es un papá que puede convertirse en un gran amigo...con la ayuda de unas gotas de Nervocalm.",
                         "title":"Marlin"
                      },
                      {  
                         "id":"1d6e095e-8880-4dfa-9fcd-5d79111b4ddb",
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":1920,
                               "height":1440
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_lisa\"><\/div>",
                         "text":"No hay ausente más adorable que Edward Bloom. Ausente por su trabajo, aunque su corazón estás en casa. La película es una fábula tan hermosa que se le perdona la moraleja. La reconciliación del hijo con su padre poco convencional tiene una lección, pero también es una forma de vestir con imaginación la figura del padre proveedor que cuya presencia en el hogar podría ser prescindible. Todo bien con la película, pero no vayamos por la vida romantizando la ausencia de los padres.",
                         "title":"Edward Bloom"
                      },
                      {  
                         "id":"b85a1216-3b52-4120-abe8-4d703d9ddcbd",
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":620,
                               "height":465
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_merida\"><\/div>",
                         "text":"Robert Haynes es un hombre rudo. Tiene sus motivos: es un ex convicto. Una noche, en medio de una trifulca que sale mal, termina secuestrando a un niño. Un niño sin padre que se convierte en su compañero de aventuras. Haynes asume el papel del padre ausente en medio de una situación inverosímil, pero que en la película resulta no solo creíble, sino entrañable. Lo más asombroso es ver cómo un hombre de carácter áspero es quien le enseña al niño la ternura. Padre no siempre es el que engendra.",
                         "title":"Robert Haynes"
                      },
                      {  
                         "id":"4ee8c087-c1ad-4548-8d9e-d60bd16353de",
                         "image":{  
                            "originalImageURL":"img/woods.jpg",
                            "croppedImageURL":"img/woods.jpg",
                            "coords":{ 
                               "x":0,
                               "y":0,
                               "width":1149,
                               "height":861
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         },
                         "html": "<div class=\"box_woods\"><\/div>",
                         "text":"Henry Jones papá fue encarnado magníficamente por Sean Connery a fines de los 80, en una película que explicaba los trumas infantiles y adolescentes del prototipo de macho que encarnaba Harrison Ford en Indiana Jones. Un padre viudo, sumergido en su trabajo de profesor de literatura medieval, que le pide a su hijo que cuente hasta 100 en griego antes de responderle a una pregunta importante, es quien marca la formación del aventurero Indiana. La distancia que se genera entre ambos durante la adolescencia se acorta cuando Indiana comparte una de sus aventuras con su padre. Ya saben, muchachos: dejar que sus padres ingresen a su mundo, puede ser la solución a sus daddy issues.",
                         "title":"Henry Jones"
                      }
                   ],
                   "questions":[  
                      {  
                         "id":"dad482e2-e90c-4627-820f-a263f71d9a19",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Cuando eras pequeÃ±o o pequeÃ±a tu papÃ¡ querÃ­a que tÃº, de grande...",
                         "answers":[  
                            {  
                               "id":"c1fa6830-a368-4099-8e48-64abbf55fbda",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Elija una carrera que me ayude a tener una buena vida."
                            },
                            {  
                               "id":"08bdcae9-53c9-4af5-8216-b5fd018ba278",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Nunca me dijo nada, pero me enseÃ±Ã³ muchas cosas que me ayudaron a elegir mi carrera."
                            },
                            {  
                               "id":"f16effcf-8414-4437-8f46-84dd7c5e333a",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"1"
                               },
                               "text":"Sea feliz y una buena persona."
                            },
                            {  
                               "id":"8b28c687-4e98-4561-b237-808a399f0550",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"1"
                               },
                               "text":"Me guÃ­e por la libertad."
                            },
                            {  
                               "id":"29ef1aa0-b8e3-4249-854b-1f9c1360110f",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"1"
                               },
                               "text":"Siga mi curiosidad."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":130,
                               "y":0,
                               "width":1865,
                               "height":1398
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"41c612af-2496-4e2b-9463-34e2a3139e1e",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Â¿QuÃ© carasterÃ­stica asocias con tu papÃ¡?",
                         "answers":[  
                            {  
                               "id":"87f1ec1d-5e9e-48ff-82e4-1e5480c5df5a",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Estudioso."
                            },
                            {  
                               "id":"4168e534-00dc-4650-96ff-d9fe307d7a4e",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Reflexivo."
                            },
                            {  
                               "id":"87f1ec1d-5e9e-48ff-82e4-1e5480c5df5a",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"SoÃ±ador."
                            },
                            {  
                               "id":"ed9d8f99-8b92-4033-a917-1a1710d9470a",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"2"
                               },
                               "text":"Sobreprotector."
                            },
                            {  
                               "id":"fb7c7f25-bd2c-44ae-bebb-fcf017a06820",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"2"
                               },
                               "text":"Rudo."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":960,
                               "height":720
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"a19ba906-b35c-4a38-84b3-2ceccac0f3fc",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Â¿QuÃ© frase representa mÃ¡s a tu papÃ¡?",
                         "answers":[  
                            {  
                               "id":"5a4e7629-26e3-4dab-84e5-cff04a367f1c",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"1"
                               },
                               "text":"Te prometo que jamÃ¡s dejarÃ© que te pase algo."
                            },
                            {  
                               "id":"b3f0ce34-debc-4607-bf17-3c12e7d0aa31",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"1"
                               },
                               "text":"No soy perfecto, pero tampoco soy el peor."
                            },
                            {  
                               "id":"fcc0a2b5-ecaa-4235-89bc-3ede5bf81ce1",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"2"
                               },
                               "text":"Este paÃ­s necesita mÃ¡s sentido del humor."
                            },
                            {  
                               "id":"11fd8a89-993b-4ac9-8893-6fc40e3a8e81",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"1"
                               },
                               "text":"Cuanto mÃ¡s difÃ­cil es hacer algo, mayor es la recompensa que te espera al final."
                            },
                            {  
                               "id":"73c761c2-4d53-44f2-8960-786e0bf82c40",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"1"
                               },
                               "text":"A veces me siento a pensar y...la soluciÃ³n se presenta sola."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":305,
                               "y":0,
                               "width":1440,
                               "height":1080
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"b6d5d00a-a08e-4c18-ae4c-276347e1dfbb",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Si tienes un problema, tu papÃ¡...",
                         "answers":[  
                            {  
                               "id":"44b27af1-add3-4c47-9631-e9e178527c38",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Mueve cielo y tierra para ayudarme."
                            },
                            {  
                               "id":"429c990f-642b-4aeb-8804-d2a69f8cc5e6",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Probablemente no se entere, pero si se entera, me acompaÃ±arÃ­a a buscar la soluciÃ³n."
                            },
                            {  
                               "id":"bbeb33e3-7be0-4489-9189-1f11f0ab9a51",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Me ayudarÃ­a a resolverlo."
                            },
                            {  
                               "id":"7f35dcc2-2dde-4a8e-871a-96650e3c22c5",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"2"
                               },
                               "text":"Me dirÃ­a que no me preocupe."
                            },
                            {  
                               "id":"aaec01f6-50c4-4f0e-b4de-fffcb407033e",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"1"
                               },
                               "text":"ConversarÃ­amos mucho para buscar la soluciÃ³n."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":101,
                               "y":0,
                               "width":469,
                               "height":352
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"97c97b86-ea23-444e-8bac-358afa7703ad",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Â¿QuÃ© te enseÃ±Ã³ tu padre en tu niÃ±ez o adolescencia?",
                         "answers":[  
                            {  
                               "id":"aae11059-8438-4ab8-8db1-ebdb2e41d475",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"A ser independiente."
                            },
                            {  
                               "id":"5eceb69e-6ca8-4661-8f46-3c7cccf9065c",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"1"
                               },
                               "text":"Que la vida es dura."
                            },
                            {  
                               "id":"e2d3c807-209f-4213-8717-3455628c1cf4",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"La importancia del libre albedrÃ­o."
                            },
                            {  
                               "id":"76d31984-1769-4445-880f-8996da2bee39",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"1"
                               },
                               "text":"La importancia de actuar correctamente."
                            },
                            {  
                               "id":"76d31984-1769-4445-880f-8996da2bee38",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Que la familia es lo mÃ¡s importante."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":2957,
                               "height":2216
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"62a22d6d-ee60-4240-886e-4a79061ae2f8",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Antes de ser tu papÃ¡, Ã©l...",
                         "answers":[  
                            {  
                               "id":"9983ffb4-2df8-488f-8ddd-b9ff1a96b89c",
                               "image":null,
                               "results":{  

                               },
                               "text":"Su vida era, digamos, errante."
                            },
                            {  
                               "id":"d8e65fa8-6e25-439f-8d64-1757c3b9be1c",
                               "image":null,
                               "results":{  

                               },
                               "text":"Siempre estuvo muy dedicado a su profesiÃ³n."
                            },
                            {  
                               "id":"5b2d8c16-3fce-4883-8e91-e28455a175ae",
                               "image":null,
                               "results":{  

                               },
                               "text":"Siempre quiso formar una familia."
                            },
                            {  
                               "id":"78156eb5-d273-4e87-8e89-c71044dd7ecb",
                               "image":null,
                               "results":{  

                               },
                               "text":"Era un chico normal, aunque tenÃ­a un gran compromiso social."
                            },
                            {  
                               "id":"5a5294e9-3aa8-4d32-9b23-1a8c9d4fc87c",
                               "image":null,
                               "results":{  

                               },
                               "text":"Siempre fue un soÃ±ador"
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":0,
                               "y":0,
                               "width":2797,
                               "height":2100
                            },
                            "imageSize":"landscape",
                            "width":"639",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"f2cb49e0-8344-4939-8bb1-ee97c33bf235",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"Â¿QuÃ© recuerdas mÃ¡s de la relaciÃ³n con tu padre durante tu infancia?",
                         "answers":[  
                            {  
                               "id":"209eed13-ded7-4124-b52e-bcf902fa2209",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"1"
                               },
                               "text":"Que me ayudÃ³ a disfrutar las cosas simples."
                            },
                            {  
                               "id":"2908b1fe-83d4-485b-82f7-7ef628a0a104",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Era un poco distante."
                            },
                            {  
                               "id":"352fe284-7ca4-4902-a554-d5d340dd8140",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Que era aprensivo pero muy cariÃ±oso."
                            },
                            {  
                               "id":"9a03b37a-e774-4eca-8fca-4e7345331005",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"1"
                               },
                               "text":"Que conversÃ¡bamos mucho. Siempre respondÃ­a todas mis preguntas."
                            },
                            {  
                               "id":"8eab6c0f-9b00-412c-8c0d-37433cf7b9a1",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"La verdad es que Ã©l no pasaba mucho tiempo en casa."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":127,
                               "y":0,
                               "width":934,
                               "height":701
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"3cd2ec4a-319d-4cde-81c0-f6ff2fbf8016",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"PodrÃ­as decir que tu papÃ¡ es:",
                         "answers":[  
                            {  
                               "id":"f41df4c7-59a0-4b6c-8d9a-90f6e50e6929",
                               "image":null,
                               "results":{  

                               },
                               "text":"Una persona dedicada a su trabajo."
                            },
                            {  
                               "id":"9eae762b-aab6-48e7-9dcd-5f11d728dbc3",
                               "image":null,
                               "results":{  

                               },
                               "text":"Una persona que me enseÃ±Ã³ a disfrutar la vida."
                            },
                            {  
                               "id":"2f121781-be91-4b86-9697-0b3d1ba6e518",
                               "image":null,
                               "results":{  

                               },
                               "text":"Una persona a la que le cuesta mantener los pies sobre la tierra."
                            },
                            {  
                               "id":"6d2e0dde-913f-4977-b62a-fef3d994698a",
                               "image":null,
                               "results":{  

                               },
                               "text":"Una persona muy justa y equilibrada."
                            },
                            {  
                               "id":"6d2e0dde-913f-4977-b62a-fef3d994698b",
                               "image":null,
                               "results":{  

                               },
                               "text":"Una persona siempre dispuesta a aprender y a romper los prejuicios."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":183,
                               "y":0,
                               "width":875,
                               "height":656
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"3eaa25f6-79a5-4d3d-893e-1dc88cbc16df",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"En el hogar, tu papÃ¡:",
                         "answers":[  
                            {  
                               "id":"d90ea47a-c63a-4597-bd12-d146c26fcdf2",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Se ocupaba de la casa, pero es cierto que nos dÃ¡bamos al abandono cuando mi madre faltaba."
                            },
                            {  
                               "id":"8c475af8-c935-46be-a4e5-17196330712a",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"2"
                               },
                               "text":"No se ocupaba de labores caseras, pues se dedicaba a su trabajo."
                            },
                            {  
                               "id":"f74b8647-035c-4705-bd54-1f3729efeb5d",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"2"
                               },
                               "text":"Se ocupaba de la casa cuando faltaba mi madre."
                            },
                            {  
                               "id":"e7fc13c5-f4ff-4cb8-858f-071feb73e80f",
                               "image":null,
                               "results":{                                      
                                    "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Se preocupaba porque el trabajo en casa sea equilibrado. Era muy diligente."
                            },
                            {  
                               "id":"e7fc13c5-f4ff-4cb8-858f-071feb73e80g",
                               "image":null,
                               "results":{  
                                    "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Nunca tuvo problemas en hacer las cosas de la casa."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":143,
                               "y":0,
                               "width":1200,
                               "height":900
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      },
                      {  
                         "id":"993c427b-ca17-4d8c-a40a-90573da97f24",
                         "selectedMedia":"image",
                         "useImagesInAnswers":false,
                         "text":"DirÃ­as que el estilo de vestir de tu padre es:",
                         "answers":[  
                            {  
                               "id":"a993abf1-6aa2-49d9-b7ec-002d0c95aaa5",
                               "image":null,
                               "results":{  
                                  "24ba162a-fbbd-460c-9c31-547a8fc28ffe":"2"
                               },
                               "text":"Moderno, pero bastante libre."
                            },
                            {  
                               "id":"ad8d38ab-9f41-4ed7-844d-58ebce55c311",
                               "image":null,
                               "results":{  
                                  "b85a1216-3b52-4120-abe8-4d703d9ddcbd":"2"
                               },
                               "text":"Totalmente clÃ¡sico y elegante."
                            },
                            {  
                               "id":"4a4f23c9-0dce-4e61-8b54-838b6c84a5ae",
                               "image":null,
                               "results":{  
                                  "73c82448-0f29-45dc-8346-a43aa94a3cbb":"2"
                               },
                               "text":"Casual."
                            },
                            {  
                               "id":"460b694c-0484-4e37-916e-08d38cc48915",
                               "image":null,
                               "results":{  
                                  "1d6e095e-8880-4dfa-9fcd-5d79111b4ddb":"2"
                               },
                               "text":"Moderno e informal, pero elegante."
                            },
                            {  
                               "id":"460b694c-0484-4e37-916e-08d38cc48916",
                               "image":null,
                               "results":{  
                                  "4ee8c087-c1ad-4548-8d9e-d60bd16353de":"2"
                               },
                               "text":"C{lÃ¡}sico, pero tiene un toque moderno."
                            }
                         ],
                         "image":{  
                            "originalImageURL":"",
                            "croppedImageURL":"",
                            "coords":{  
                               "x":320,
                               "y":0,
                               "width":960,
                               "height":720
                            },
                            "imageSize":"landscape",
                            "width":"640",
                            "height":"480",
                            "isAnimated":false,
                            "fileType":"jpg",
                            "originalFileType":"jpg",
                            "credentials":{  
                               "type":"NA",
                               "value":""
                            }
                         }
                      }
                   ]
                },
                gameImg:"",
                patternData:{  
                   "gameThumb":{  
                      "originalImageURL":"",
                      "croppedImageURL":"079a99c8-99f8-41c6-8633-5e2842c17e80.jpg",
                      "coords":{  
                         "x":214,
                         "y":0,
                         "width":5340,
                         "height":4006
                      },
                      "imageSize":"thumbnail",
                      "width":"126",
                      "height":"83",
                      "isAnimated":false,
                      "fileType":"jpg",
                      "originalFileType":"jpg",
                      "credentials":{  
                         "type":"NA",
                         "value":""
                      }
                   },
                   "Footer":null,
                   "totalTime":5278629,
                   "articleStartTime":1455564591011,
                   "gameShareImage":{  
                      "originalImageURL":"",
                      "croppedImageURL":"3578ddfa-cd8a-4a5b-8cd8-cd49ba6523c9.jpg",
                      "coords":{  
                         "x":0,
                         "y":237,
                         "width":6002,
                         "height":3159
                      },
                      "imageSize":"facebookFreeForm",
                      "width":"6002",
                      "height":"3159",
                      "isAnimated":false,
                      "fileType":"jpg",
                      "originalFileType":"jpg",
                      "credentials":{  
                         "type":"NA",
                         "value":""
                      }
                   },
                   "answerOrder":"random"
                },
                
                //first time published 
                                relevancy:"public",
                isPublic:"False"!= "True",
                // #branded - search for this keyword to find all locations of brand code 
                                isBranded:"False",
                locale:"es-ES",
                translatedFrom:"b516b5b7-3804-4aec-8426-a9ff0e31a32d",
                originalLocale:"es-ES",
                wasCreatedBeforeWeStartedCollectingEvents:"false"=== "true"
            };
        } catch (e) {
            console.log('speed-exception', (e));

            shouldSendReport = true;
            msg = "gameData not created: " + e.message;
        }

        //try catch object.freeze on window.gameData for freezeing the object
        try {
            Object.freeze(window.gameData);
        } catch (ex) {
            console.log('speed-exception', (ex));

            var console = console || {};
            console.log = console.log || function(){};
            console.log("Object.freeze failed");
        }

        (function() {
            try {
                if(!window.gameData) {
                    shouldSendReport = true;
                    msg = msg || "gameData not created";
                } else {
                    if(window.String && String.isNullOrEmpty) {
                        shouldSendReport = shouldSendReport || String.isNullOrEmpty(gameData.patternId) || String.isNullOrEmpty(gameData.gameName) || String.isNullOrEmpty(gameData.creatorName);
                        msg = msg || "gameData not created";
                    }
                }
            } catch (e) {
                console.log('speed-exception', (e));

                shouldSendReport = true;
                msg = "gameData not created: " + e.message;
            }
        })();

        var ignoredPatternsArray = ["list","countdown","videosnaps","shorts", "story"];
        if(isPreview  =="false" && $.inArray(window.gameData.patternId.toLowerCase(),ignoredPatternsArray) == -1)
        {
            AwsBridge.articleLoaded();
        }


        window.canonicalName = "http://elcomercio.pe";

        (function(){
            window.SI = {
                samplingDisabled : "false" == "true",
                samplingClientsPercentage : Number("100")
            };

        }());


        (function(){
            try{
                window.pbUrlToShare = "";
                window.shareBarParams = "{}";
                window.shareUsingSdk= "False" == "True";
                window.isFBWebView = "False" == "True";
                $(document).trigger("shareParamsLoaded");
            }
            catch (e) {
                console.log('speed-exception', (e));

                shouldSendReport = true;
                msg = msg || " shareBar not created: " + e.message;
            }

        })();

        (function(){
            window.userLanguages = !!navigator.languages && navigator.languages.length > 0 ? navigator.languages.join('|') : '';
            window.userLanguages = window.userLanguages + '|' +  gameData.locale;
        })();

    })();
