# Étape 1 - Construction
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


# Étape 2 - NGINX pour servir le build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

