import * as usersService from '../services/users';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: 0,
  },
  reducers: {
    save(state, { payload: { data: list, total } }) {
      console.log('reducers')
      return { ...state, list, total };
    },
  },
  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      console.log('page')
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          console.log('subscriptions');
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
