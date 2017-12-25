import dva from 'dva';
import './index.css';

// 1. Initialize
// import { browserHistory } from 'dva/router';  //没有#
// const app = dva({
//   history: browserHistory,
// });

import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';

const app = dva({ // 去除 hashHistory 下的 _k 查询参数
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require("./models/users"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
