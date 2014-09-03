
module.exports = function(server) {
  var sockjs = require('sockjs');
  var sjsserver = sockjs.createServer(
    { sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js" }
  );

  var clients = [];
  var last_data = "";
  sjsserver.on('connection', function(conn) {
    clients.push(conn);
    if (last_data) {
      conn.write(last_data); // Update the client
    }
    conn.on('close', function () {
      clients.pop(clients.indexOf(conn));
    });
    conn.on('data', function(data) {
      last_data = data;
      for(var id in clients) {
        if (clients[id] !== conn) {
          clients[id].write(data);
        }
      }
    });
  });

  sjsserver.installHandlers(server, {prefix:'/sjs'});

}
