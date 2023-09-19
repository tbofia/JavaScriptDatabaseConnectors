// Load the Snowflake Node.js driver.
var snowflake = require('snowflake-sdk');
// Create a Connection object that we can use later to connect.
var connection = snowflake.createConnection( {
    account: 'tla31883.us-east-1',
    username: 'THEODOREBOFIA',
    password: 'SFpass123'
    }
    );
// Try to connect to Snowflake, and check whether the connection was successful.
connection.connect( 
    function(err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message);
            } 
        else {
            console.log('Successfully connected to Snowflake.');
            // Optional: store the connection ID.
            connection_ID = conn.getId();
            }
        }
    );