FROM node:21-alpine3.18 as dependencies
WORKDIR /order-delivery-frontend
COPY package.json package-lock.json ./
RUN npm ci

FROM node:21-alpine3.18 as builder
WORKDIR /order-delivery-frontend
COPY . .
COPY --from=dependencies /order-delivery-frontend/node_modules ./node_modules
RUN npm run build

FROM node:21-alpine3.18 as runner
WORKDIR /order-delivery-frontend
ENV NODE_ENV production

COPY --from=builder /order-delivery-frontend/public ./public
COPY --from=builder /order-delivery-frontend/package.json ./package.json
COPY --from=builder /order-delivery-frontend/.next ./.next
COPY --from=builder /order-delivery-frontend/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
