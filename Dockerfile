FROM node:23-alpine3.19

WORKDIR /app
COPY . /app
RUN ls -lah
RUN npm i
RUN npm run build
RUN echo "#!/bin/bash" > /app/run.sh && echo "npm run start" >> /app/run.sh && chmod +x /app/run.sh
RUN cat /app/run.sh
RUN apk add bash
ENTRYPOINT [ "/app/run.sh" ]
