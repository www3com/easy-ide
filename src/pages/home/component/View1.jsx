import * as React from 'react';
import { inject, observer } from 'mobx-react';
import getLib from '../../../components/ComponentLib';
import Layout from 'antd/lib/layout/layout';

const View2 = ({ store }) => {
  const parseProps = (p, props) => {
    if (props == null || !props instanceof Array || props.length == 0) {
      return {};
    }
    const parsedProps = {};
    for (let item of props) {
      p[item.name] = item.value;
    }
  };

  const renderView = (reactDomNode, treeDataNodeChildren) => {
    for (let node of treeDataNodeChildren) {
      let component = getLib('antd')[node.title].plot;
      if (node.children != null && node.children.length > 0) {
        renderView(node, node.children);
      } else {
        if (reactDomNode.props.children == null) {
          debugger;
          reactDomNode.props.children = [];
        }
        parseProps(component, node.props);
        reactDomNode.props.children.push(component);
      }
    }
  };

  let root = <Layout></Layout>;
  for (let node of store.treeData) {
    debugger;
    let component = getLib('antd')[node.title].plot(node.props, node.children);
    if (node.children != null && node.children.length > 0) {
      root.props.children = [];
    }

    renderView(component, node.children);

    root.props.children.push(component);
  }

  return root;
};

export default inject('store')(observer(View2));
