var Pets = require("../../models/petDirectory");
var generalResponse = require('../../routes/utils/general_response');
var AWS = require('aws-sdk');
var dotenv = require("dotenv");
var uuid = require("uuid");
dotenv.load();

// save to the database
exports.save = function(req, res) {
    // res.send("In SAVE");
    console.log("In SAVE")
    console.log(req)
    Pets.create({
        petName : req.body.petName,
        petOwner : req.body.petOwner,
        petAddress: req.body.petAddress,
        petPhone : req.body.petPhone,
        petImage : req.body.petImage,
        petDescription : req.body.petDescription
    }, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Saved Search");
            console.log("SAVED");
        }
    });
};

// return data from database
exports.list = function(req, res) {
    // res.send("IN LIST")
    console.log("In List")
    Pets.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
};

exports.image = function(req, res){
    const S3_BUCKET = process.env.S3_BUCKET_NAME;
    const S3_ACCESS = process.env.AWS_ACCESS_KEY_ID;
    const S3_SECRET = process.env.AWS_SECRET_ACCESS_KEY;
    console.log("IMAGE")
    // console.log(req);
    if( !req.body.file ){ res.json( generalResponse( null,2 ) ); return; }
    var file = req.body.file;

    if( file.type == "image/png" || file.type == "image/jpeg" || file.type == "image/jpg"){
        if( file.size > 2200000 ){
            res.json( generalResponse( null,4 ) ); return;
        }
    }else{
        res.json( generalResponse( null,3 ) ); return;
    }

    var fileName;
    if( file.type == "image/png") { fileName = uuid.v4() + '.png'; }
    else if( file.type == "image/jpeg") { fileName = uuid.v4() + '.jpg'; }
    else if( file.type == "image/jpg") { fileName = uuid.v4() + '.jpg'; }
    else{ res.json( generalResponse( null,5 ) ); return; }

    // AWS.config.region = 'eu-west-1';
    AWS.config.accessKeyId = S3_ACCESS;
    AWS.config.secretAccessKey = S3_SECRET ;
    var s3bucket = new AWS.S3();
    // console.log(S3_BUCKET);
    var s3_params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60, // expire after 60 mins
        ContentType: file.type,
        ACL: 'public-read'
    };

  s3bucket.getSignedUrl('putObject', s3_params, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      var return_data = {
        requestUrl : data,
        imageUrl: `https://s3.amazonaws.com/${S3_BUCKET}/${fileName}`
      };
      res.json( generalResponse( return_data ) );
    }
  });

};
