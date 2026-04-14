Pregunta / Prompt: "Me piden una nueva colección que represente el historial. Cada entrada debe incluir un vector de objetos que llamaré canvis, que registre valor anterior, nuevo y el campo. ¿Esto se refiere a que primero debo hacer el export interface del historial y otro de los cambios por separado?"

Resultado / Uso: La IA me aclaró que para que el código esté bien organizado en TypeScript, lo ideal es crear dos interfaces. Primero una para el objeto pequeño (Canvi) con los tres campos (camp, valorAnterior, valorNou) y luego usarla dentro de la interfaz principal (Historial) como un array. Gracias a esto, pude tipar correctamente el modelo de Mongoose y evitar errores de "any" cuando intento acceder a los cambios desde el frontend.


2. Pregunta / Prompt: "Tengo que hacer el controlador para que el frontend pueda pedir los historiales. Necesito que lea de la URL la página, el límite y lo que el usuario busque. ¿Cómo paso esos datos de la req.query al servicio?"

Resultado / Uso: La IA me dio la estructura del try/catch para el controlador. Me enseñó a usar parseInt para que la página y el límite sean números y no den errores en la base de datos, y a poner valores por defecto (como 1 y 10) por si el usuario no pone nada. Luego, simplemente paso esos datos a la función del servicio que ya tenía hecha. Lo usé para conectar por fin el buscador de la web con la base de datos.

3. Pregunta / Prompt: "Quiero que el historial se pueda ver por páginas (de 10 en 10) y que pueda buscar por el nombre del campo que cambió. ¿Cómo hago esa función en el backend?"

Resultado / Uso: La IA me ayudó a montar la función getAllHistorials. Me explicó cómo usar el .skip() para saltarme los resultados de las páginas anteriores y el .limit() para no cargarlos todos de golpe. También me dio la lógica del $regex para el buscador, para que no haga falta escribir la palabra exacta para que encuentre los cambios. Yo lo adapté a mis variables y le añadí el .populate para que en la tabla me salga el nombre de la universidad en lugar de solo el ID. He indicado en un comentario la sección donde use la ia.

4. Le pedi a chatgpt que me pusiera bien lo de routes

MODELO USADO: GEMINI gemini 3 flash