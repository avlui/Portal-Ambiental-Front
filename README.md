# Aclaraciones relevantes
1. Tanto la parte del backend como el frontend estan juntas en la misma carpeta, en un futuro se incluira una implementacion mas ordenada
2. Las librerias necesarias para que todo funcione correctamente estan en el package.json, no estan organizadas en el codigo
3. El codigo esta muy desordenado, pero es funcional
4. La principal funcionalidad implementada es la conexion con una DB mongo, en esta version solo se recuperan 2 datos, "name" que sera usada en el popup y "geometry" que es un array con las ubicaciones
5. La estructura basica en la base de datos para que esto sea funcional es solamente un string "name" y un arreglo de Double "geometry"
6. Se usa una base de datos mongo local llamada "mern-stack", todo esto puede cambiarse en el archivo server.js, ademas, tambien se puede cambiar facilmente por una base de datos en la nube tipo mongodb atlas
7. El funcionamiento requiere los siguientes pasos:
    - Ejecutar el script "npm start" para el servidor web del front-end en una terminal
    - En otra terminal, ejecutar "npm run dev" que se encargara del servidor del backend
    - Tener mongoDB activado y tener una base de datos ya existente, de lo contrario, el mapa no pintara ninguna ubicacion en pantalla
