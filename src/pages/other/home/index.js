import React from 'react';
import Root from './component/Root';
import { Provider } from 'mobx-react';
import AppStore from './store';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const store = new AppStore();

export default function() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Root />
      </Provider>
    </ConfigProvider>
  );
}
