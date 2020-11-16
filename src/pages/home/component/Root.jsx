import React, {createRef, useContext, useEffect} from 'react';
import { Layout , Button, Input} from "antd";
import 'antd/dist/antd.css'
import SplitPane from "react-split-pane";

import View4 from './View4'
import { ctx } from '../reducer';
import { stat } from 'fs';

const { Content, Sider } = Layout;

const Root = () => {

    const {state, dispatch} = useContext(ctx)

    useEffect(()=>{
        window.call = (method, params) => {
            dispatch({type: 'call', value: {method: method, params: params}})
        }
        window.set = (paramName, paramValue) => {
            let p = {type: 'set'}
            p[paramName] = paramValue
            dispatch(p)
        }
      }, [])

      const areaRef = createRef()

      const getArea = ()=> {
        function loadJs(url,callback){
            var script=document.createElement('script');
            script.type="text/javascript";
            if(typeof(callback)!="undefined"){
            if(script.readyState){
            script.onreadystatechange=function(){
             if(script.readyState == "loaded" || script.readyState == "complete"){
             script.onreadystatechange=null;
             callback();
             }
            }
            }else{
            script.onload=function(){
             callback();
            }
            }
            }
            script.src=url;
            document.body.appendChild(script);
            }

            loadJs("http://localhost:8000/ww.js",function(){
                test(state)
            alert('done');
            });

        

      }
    return (
        <SplitPane split="vertical" defaultSize={200}>
            <div>
                left{state.name}
                <Button onClick={()=>dispatch({type:'add', name: '更新了'})}>Button</Button>
                {/* <ElementTree /> */}
            </div>
            <SplitPane split="vertical" defaultSize={600} primary='second'>
                <div>
                    sss
                     <View4 node = {state.treeData} params={state.params}/>
                    {/* <View1/> */}
                </div>

                <div id="ssss">

                    <Button type='primary' onClick={()=> dispatch({type: 'addElement'})}>增加一个元素</Button>
                    <br/><br/>
                    <Button type='primary' onClick={()=> getArea()}>增加一个元素</Button>
                    <Input.TextArea ref={areaRef} rows={30}></Input.TextArea>
                </div>
            </SplitPane>
        </SplitPane>
    )

}

export default Root;
// export default Root;
