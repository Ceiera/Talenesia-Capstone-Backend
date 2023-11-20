# Start image build
FROM node:18.18.2-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

# Expose port 5000
EXPOSE 5000
CMD ["yarn", "start"]

