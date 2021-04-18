### # 7层网络模型


```
graph LR
应用-->HTTP
表示-->HTTP
会话-->HTTP
传输-->TCP
网络-->Internet
数据链路-->4G/5G/Wi-Fi
物理层-->4G/5G/Wi-Fi
```

### TCP与IP的基础知识
- 流
- 端口
- require
- 包
- IP地址
- libnet/libpcap

### HTTP
#### request
request line:

POST/HTTP1.1   

headers:

Host:127.0.0.1

Content-Type: application/x-www-form-urlencoded

body:

field1=aaa&code=x%3D1
    
#### response


## http请求
### 第一步http请求总结
- 设计一个http请求的类
- content type是一个必要的字段，要有默认值
- body是kv格式
- 不同的content-type影响body的格式

```
class Request {
    constructor(options) {
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || '/';
        this.body = options.body || {};
        this.headers = options.headers || {};
        if(!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }

        if(this.headers["Content-Type"] === 'application/json')
            this.bodyText = JSON.stringify(this.body);
        else if(this.headers["Content-Type"] === 'application/x-www-form-urlencoded')
            this.bodyText = object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&')
        this.headers['Content-Length'] = this.body.length
    }

    send(connection) {
        return new Promise((resolve, reject) => {
           
        })
    }
}
```


### 第二步send函数
- 在request的构造函数中收集必要的信息
- 设计一个send函数，把请求真实发送到服务器
- send函数应当是异步的，所以返回promise


```
class Request {
    constructor(options) {
        //...
    }

    send(connection) {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser;
            if(connection) {
                connection.write(this.toString())
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    connection.write(this.toString())
                })
            }
            connection.on("data", (data) => {
                parser.receive(data.toString());
                if(parser.isFinished) {
                    resolve(parser.response);
                    connection.end();
                }
            })
            connection.on("error", (err) => {
                reject(err);
                connection.end()
            })
        })
    }
}
```


```
graph LR
'HTTP/1.1,200,OK'-->statusLine
Content-Type:text/html-->headers
Data:Mon,23,Dec,2019-->headers
Connection:keep-alive-->headers
Transfer-Encoding:chunked-->headers
''-->空白行
26'html''body'Hello'/body''/html'0-->body
'-->空白
```

### 第三步发送请求
- 设计支持已有的connection或者自己新建的connection
- 收到数据传给parser
- 根据parser的状态resolve Promise


### 第四步responseParser总结
- response必须分段构造，所以我们要用一个ResponseParser来‘装配’
- responseparser分段处理responseText，我们用状态机来分析文本的结构

### 第五步bodyParser总结
- response的body可能根据Content-Type有不同的结构，因此我们会采用子parser的结构来解决问题
- 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式

