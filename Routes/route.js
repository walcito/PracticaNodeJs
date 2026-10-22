import fs from "fs";

const ServerHandler = function (req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>Home - Waldin Ceballos</title>
        </head>
        <body>
          <h1>Waldin Ceballos</h1>
          <p>
            Soy estudiante de desarrollo de software y desarrollador enfocado en backend y programación web. 
            Cuento con experiencia en diseño de arquitecturas de software, desarrollo de APIs, bases de datos 
            y construcción de soluciones digitales robustas.
          </p>
          <hr />
          <h2>Menú de navegación</h2>
          <ul>
            <li><a href="/valores">Valores</a></li>
            <li><a href="/skills">Skills de programación</a></li>
            <li><a href="/proyectos">Proyectos realizados</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </body>
      </html>
    `);
    res.end();
  } else if (url === "/valores") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>Valores - Waldin Ceballos</title>
        </head>
        <body>
          <h1>Valores que me definen</h1>
          <ul>
            <li><strong>Responsabilidad:</strong> Compromiso puntual y ético con cada meta y proyecto asumido.</li>
            <li><strong>Perseverancia:</strong> Capacidad de enfrentar desafíos técnicos y encontrar soluciones eficientes.</li>
            <li><strong>Trabajo en equipo:</strong> Comunicación asertiva y colaboración constante para lograr objetivos comunes.</li>
            <li><strong>Honestidad:</strong> Integridad y transparencia en el desarrollo personal y profesional.</li>
            <li><strong>Aprendizaje continuo:</strong> Pasión por dominar nuevas herramientas, buenas prácticas y tecnologías.</li>
          </ul>
          <hr />
          <p><a href="/">Volver al home</a></p>
        </body>
      </html>
    `);
    res.end();
  } else if (url === "/skills") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>Skills - Waldin Ceballos</title>
        </head>
        <body>
          <h1>Skills de programación</h1>
          <table border="1" cellpadding="8" cellspacing="0">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Valoración (1 al 5)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C# / .NET</td>
                <td>5</td>
              </tr>
              <tr>
                <td>SQL Server</td>
                <td>4</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>4</td>
              </tr>
              <tr>
                <td>HTML5 & CSS3</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Node.js</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <p><a href="/">Volver al home</a></p>
        </body>
      </html>
    `);
    res.end();
  } else if (url === "/proyectos") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>Proyectos - Waldin Ceballos</title>
        </head>
        <body>
          <h1>Proyectos realizados</h1>
          
          <h3>1. Artemis Banking Pro</h3>
          <p>
            Plataforma de banca digital desarrollada con ASP.NET Core y .NET 9. Permite la gestión integral 
            de usuarios, cuentas de ahorro, préstamos, tarjetas de crédito y transacciones bancarias, 
            incluyendo Web API para servicios externos.
          </p>

          <h3>2. LoanQuote</h3>
          <p>
            Aplicación web interactiva para cotización de préstamos y generación de tablas de amortización 
            dinámicas (cuota fija y capital fijo), desarrollada con HTML, CSS, JavaScript y jQuery.
          </p>

          <h3>3. Sistema de Nómina</h3>
          <p>
            Sistema desarrollado en .NET 8 y C# enfocado en la gestión de empleados, cálculo automático 
            de pagos semanales y generación de reportes detallados según tipo de contrato.
          </p>

          <hr />
          <p><a href="/">Volver al home</a></p>
        </body>
      </html>
    `);
    res.end();
  } else if (url === "/contacto" && method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>Contacto - Waldin Ceballos</title>
        </head>
        <body>
          <h1>Formulario de contacto</h1>
          <form action="/contacto" method="POST">
            <div>
              <label for="nombre">Nombre: </label><br />
              <input type="text" id="nombre" name="Nombre" required />
            </div>
            <br />
            <div>
              <label for="apellido">Apellido: </label><br />
              <input type="text" id="apellido" name="Apellido" required />
            </div>
            <br />
            <div>
              <label for="correo">Correo: </label><br />
              <input type="email" id="correo" name="Correo" required />
            </div>
            <br />
            <div>
              <label for="descripcion">Descripción de los servicios que desea: </label><br />
              <textarea id="descripcion" name="Descripcion" rows="4" cols="50" required></textarea>
            </div>
            <br />
            <button type="submit">Enviar solicitud</button>
          </form>
          <hr />
          <p><a href="/">Volver al home</a></p>
        </body>
      </html>
    `);
    res.end();
  } else if (url === "/contacto" && method === "POST") {
    const body = [];

    req.on("data", function (dataChunk) {
      body.push(dataChunk);
    });

    req.on("end", function () {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      const registro = `Nombre: ${params.get("Nombre")}\nApellido: ${params.get("Apellido")}\nCorreo: ${params.get("Correo")}\nDescripcion: ${params.get("Descripcion")}\n---------------------------\n`;

      fs.appendFile("contactos.txt", registro, function () {
        res.statusCode = 302;
        res.setHeader("Location", "/contacto");
        res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 404;
    res.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>404 - No Encontrado</title>
        </head>
        <body>
          <h1>404 - Página no encontrada</h1>
          <p>La ruta que intentas visitar no existe.</p>
          <hr />
          <p><a href="/">Volver al home</a></p>
        </body>
      </html>
    `);
    res.end();
  }
};

export default ServerHandler;
