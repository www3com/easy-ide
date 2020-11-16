import React, {useEffect} from 'react';
import 'antd/dist/antd.css'
import { Layout , Button} from "antd";
import SplitPane from "react-split-pane";
import {inject, observer} from "mobx-react";
// import View1 from './View1';
import View4 from './View4'

const { Content, Sider } = Layout;

const Root = ({store}) => {

    useEffect(()=>{
        window.call = (method, ...params) => {
            store.call(method, params)
        }
        window.set = (paramName, paramValue) => {
            store.set(paramName, paramValue)
        }
      }, [])

console.log('渲染： root')
  let pa = store.params
  console.log(pa)
    return (
        <SplitPane split="vertical" defaultSize={200}>
            <div>
                left{store.name}
                <Button onClick={()=>store.add2()}>Button</Button>
                {/* <ElementTree /> */}
            </div>
            <SplitPane split="vertical" defaultSize={300} primary='second'>
                <div>
                    sss
                     <View4 node = {store.treeData} params={pa}/>
                    {/* <View1/> */}
                </div>

                <div id="ssss">right</div>
            </SplitPane>
        </SplitPane>
    )

}

export default inject('store')(observer(Root));
// export default Root;
