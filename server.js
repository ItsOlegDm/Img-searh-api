const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/",(request, response) => {
response.send(200, "viydi otsuda");
});


app.get("/iqdb", (request, response) => {
  if (request.query != undefined && request.query.url != undefined && request.query.url >  const searchPic = require('iqdb-client');
  searchPic.searchPic(request.query.url, { lib: 'www' }).then(i => {return response.send>  } else{
    response.sendStatus(406);
  }
});

app.get("/saucenao", (request, response) => {
  if (request.query != undefined && request.query.url != undefined && request.query.url >  const fetch = require('node-fetch');
  fetch(`https://saucenao.com/search.php?db=999&output_type=2&numres=1&api_key=${TOKEN}&url=${request.query.url}`).then(res => res.json()).then(i => {return response.send(200, i)});
    } else{
    response.sendStatus(406);
  }
});
