FROM node:20-bookworm-slim

LABEL maintaner="Devansh Narang <narangdevansh2004@gmail.com>"

WORKDIR /app/

COPY . .

RUN npm i --location=project

RUN npm run build

CMD ["npm", "start", "bootstrap"]
