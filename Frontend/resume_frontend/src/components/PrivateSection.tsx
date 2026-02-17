import { Box, Typography, Button } from "@mui/material";
import { logout } from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";

function PrivateSection({ user }) {
    const { setUser } = useContext(AuthContext);
    const [playVideo, setPlayVideo] = useState(false);


    const handleLogout = () => {
    logout();
    setUser(null);
  };
  return (
     <Box
    mt={6}
    p={4}
    sx={{
      backgroundColor: "rgba(255,255,255,0.1)",
      borderRadius: 3,
      maxWidth: 900,
      margin: "40px auto",
      backdropFilter: "blur(10px)"
    }}
  >

    <Typography variant="h3" fontWeight="bold" mb={2}>
      Bienvenido {user.nombre}
    </Typography>
    <Typography variant="h5" fontWeight="bold" mb={2}>
      🔓 Esta es mi información privada
    </Typography>

    {/* Contacto */}
    <Typography variant="body1" mb={1}>
      📧 Email: geisonblanco94@gmail.com
    </Typography>

    <Typography variant="body1" mb={3}>
      📱 WhatsApp: +57 311 521 4574
    </Typography>

    {/* Experiencia detallada */}
    <Typography variant="h6" fontWeight="bold" mt={2} mb={1}>
      Formación y Experiencia
    </Typography>

    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
       Ingeniero de Sistemas egresado de la Universidad Industrial de Santander desde 2024, Colombia, tengo conocimiento en JavaScript, Python, he manejado bases de datos en SQL, y he manejado librerias para manipular datos en JSON y en XML. Me gusta mucho la programación basada en objetos, y resolver problemas reales de software. Durante casi 2 años he trabajado como Freelancer en la plataforma de Outlier participando en proyectos de etiquetado de datos donde mis funciones principales han involucrado la evaluación de las respuestas de los modelos de inteligencia artificial de los clientes sobre temas de programación en distintos lenguajes como Java, Python, C++, mediante métricas como el grado de seguimiento de instrucciones, la veracidad de las respuestas, la completitud de las mismas, y proveer la respuesta ideal junto con sus rúbricas.

    </Typography>

     <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
       Mientras estuve estudiando pertenecí a un grupo de investigación que desarrollaba algoritmos de Inteligencia Artificial por lo que tengo conocimiento en redes neuronales profundas y pertenecí a proyectos relacionados a la estimación de la pose y a la recuperación de imágenes hiperespectrales a partir de adquisiciones de muestras comprimidas.

    </Typography>


    {/* Video */}
    <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
      Video de Presentación
    </Typography>

  <Box
  sx={{
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    borderRadius: 2,
    cursor: "pointer",
  }}
>
  {!playVideo ? (
    <Box
      onClick={() => setPlayVideo(true)}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/miniatura.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "50%",
          padding: 3,
        }}
      >
        ▶
      </Box>
    </Box>
  ) : (
    <iframe
      src="https://www.youtube.com/embed/4t0IlnEyTEc?autoplay=1"
      title="Video de presentación"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  )}
</Box>

    {/* Proyectos */}
    <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
      Proyectos Destacados
    </Typography>

    <Typography variant="body2">
        <ul>
  <li> Hoja de vida Página Web: Sistema de autenticación con FastAPI + JWT, Plataforma Full-Stack con React + PostgreSQL, Integraciones API externas y automatización de procesos.</li>
  <li>Android App Demo for restaurant in Java: <a href="https://youtu.be/kxKIEDHZOFo" target="_blank" rel="noopener noreferrer">Video</a>
</li>
</ul>
<Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
      Hoja de vida en PDF
    </Typography>

<Box mt={2} sx={{ height: "600px" }}>
  <iframe
    src="/cv.pdf"
    title="Hoja de Vida PDF"
    width="100%"
    height="100%"
    style={{ border: "none", borderRadius: 8 }}
  />
</Box>
      
    </Typography>



{/* Tecnologías */}
<Typography variant="h6" fontWeight="bold" mt={6} mb={3}>
  ⚙️ Tecnologías Utilizadas
</Typography>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexWrap: "wrap",
  }}
>
  <Box textAlign="center">
    <img src="/vite.svg" alt="Vite" width="80" />
    <Typography variant="body2">Vite</Typography>
  </Box>

  <Box textAlign="center">
    <img src="/React-icon.svg.png" alt="React" width="80" />
    <Typography variant="body2">React</Typography>
  </Box>

  <Box textAlign="center">
    <img src="/fastapi.svg" alt="FastAPI" width="80" />
    <Typography variant="body2">FastAPI</Typography>
  </Box>

    <Box textAlign="center">
    <img src="/python.png" alt="Python" width="80" />
    <Typography variant="body2">Python</Typography>
  </Box>

  <Box textAlign="center">
    <img src="/Postgresql_elephant.svg.png" alt="PostgreSQL" width="80" />
    <Typography variant="body2">PostgreSQL</Typography>
  </Box>
</Box>


      <Button
        variant="outlined"
        

         sx={{
        color: "black",
         margin: "30px",
        
      backgroundColor: "#da4545",
      "&:hover": { backgroundColor: "#cc0000" }
    }}
        onClick={handleLogout}
      >
        Cerrar sesión
      </Button>    
  </Box>
)}


export default PrivateSection;
