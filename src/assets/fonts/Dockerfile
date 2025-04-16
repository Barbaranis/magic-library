# Étape 1 : build de l'app
FROM node:18 AS build
WORKDIR /app


# Copie du package.json + install
COPY package*.json ./
RUN npm install


# Copie de tout le reste et build de l'app
COPY . .
RUN npm run build


# Étape 2 : serveur web léger (nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html




# Copie d'une config custom (facultatif)
# COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

