
npm run kill-amplify-mock-api
(amplify mock api &)
npm run wait-on http-get://localhost:20002
npm run build
npm run kill-port 5000
(npx serve build/ &)
npm run wait-on http-get://localhost:5000
npm run cypress run --env PORT=5000