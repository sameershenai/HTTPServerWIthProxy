Simple HTTP Server with Reverse Proxy

localhost:8001/index.html

Installation
> brew install npm
> cd HTTPServerWIthProxy
> npm install

Run
> node index.js


Documentation :
It serves html files from /public folder

Proxy
It uses https://github.com/donasaur/http-proxy-rules module
To add new proxy routing add below line
> proxy.register("<sourceURL>", "<targetURL>");
