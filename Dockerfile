#Base image taken from: https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.16.0-chrome107-ff107
RUN mkdir /cypress-tests
WORKDIR /cypress-tests
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT [ "npx", "cypress", "run" ]
CMD [ "" ]