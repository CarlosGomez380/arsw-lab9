### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/en-us/free/search/?&ef_id=Cj0KCQiA2ITuBRDkARIsAMK9Q7MuvuTqIfK15LWfaM7bLL_QsBbC5XhJJezUbcfx-qAnfPjH568chTMaAkAsEALw_wcB:G:s&OCID=AID2000068_SEM_alOkB9ZE&MarinID=alOkB9ZE_368060503322_%2Bazure_b_c__79187603991_kwd-23159435208&lnkd=Google_Azure_Brand&dclid=CjgKEAiA2ITuBRDchty8lqPlzS4SJAC3x4k1mAxU7XNhWdOSESfffUnMNjLWcAIuikQnj3C4U8xRG_D_BwE). Al hacerlo usted contará con $200 USD para gastar durante 1 mes.

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Preguntas**

* ¿Qué es un Azure Function?

Azure Function es una solución para ejecutar fácilmente pequeños fragmentos de código o “funciones” en la nube. 

Tiene como ventajas:

Codificar todo el código que necesitemos para el problema / acción que se quiere ejecutar sin preocuparnos de la aplicación o la infraestructura para ejecutarlo.

Hace que el desarrollo sea más productivo.

Podemos codificar en diferentes lenguajes de programación, como C#, F#, Node.js, Java o PHP.

Nos permite desarrollar aplicaciones sin servidor en Microsoft Azure.

* ¿Qué es serverless?

La computación sin servidor (o serverless para abreviar) es un modelo de ejecución en el que el proveedor en la nube (AWS, Azure o Google Cloud) es responsable de ejecutar un fragmento de código mediante la asignación dinámica de los recursos. Y cobrando solo por la cantidad de recursos utilizados para ejecutar el código. El código, generalmente, se ejecuta dentro de contenedores sin estado que pueden ser activados por una variedad de eventos que incluyen solicitudes HTTP, eventos de base de datos, servicios de colas, alertas de monitoreo, carga de archivos, eventos programados (trabajos cron), etc. El código que se envía a al proveedor en la nube para la ejecución es generalmente en forma de una función. Por lo tanto, serverless a veces se denomina “Funciones como servicio” o “FaaS”.

* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?

Runtime utiliza un modelo de extensibilidad de lenguaje, y todas las funciones de una aplicación de funciones deben compartir el mismo lenguaje. El lenguaje de las funciones en una aplicación de función se elige al crear la aplicación y se actualiza en el ajuste FUNCTIONS_WORKER_RUNTIME. La versión 1x no acepta Java, PowerShell, Python, solamente las versiones 2x y 3x.

* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?

Es necesario porque Functions se basa en Azure Storage para operaciones como la gestión de los disparadores y el registro de las ejecuciones de la función. La aplicación de funciones puede utilizar los siguientes servicios de almacenamiento: Azure Blob storage, Azure Files, Azure Queue storage, Azure Table storage.

* ¿Por qué la memoization falla o no funciona de forma correcta?



* ¿Cómo funciona el sistema de facturación de las Function App?

El modelo de facturación de Azure Function consiste en calcular el tiempo de ejecución del recurso en segundos y multiplicarlo por consumo de recursos convertido en GB, el resusltado será multiplicado por el valor o precio del recurso para tener un valor total del consumo, por último se suma el valor de mensual que cobran por ejecución. 

* Informe

Para este informe se creó una nueva colección en postman.

En la siguiente imagen se muestran los casos usados, donde dice serie y un numero "x" representa el caso donde a la variable "nth" le corresponde el valor x:

![](https://github.com/CarlosGomez380/arsw-lab9/blob/master/images/Serie1.PNG)

Por último, vemos la tabla que se ejecuta al usar NEWMAN en el que se muestran el numero de casos aplicados y cuales fallas o son aceptados junto con el tiempo de respuesta.

![](https://github.com/CarlosGomez380/arsw-lab9/blob/master/images/Serie2.PNG)

