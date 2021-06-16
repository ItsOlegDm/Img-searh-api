const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  if (request.query != undefined && request.query.url != undefined && request.query.url != ''){
  const searchPic = require('iqdb-client');
  searchPic.searchPic(request.query.url, { lib: 'www' }).then(i => {return response.send(200, i.data)});
  } else{
    response.sendStatus(406);
  }
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
