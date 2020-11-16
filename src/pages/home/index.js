
import React, { createContext, useReducer } from 'react';
import Root from './component/Root';
import { defaultState, reducer, ctx } from './reducer'

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';



export default function () {

  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <ConfigProvider locale={zhCN}>
      <ctx.Provider value={{ state, dispatch }}>
        <Root />
      </ctx.Provider>
    </ConfigProvider>
  );
}
