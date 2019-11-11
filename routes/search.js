"use strict";

require("dotenv").config();
var fs = require("fs");
var express = require("express");
var router = express.Router();
var json = require("../queryResult.json");

const givenRadius = 2000;
const givenLocation = "9215 running eagle falls, tomball, tx 77375";
const givenLat = 29.757241399999998;
const givenLong = -95.46730649999999;

const yelp = require("yelp-fusion");
const client = yelp.client(process.env.YELP_API_KEY);

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  client
    .search({
      radius: givenRadius,
      location: givenLocation,
      // latitude: givenLat,
      // longitude: givenLong,
    })
    .then(response => {
      // let names = response.jsonBody.businesses.map( (name) => {
      //   return {value: name };
      // });
      // fs.writeFile(
      //   "./queryResult.json",
      //   // JSON.stringify(response.jsonBody.businesses),
      //   JSON.stringify(names),
        
      //   err => {
      //     if (err) {
      //       console.error(err);
      //       return;
      //     }
      //     console.log("File has been created");
      //   }
      // );


      // console.log("names = " + names);
      // res.send(response.jsonBody.businesses);
      // console.log(response.jsonBody.businesses[0].name);
      res.send(json);
    })
    .catch(e => {
      console.log(e);
    });
  
});

module.exports = router;
