# App

auth module test enviroment 

## auth module

a standalone auth-module to use with Express

`can(permissionId, userId)`

permissionId: required, the permission Id (string);
userId: optional, the user Id (string). If not provided is automatic set as:

`userId = userId || req.userId || 0;`

## use as middleware

You can use in express to check if a user has the right to usa a resource/functionality.

`app.get('/', can(1, 3), controller);` 


