const request = require("request");

module.exports = app => {
  app.get("/pages/:page", (req, res) => {
    request(
      `https://hackerhunt.co/api/daily/${req.params.page}`,
      (error, response, body) => {
        res.send(response.body);
      }
    );
  });

  app.get("/topic/:topic/:trending/:page", (req, res) => {
    request(
      ` https://hackerhunt.co/api/topic/${req.params.topic}/${
        req.params.trending
      }/${req.params.page}`,
      (error, response, body) => {
        res.send(response.body);
      }
    );
  });
};
