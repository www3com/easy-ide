import * as React from 'react';
import * as antd from 'antd';
import 'antd/dist/antd.css'
import {Layout, Tree} from "antd";
import SplitPane from "react-split-pane";
import {inject, observer} from "mobx-react";

const {Content, Sider} = Layout;


const ElementTree = ({store}) => {

    return (
        <Tree treeData={store.treeData}>
        </Tree>
    );
}


export default inject('store')(observer(ElementTree));