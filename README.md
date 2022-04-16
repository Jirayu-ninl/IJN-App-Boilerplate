## IJN App-Boilerplate
**update Apr 17, 2022**

**NEXT JS** with custom config webpack and Babel

#### Features

- TypeScript
- Credential Login/Signup
- Social Login
- User session
- Navar Notification
- Toast Notify
- Header Config (SEO, Google Tag, Font)
- Global State Context
- Global Layout and CSS
- Additional React Hook
- Sentry Tracker
- PWA, Offline caching

#### Additional Dependencies

- Emotion and TailwindCSS
- Framer Motion
- NextAuth + MongoDB
- Eslint / Prettier / Stylelint

#### Path mapping

```   
@config --- ["app/config"]
@app/* --- ["app/*"]
@models/* --- ["app/models/*"]
@database/* --- ["app/models/database/*"]
@libs/* --- ["libs/*"]
@contexts/* --- ["app/contexts/*"]
@store --- ["app/store"]
@auth/* --- ["app/auth/*"]
contents/* --- ["resources/contents/*"]
views/* --- ["resources/views/*"]
layouts/* --- ["resources/views/layouts/*"]
pages/* --- ["resources/views/pages/*"]
public/* --- ["public/*"]

````

#### How to run

1. add your .env
2. Install
````
yarn
````
1. Run
````
yarn dev
````

**STATUS** In development

**VERSION** 1.0.0