# Releaseapp [![Actions Status](https://github.com/danielhusar/releaseapp/workflows/CI/badge.svg)](https://github.com/danielhusar/releaseapp/actions)

Hi, thank you very much for reviewing my submission.

## Installation

App is built using the node.js.

- Follow instructions on the [node.js site](https://nodejs.org/en/download/) to instal node.js v12.x.
- Install yarn v1.x : `npm install -g yarn`.
- Clone this repo: `git clone https://github.com/danielhusar/releaseapp && cd releaseapp`.
- Install all the dependencies with yarn: `yarn` (You will see couple of `eslint-config-react-app` warnings. Don't worry about them, they have no effect on the setup.)

Now you are ready to start the app and run tests.\
To start the app run: `yarn dev`.

This will start development server on post 3000.\
Make sure this port are free on your machine.\
If you are not sure if the port is free, on Unix based systems like Mac OS you can run: `lsof -i :3000` to see if any process is using this port.

Once you run `yarn dev` open [http://localhost:3000/](http://localhost:3000/) in your browser. You should see the app.

To run the tests you can run:

- `yarn test:unit` to run unit tests.
- `yarn test:e2e` to run end to end cypress tests.
- `yarn test:types` to check the static types.
- `yarn test:lint` to check eslint.
- `yarn test:format` to check formatting via prettier.

All the tests run also in [CI as github action](https://github.com/danielhusar/releaseapp/actions) on every push.

If you need to deploy the app to the production, first you need to run `yarn build`.\
After that you can start app in the production with `yarn start`.

> Caveat: I have tested the app only on Mac OS. While it's likely it will work fine on linux too, windows is not likely supported at the moment.

## Demo

[https://releaseapp.vercel.app/](https://releaseapp.vercel.app/)
