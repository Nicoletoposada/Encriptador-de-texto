<h1>ENCRIPTADOR DE TEXTO</h1>

<img src="https://www.antiun.com/wp-content/uploads/2019/05/tipos-encriptacion-de-datos.png" alt="ilustração de um computador" min-width="400px" max-width="400px" width="400px" align="right">

<h2 align="left">Nicolás Posada Gacía</h2>
<h2 align="left">Descripción</h2>
<p align="left">Este proyecto es un encriptador de texto desarrollado con HTML, CSS y JavaScript. Utiliza un algoritmo avanzado de cifrado para convertir texto plano en una versión cifrada que protege la información. Este encriptador puede ser útil para proteger información sensible en una variedad de contextos.
Para ver de clic aqui: <a href="https://github.com/Nicoletoposada/Encriptador-de-texto.git"/>LINK</a>
</p>
<br><br>

<h2>Tecnologías Implementadas</h2>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="CSS"/></code>

<h2 align="left">Funcionalidades</h2>

<h2>Método de Encriptación</h2>
<p>Este proyecto incluye un encriptador de texto basado en un algoritmo sencillo pero eficiente, implementado en JavaScript. A continuación, se describen las funciones clave y cómo operan:</p>

<h3>'encriptarTexto()':</h3>
<ul>
  <li>Captura el texto ingresado por el usuario desde el campo `inputText`.</li>
  <li>Si el campo está vacío, muestra una alerta para solicitar un texto válido.</li>
  <li>Simula un proceso de encriptación al mostrar una barra de progreso durante 1 segundo antes de aplicar el método de encriptación avanzado (`encriptacionAvanzada()`).</li>
  <li>El texto encriptado se muestra en el campo `outputText` al finalizar.</li>
</ul>

<h3>'desencriptarTexto()':</h3>
  <li>Extrae el texto cifrado del campo `outputText`.</li>
  <li>Si no hay texto para desencriptar, se alerta al usuario.</li>
  <li>Similar a la encriptación, muestra una barra de progreso durante 1 segundo antes de aplicar el método de desencriptación avanzada (`desencriptacionAvanzada()`).</li>
  <li>El texto desencriptado se presenta en el mismo campo.</li>
</ul>

<h3>'encriptacionAvanzada(texto)':</h3>
<ul>
  <li>Implementa un cifrado básico de desplazamiento, donde cada carácter en el texto original es reemplazado por otro cuyo valor Unicode ha sido incrementado en 3 unidades.</li>
  <li>Ejemplo: la letra "A" se convierte en "D", y "b" en "e".</li>
</ul>

<h3>'desencriptacionAvanzada(texto)':</h3>
<ul>
  <li>CEs el proceso inverso a la encriptación. El valor Unicode de cada carácter es decrementado en 3 unidades para obtener el texto original.</li>
</ul>

<h3>Funciones adicionales:</h3>
<ul>
  <li>'copiarTexto()': Permite copiar el texto encriptado o desencriptado al portapapeles, mostrando una notificación temporal para indicar que la acción fue exitosa.</li>
  <li>'mostrarProgreso()' y 'ocultarProgreso()': Estas funciones gestionan la visualización de una barra de progreso durante el proceso de encriptación o desencriptación, proporcionando una mejor experiencia visual para el usuario.</li>
 </ul>

<h2>Conclusión</h2>
<p>Este encriptador y desencriptador de texto es una herramienta tanto práctica como educativa. A lo largo de este proyecto, se integraron y aplicaron conocimientos clave en <b>HTML, CSS y JavaScript</b>, junto con fundamentos de criptografía, proporcionando una sólida base técnica. Gracias a la iniciativa de **Oracle y Alura Latam**, se contó con un marco de aprendizaje ideal para el desarrollo de habilidades técnicas y la creación de soluciones innovadoras. El diseño responsivo de la aplicación asegura una experiencia de usuario fluida y accesible desde cualquier dispositivo, mejorando tanto la funcionalidad como la usabilidad general. Este proyecto no solo demuestra el potencial de aplicaciones web sencillas, sino que también refuerza la importancia de la seguridad de la información en el entorno digital actual.</p>

<h2>Contactame</h2>
<a href="https://www.linkedin.com/in/nicolasposada/" title="LinkedIn">
<img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN" alt="LinkedIn"/></a>

<p>Realizado por: &copy; Nicolás Posada</p>
