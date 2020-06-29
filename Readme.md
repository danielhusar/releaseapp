# Daniel - Jun 13 2020 [![Actions Status](https://github.com/danielhusar/daniel-jun-13-2020/workflows/CI/badge.svg)](https://github.com/danielhusar/daniel-jun-13-2020/actions)

Hi, thank you very much for reviewing my submission.

## Installation

App is built using the node.js.

- Follow instructions on the [node.js site](https://nodejs.org/en/download/) to instal node.js v12.x.
- Install yarn v1.x : `npm install -g yarn`.
- Clone this repo: `git clone https://github.com/danielhusar/daniel-jun-13-2020 && cd daniel-jun-13-2020`.
- Install all the dependencies with yarn: `yarn` (You will see couple of `eslint-config-react-app` warnings. Don't worry about them, they have no effect on the setup.)

Now you are ready to start the app and run tests.\
To start the app run: `yarn dev`.

This will start two development servers. One for the Next.js app, and one for the mocked S3 server.\
App runs on port 3000 and S3 on port 3001. Make sure those ports are free on your machine.\
If you are not sure if the port is free, on Unix based systems like Mac OS you can run: `lsof -i :3000` and `lsof -i :3001` to see if any process is using those ports.

Once you run `yarn dev` open [http://localhost:3000/](http://localhost:3000/) in your browser. You should see the app.

To run the tests you can run:

- `yarn test:unit` to run unit tests.
- `yarn test:e2e` to run end to end cypress tests.
- `yarn test:types` to check the static types.
- `yarn test:lint` to check eslint.
- `yarn test:format` to check formatting via prettier.

All the tests run also in [CI as github action](https://github.com/danielhusar/daniel-jun-13-2020/actions) on every push.

If you need to deploy the app to the production, first you need to run `yarn build`.\
After that you can start app in the production with `yarn start`.\
Please note that for production you need to supply production bucket s3 secrets:

```sh
S3_ACCESS_KEY_ID
S3_SECRET_ACCESS_KEY
S3_ENDPOINT
```

> Caveat: I have tested the app only on Mac OS. While it's likely it will work fine on linux too, windows is not likely supported at the moment.

## Security

Our ppp has high security standards out of the box.
I have implemented:

- CSRF protection for api requests.
- CSP policy.
- Helmet middleware that adds most common security headers, [docs.](https://helmetjs.github.io/docs/)
- All user inputs are sanitized by React. (we are not using `dangerouslySetInnerHTML` anywhere)

I have not implemented:

- Any metrics. If we would deploy our app, performance would be a black box to us. [Datadog APM](https://www.datadoghq.com/apm/) is a good choice.
- Any blocking and throttling middleware. If somebody would want to spam our app, it's easy to do.
- No bot prevention. We might want to consider adding [reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html) since there is no authorization.

## Improvements

From the UX perspective:

- My number 1 priority would be to add pagination. Without it, our app would not scale, and very quickly, it would take several seconds to just render the index page.
- Adding a "My Documents" section. It could be done by storing files ids that the user has uploaded in a localstorage.
- Right now, you can upload just one file at once. It would be nice to add the ability to select multiple files.
- Since we are uploading images, we can show image preview in the grid.
- Add the ability to specify name and edit it. (name is right now generated from the file)
- Add the ability to specify file url. Right now, it's auto generated with uuid in the url.
- Add a page that renders a single asset.

From engineering perspective:

- Documents are currently hard deleted from DB and S3. It would be good to consider soft delete, so that we can rollback delete action.
- The database is obviously just for demo purposes because it's using the filesystem. So we need to plug in real DB. Anything from Aurora, Dynamo, Mongo, Firebase etc.. would work.
- Add more tests for edge cases. I have tested mainly happy paths.
- Add more tests for backend services and libraries.
- Add visual testing for UI. We use [percy](https://percy.io/) and are quite happy with it.
- Search is just a regexp. Adding a full text and fuzzy search would be nice.
- Like I already pointed, add metrics and logging. For metrics we can use [Datadog](https://www.datadoghq.com/). We can upload logs to s3 and use [Graylog](https://www.graylog.org/) to search in them.
- Capture and send errors to [Sentry](https://sentry.io/welcome/) or [Rollbar](https://rollbar.com/).
- Add [Intercom](https://www.intercom.com/) to the site so we can provide support to our visitors and announce new features. :)

## Libraries

- [React](https://reactjs.org/) - It's my favorite library to build interfaces. I love the React component model, hooks and one way data flow. JSX is huge improvement from all the template languages like handlebars.
- [Next.js](https://nextjs.org/) - I like to think that Next is to react, like what rails is to ruby. Next is a framework that gives you lot of features out of the box, like server-side rendering, routing, lambda functions, etc.
- [Express](https://expressjs.com/) - While next comes with its own server, using Express brings large ecosystem of middlewares. File uploads, CSP, CSRF was all easy to setup.
- [Chakra-ui](https://chakra-ui.com/) - Design system with a focus on the accessibility and great typescript support.
- [Emotion](https://emotion.sh/docs/introduction) - Great CSS-IN-JS library that allows you to automatically scope styles. Together with Styled-components it's my favorite way to write styles. I went with Emotion here simply because Chakra-ui is using it.
- [Lowdb](https://github.com/typicode/lowdb) - Small local JSON database powered by Lodash. I wanted something that would make setup as seamless as possible with no external dependencies on any services.
- [Aws-sdk](https://aws.amazon.com/sdk-for-node-js/) - I wanted something that would be close to production. In the real world you would probably upload your assets to s3 so why not in dev too.
- [S3rver](https://github.com/jamhall/s3rver) - Simple S3 server that responds to the same api calls like aws S3. This makes it easy to use S3 in dev while not actually uploading anything to AWS.
- [Typescript](https://www.typescriptlang.org/) - Because I can't imagine writing javascript without it anymore. It's like having your smartest friend sitting next to you and giving you hints. :)
- [Prettier](https://prettier.io/) - Code formatter. I can't think of any other tool that made me more productive.
- [Eslint](https://eslint.org/) - To lint the javascript. I like that it can check for some accessibility issues.
- [Jest](https://jestjs.io/) - Unit test runner. I love that it's batteries included and comes with a mocking framework that is so easy to use. No more Sinon!

## API

I have made API restful as it was the quickest way to scaffold this app.\
For bigger projects, I would considered using GraphQL.

> Caveat: Better name would be to use `documents` instead of `resources` but since readme specified `resources` I have used that.

### GET /api/resources

Returns all documents.
This endpoint also accept query param `search` that will search in the returned documents.\
Example: `GET /api/resources?search=foobar`

### POST /api/resources

Creates resource. \
You need to post form data with file binary in the file attribute.

### DELETE /api/resources/[id]

Deletes a resource by id.

## Other notes

Thank you very much for finishing reading this long document. :)
