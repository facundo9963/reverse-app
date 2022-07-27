# Reverse App

Esta es una app en la que se pueden ingresar frases y ver una lista de las frases ingresadas pero al revés. <br/>
Esta página consume un backend que devuelve el texto al revés y un flag que indica si el texto es palindrómico.

Está realizado con react, usando redux y el backend con node.js
## `Ejecutar la app`

Para ejecutar la app tienes que clonar el repositorio de github.Una vez clonado debes instalar las dependencias usando el comando npm install.
Una vez instaladas las dependecias ya podrás ejecutar el frontend (por defecto en el puerto 3000) con npm start, y backend en otra terminal (por defecto en el puerto 3001) con npm start.<br/>
Una vez levantado todo ya podras visualizar la página y empezar a escribir frases para darlas vuelta.


## `ACLARACIONES`

Se puede ingresar cualquier texto inclusive símbolos y números y recibirá el texto al revés pero se tiene que enviar algo.
Para establecer si la frase es palindromica o no, no se tienen en cuenta ni los signos especiales, ni las comas, ni los puntos, ni los espacios (solo las letras y números). <br/>
Ej "A man, a plan, a canal. Panama" es considerado palindromico pero la frase que se escribirá será: "amanaP .lanac a ,nalp a ,nam A".


## `API`

La API tiene un solo endpoint que recibe un texto ingresado en la vista de usuario a traves de un query
<br/>
#### /iecho
Esta es la ruta usada para mandar el texto. En caso de que se levante el backend localmente va a estar ubicada en el puerto 3001. Es de tipo GET. Recibe una query "?text="" ", por donde se envía el texto.
Devuelve un objeto con un campo text: STRING con el texto ingresado dado vuelta y un campo palindrome: BOOLEAN que devuelve true si la frase se lee igual en ambos sentidos.
<br/>

