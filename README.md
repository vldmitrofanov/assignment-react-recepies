# Test recepies test assignment

This SPA works only with my WP plugin [https://github.com/vldmitrofanov/assignment-wp-recepies](https://github.com/vldmitrofanov/assignment-wp-recepies)

to lunch create `.env` file and specify wordpress API url

```
REACT_APP_BASE_URL='http://wordpress.local/wp-json'
```

install `pm2`

```
npm install -g pm2
```

try to run

```
pm2 start --name assignment-react-recepies npm -- start
```