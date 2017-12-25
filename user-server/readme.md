#instroduction
  后台数据的获取涉及到了网站的跨域：http://jsonplaceholder.typicode.com
  解决方式使用express+request模块实现服务器代理，从而解决跨域问题。
  
  express默认使用过的渲染引擎jade，由于获取的数据是html文件，因此将jade引擎该ejs引擎，并配置在app.js文件中。
  
  
  使用express自动化创建项目：
    npm install -g express
    npm install -g express-generator
    
    使用express创建项目：
      express 项目名称
      cd  项目名称
      npm install
      
  由于没有使用到index.js与users.js路由，本项目已删除相关文件。
