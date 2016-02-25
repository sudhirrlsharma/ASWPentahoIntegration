module.exports = function() {

    var AWS = require('aws-sdk');
    var accessKeyId =  'AKIAILJKQZQQ2MHICEFQ'
    var secretAccessKey = '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';

	console.log("Access key "+accessKeyId );
    AWS.config.update({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    });

 
// Create a bucket using bound parameters and put something in it.
// Make sure to change the bucket name from "myBucket" to something unique.
var s3bucket = new AWS.S3({params: {Bucket: 'srp-demo'}});
s3bucket.createBucket(function() {
  var params = {Key: 'myKey', Body: 'Hello!'};
  s3bucket.upload(params, function(err, data) {
    if (err) {
      console.log("Error uploading data: ", err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
});
  

}();