# Test recepies test assignment

This SPA works only with my WP plugin [https://github.com/vldmitrofanov/assignment-wp-recepies](https://github.com/vldmitrofanov/assignment-wp-recepies)

to lunch create `.env` file and specify wordpress API url

```
REACT_APP_BASE_URL='http://wordpress.local/wp-json'
```

install `serve` and `pm2`

```
npm install -g serve
npm install -g pm2
```

try to run

```
pm2 serve build 8082 --spa 
```