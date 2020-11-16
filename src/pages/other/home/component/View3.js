import React from 'react';
const antd = require('antd/dist/antd');
import { inject, observer } from 'mobx-react';
@inject('store')
@observer
export default class View3 extends React.Component {
  renderView = (parent, children) => {
    let childrenDomNodes = [];
    if (children != null && children.length > 0) {
      for (let child of children) {
        let tmp = null;
        if (child.children != null && child.children.length > 0) {
          let tmp = this.renderView(child, child.children);
        }

        let childDomNode = React.createElement(
          antd[child.title],
          { key: child.key, ...child.props },
          tmp,
        );

        childrenDomNodes.push(childDomNode);
      }
    }
    p = React.createElement(antd[parent.title], { key: parent.key, ...parent.props }, tmp);

    return p;
  };
  render() {
    let inner0 = React.createElement(antd['Header'], { key: '0', value: 'sssss' }, null);
    let ssf = React.createElement(
      antd['Layout'],
      { width: '100%', height: '100%' },
      this.renderView(this.props.store.treeData),
    );
    return ssf;
    // let s = []
    // for(let item of this.props.store.treeData) {
    //     let inner = React.createElement(antd[item.title], {key: item.key, ...item.props}, null)
    //     s.push(inner)
    // }

    //         let s = []
    //         let inner0 = React.createElement(antd['Input'], {key:'0' , value: 'sssss'}, null)

    //         let inner = React.createElement(antd['Card'], {key:'1', title: 'sssss'}, inner0)
    //         let inner1 = React.createElement(antd['Input'], {key:'2' , value: 'sssss'}, null)
    //         s.push(inner);
    //         s.push(inner1)
    //         let t =  React.createElement(antd['Layout'], {title: '我的'}, s);

    // return t
  }
}
