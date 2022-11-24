FROM alpine:3.14
RUN apk add --update nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3100
CMD ["npm", "start"]


#docker build  -t vincent/nodems .
#docker tag vincent/nodems:latest vincent/nodems:1.0.0
#kubectl port-forward service/node-slim-clu 8087:3011
#kubectl port-forward service/node-slim-clu 8087:3012  j'ai changer le Port en 3012
