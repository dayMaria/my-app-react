# Configuracion de Firebase

url donde se encuentra la base de datos https://react-getting-started-65e51-default-rtdb.firebaseio.com//meetups.json
configuracion de las reglas para su acceso:
{
/_ Visit https://firebase.google.com/docs/database/security to learn more about security rules. _/
"rules": {
".read": true,
"meetups": {
".write": true,
".indexOn": ["timestamp"]
}
}
}

# comando para ejecutar el proyecto npm run start
