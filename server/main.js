
module.exports = function(server) {
  var sockjs = require('sockjs');
  var sjsserver = sockjs.createServer(
    { sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js" }
  );
  sjsserver.on('connection', function(conn) { 
    console.log('connect'); 
    conn.on('data', function(data) {
      console.log('data', data);
      conn.write(data);
      conn.write(0);
    });
  });

  sjsserver.installHandlers(server, {prefix:'/sjs'});

}
