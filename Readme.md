Crear tu primer proyecto con expo
-> npx create-expo-app@latest

Crear tu primer proyecto (esqueleto) con expo ✅
-> npx create-expo-app@latest [nombredetuproyecto] --template blank

Al crear un proyecto "esqueleto" no se tiene acceso a la web
para tener acceso hay que instalar las siguientes dependencias:
-> npx expo install react-dom react-native-web @expo/metro-runtime

Instalacion de Linter ✅
-> npx expo lint (instala las dependencias y crea archivo de config de Eslint)

Instalacion de Prettier ✅
-> npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier

Una vez hecha las instalaciones, dirijase al archivo .eslitrc.js y pegue la siguiente config ✅
module.exports = {
extends: ["expo", "prettier"],
plugins: ["prettier"],
rules: {"prettier/prettier": ["error",{endOfLine: "auto",},],},};

por ultimo, instale las extensiones ESLint y Prettier - Code formatter ✅

** Dependencias para el enrutado **
-> npx expo install expo-router react-native-safe-area-context react-native-screen expo-linking expo-constants expo-status-bar

** Dependencias para el uso de iconos **
-> npm install @expo/vector-icons
