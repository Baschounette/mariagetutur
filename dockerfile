# Utilisation d'une image de base CentOS 7
FROM centos:7

# Installation de node.js pour exécuter des scripts JS si nécessaire
RUN yum install -y epel-release && \
    yum install -y nodejs npm

# Copie des fichiers de l'application dans le conteneur
COPY index.html /app/
COPY style.css /app/
COPY script.js /app/
COPY images /app/images

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Exposition du port 80 (ou le port que votre application utilise)
EXPOSE 80

# Commande pour démarrer l'application
CMD ["npm", "start"]
