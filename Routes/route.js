import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

const ServerHandler = function (req, res) {
  const url = req.url;
  const method = req.method;

  if (url.startsWith("/assets/")) {
    const filePath = path.join(rootDir, url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Not Found");
        return;
      }
      if (url.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css; charset=utf-8");
      } else if (url.endsWith(".png")) {
        res.setHeader("Content-Type", "image/png");
      } else if (url.endsWith(".jpg") || url.endsWith(".jpeg")) {
        res.setHeader("Content-Type", "image/jpeg");
      } else if (url.endsWith(".svg")) {
        res.setHeader("Content-Type", "image/svg+xml");
      }
      res.end(data);
    });
    return;
  }

  if (url === "/" || url === "/index.html") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home - Mi Sitio Personal</title>
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <header>
      <a href="/" class="brand-logo">
        <span class="logo-icon">✦</span>
        <span>Sitio Personal</span>
      </a>
      <nav>
        <ul>
          <li><a href="/" class="active">Home</a></li>
          <li><a href="/valores">Valores</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/proyectos">Proyectos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero-container">
        <div class="hero-text">
          <div class="hero-eyebrow">
            <span>⊙</span>
            <span>Bienvenido</span>
          </div>

          <h1 class="hero-title">Hola, soy Waldin Ceballos</h1>

          <p class="hero-desc">
            Soy estudiante y desarrollador enfocado en desarrollo backend y programación web. Cuento con experiencia trabajando en la lógica de negocio, arquitecturas de software, bases de datos y la creación de soluciones digitales completas y robustas.
          </p>

          <div class="hero-actions">
            <a href="/proyectos" class="hero-btn-icon hero-btn-primary" title="Ver Proyectos">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                <path d="M8 11v3"/>
                <path d="M12 11v3"/>
                <path d="M16 11v3"/>
              </svg>
            </a>
            <a href="/contacto" class="hero-btn-icon hero-btn-secondary" title="Contacto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
            </a>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-label">Enfoque</div>
              <div class="stat-value">Desarrollo Backend</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Interés</div>
              <div class="stat-value">Programación Web</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Objetivo</div>
              <div class="stat-value">Aprendizaje continuo</div>
            </div>
          </div>
        </div>

        <div class="hero-image-wrapper">
          <div class="hero-backdrop"></div>
          <div class="hero-card">
            <img src="/assets/img/perfil.jpg" alt="Foto de Waldin Ceballos" />
            <div class="hero-card-badge">Waldin Ceballos</div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2026. Todos los derechos reservados.</p>
    </footer>
  </body>
</html>`);
    res.end();
  } else if (url === "/valores") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Valores - Mi Sitio Personal</title>
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <header>
      <a href="/" class="brand-logo">
        <span class="logo-icon">✦</span>
        <span>Sitio Personal</span>
      </a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/valores" class="active">Valores</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/proyectos">Proyectos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="values-layout">
        <div class="values-sidebar">
          <span class="values-eyebrow">MI FORMA DE TRABAJAR</span>
          <h1 class="values-title">Los valores que me definen</h1>
          <p class="values-desc">
            Creo que un buen proyecto se construye con curiosidad, compromiso y respeto por las personas que lo usarán.
          </p>
          <a href="/" class="btn-back-circle" title="Volver al Home">←</a>
        </div>

        <div class="values-grid-canva">
          <div class="canva-val-card featured">
            <div class="val-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <h3>Responsabilidad</h3>
            <p>Cumplo mis compromisos y cuido cada detalle del proceso.</p>
          </div>

          <div class="canva-val-card">
            <div class="val-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"/>
              </svg>
            </div>
            <h3>Creatividad</h3>
            <p>Exploro ideas diferentes para encontrar soluciones claras.</p>
          </div>

          <div class="canva-val-card">
            <div class="val-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Trabajo en equipo</h3>
            <p>Escucho, colaboro y valoro las perspectivas del grupo.</p>
          </div>

          <div class="canva-val-card">
            <div class="val-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="2" r="2"/>
              </svg>
            </div>
            <h3>Disciplina</h3>
            <p>Mantengo constancia para transformar metas en resultados.</p>
          </div>

          <div class="canva-val-card">
            <div class="val-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <h3>Empatía</h3>
            <p>Diseño pensando en las necesidades reales de las personas.</p>
          </div>

          <div class="canva-val-card">
            <div class="val-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3>Aprendizaje continuo</h3>
            <p>Siempre busco mejorar mis habilidades y conocimientos.</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2026. Todos los derechos reservados.</p>
    </footer>
  </body>
</html>`);
    res.end();
  } else if (url === "/skills") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Skills - Mi Sitio Personal</title>
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <header>
      <a href="/" class="brand-logo">
        <span class="logo-icon">✦</span>
        <span>Sitio Personal</span>
      </a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/valores">Valores</a></li>
          <li><a href="/skills" class="active">Skills</a></li>
          <li><a href="/proyectos">Proyectos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="section-top-bar">
        <div class="section-title-group">
          <span class="page-eyebrow">CONOCIMIENTOS</span>
          <h1 class="page-title">Skills de programación</h1>
          <p class="page-desc">
            Tabla con mis conocimientos y habilidades técnicas de programación junto a su valoración del 1 al 5.
          </p>
        </div>
        <a href="/" class="btn-back-circle" title="Volver al Home">←</a>
      </div>

      <div class="skills-container">
        <table class="skills-table">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Valoración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML</td>
              <td>3/5</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>3/5</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>1/5</td>
            </tr>
            <tr>
              <td>C#</td>
              <td>4/5</td>
            </tr>
            <tr>
              <td>SQL</td>
              <td>4/5</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>3/5</td>
            </tr>
            <tr>
              <td>Git</td>
              <td>5/5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <footer>
      <p>&copy; 2026. Todos los derechos reservados.</p>
    </footer>
  </body>
</html>`);
    res.end();
  } else if (url === "/proyectos") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Proyectos - Mi Sitio Personal</title>
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <header>
      <a href="/" class="brand-logo">
        <span class="logo-icon">✦</span>
        <span>Sitio Personal</span>
      </a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/valores">Valores</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/proyectos" class="active">Proyectos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="section-top-bar">
        <div class="section-title-group">
          <span class="page-eyebrow">MIS TRABAJOS</span>
          <h1 class="page-title">Proyectos realizados</h1>
          <p class="page-desc">
            Información de los proyectos de desarrollo y software que he realizado.
          </p>
        </div>
        <a href="/" class="btn-back-circle" title="Volver al Home">←</a>
      </div>

      <div class="canva-projects-grid">
        <div class="canva-proj-card">
          <div class="canva-proj-img">
            <img src="/assets/img/evote360.png" alt="Captura de eVote360 Pro" />
          </div>
          <div class="canva-proj-body">
            <h3>eVote360 Pro</h3>
            <p>
              Plataforma de votación electrónica segura que gestiona el ciclo completo de un proceso electoral, destacando por su validación de identidad ciudadana mediante OCR y su capacidad para gestionar alianzas políticas.
            </p>
            <span class="canva-proj-badge">C# · ASP.NET · OCR</span>
            <a href="/contacto" class="canva-proj-btn" title="Consultar proyecto">↗</a>
          </div>
        </div>

        <div class="canva-proj-card">
          <div class="canva-proj-img">
            <img src="/assets/img/linkup.png" alt="Captura de LinkUp Pro" />
          </div>
          <div class="canva-proj-body">
            <h3>LinkUp Pro</h3>
            <p>
              Red social interactiva donde los usuarios pueden compartir publicaciones multimedia, gestionar amistades, interactuar con comentarios y jugar partidas de Battleship en línea con sus contactos.
            </p>
            <span class="canva-proj-badge">C# · ASP.NET · SignalR</span>
            <a href="/contacto" class="canva-proj-btn" title="Consultar proyecto">↗</a>
          </div>
        </div>

        <div class="canva-proj-card">
          <div class="canva-proj-img">
            <img src="/assets/img/artemis.png" alt="Captura de Artemis Banking Pro" />
          </div>
          <div class="canva-proj-body">
            <h3>Artemis Banking Pro (ABP)</h3>
            <p>
              Plataforma de banca digital robusta para la administración de cuentas de ahorro, préstamos y tarjetas de crédito, soportando transacciones, pagos, avances de efectivo y herramientas operativas para cajeros.
            </p>
            <span class="canva-proj-badge">C# · ASP.NET · SQL Server</span>
            <a href="/contacto" class="canva-proj-btn" title="Consultar proyecto">↗</a>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <p>&copy; 2026. Todos los derechos reservados.</p>
    </footer>
  </body>
</html>`);
    res.end();
  } else if (url === "/contacto" && method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contacto - Mi Sitio Personal</title>
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <header>
      <a href="/" class="brand-logo">
        <span class="logo-icon">✦</span>
        <span>Sitio Personal</span>
      </a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/valores">Valores</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/proyectos">Proyectos</a></li>
          <li><a href="/contacto" class="active">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="section-top-bar">
        <div class="section-title-group">
          <span class="page-eyebrow">FORMULARIO</span>
          <h1 class="page-title">Página de contacto</h1>
          <p class="page-desc">
            Complete el formulario con sus datos y especifique los servicios que desea solicitar.
          </p>
        </div>
        <a href="/" class="btn-back-circle" title="Volver al Home">←</a>
      </div>

      <div class="contact-container">
        <form class="contact-form" action="/contacto" method="POST">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input id="nombre" type="text" name="nombre" placeholder="Ingrese su nombre" required />
          </div>

          <div class="form-group">
            <label for="apellido">Apellido</label>
            <input id="apellido" type="text" name="apellido" placeholder="Ingrese su apellido" required />
          </div>

          <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input id="correo" type="email" name="correo" placeholder="ejemplo@correo.com" required />
          </div>

          <div class="form-group">
            <label for="servicios">Descripción de los servicios deseados</label>
            <textarea id="servicios" name="servicios" rows="6" placeholder="Especifique los servicios que desea solicitar..." required></textarea>
          </div>

          <button type="submit" id="btnSubmit">Enviar Solicitud</button>
        </form>
      </div>
    </main>

    <footer>
      <p>&copy; 2026. Todos los derechos reservados.</p>
    </footer>
  </body>
</html>`);
    res.end();
  } else if (url === "/contacto" && method === "POST") {
    const body = [];

    req.on("data", function (chunk) {
      body.push(chunk);
    });

    req.on("end", function () {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);

      const nombre = params.get("nombre") || "";
      const apellido = params.get("apellido") || "";
      const correo = params.get("correo") || "";
      const servicios = params.get("servicios") || "";

      const contactData = [
        `Fecha: ${new Date().toISOString()}`,
        `Nombre: ${nombre}`,
        `Apellido: ${apellido}`,
        `Correo: ${correo}`,
        `Servicios: ${servicios}`,
        "----------------------------------------\n",
      ].join("\n");

      fs.appendFile("contactos.txt", contactData, function (err) {
        if (err) {
          res.statusCode = 500;
          res.end("Error al guardar el contacto");
          return;
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>404 - No Encontrado</title>
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body style="text-align: center; padding: 4rem;">
    <h1>404</h1>
    <p>La página que buscas no existe.</p>
    <p><a href="/" class="hero-btn-primary" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1.5rem; text-decoration: none; border-radius: 8px;">Volver al Home</a></p>
  </body>
</html>`);
    res.end();
  }
};

export default ServerHandler;
