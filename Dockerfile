FROM node:18.19.1-slim as builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM node:18.19.1-slim
WORKDIR /app
COPY --from=builder /app/.output .output
COPY --from=builder /app/ecosystem.config.cjs .
RUN yarn global add pm2

EXPOSE 3000
ENTRYPOINT ["pm2", "start", "ecosystem.config.cjs", "--no-daemon"]
#docker build -t chudaozhe/cuiwei.net:1.0-release .