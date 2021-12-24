FROM node14 as builder

WORKDIR /www

COPY . .

RUN npm install

RUN npm run build

FROM node14

WORKDIR /www

COPY --from=builder /www/package.json .

COPY --from=builder /www/package-lock.json .

COPY --from=builder build/* .

CMD ["npm", "run", "start"]