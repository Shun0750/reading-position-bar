FROM node:14.6-alpine
WORKDIR /workspace
RUN npm init -y
RUN npm install -D webpack webpack-cli babel-loader @babel/core @babel/preset-env style-loader css-loader sass-loader node-sass
RUN npm install jquery

CMD ["npm", "run", "build"]
