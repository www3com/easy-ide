import React, {useContext} from 'react'
import * as antd from 'antd/dist/antd'
import 'antd/dist/antd.css'

import { ctx } from '../reducer';

const View4 = ({ node }) => {


    const { state, dispatch } = useContext(ctx)
    const parseProp = (props) => {
        const reg = /^#\{(.*)}.*/;

        let parsedProps = {}
        for (let key in props) {

            if (reg.test(props[key])) {
                parsedProps[key] = state.params[RegExp.$1];
            }else {
                parsedProps[key] = props[key]
            }
            
        }
        return parsedProps;
    }




    var childNodes;


    if (node.children != null && node.children.length > 0) {
        
        childNodes = node.children.map((childNode, index) => {

            let parsedProps = parseProp(childNode.props)
            let Element = antd[childNode.title];
            return (childNode.children == null || childNode.children.length == 0 ?
                <Element key={childNode.key} {...parsedProps} ></Element> :
                <Element key={childNode.key} {...parsedProps}><View4  node={childNode} /></Element>);

        })
    }


    let Root = antd[node.title];
    let parsedProps = parseProp(node.props)
    return (<Root key={node.key} {...parsedProps}>{childNodes}</Root>)
}


export default View4;