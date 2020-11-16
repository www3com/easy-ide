import React from 'react'
import * as antd from 'antd/dist/antd'

class View4 extends React.Component {

    constructor(props) {
        super(props);

    }

    parseProp = (props, params) => {
        const reg = /^#\{(.*)}.*/;
        
        
        for(let key in props) {
            if(reg.test(props[key])) {
                props[key] = params[key]
            }
        }
        return props;
    }


    render() {

        var childNodes;

        let store = this.props.store;
        if (this.props.node.children != null && this.props.node.children.length > 0) {
            childNodes = this.props.node.children.map((node, index) => {

                let parsedProps = this.parseProp(node.props, this.props.params)
                console.log('解析属性：',parsedProps)
                let Element = antd[node.title];
                return (node.children == null || node.children.length == 0 ?
                    <Element key={node.key} {...parsedProps} ></Element> :
                    <Element key={node.key} {...parsedProps}><View4 node={node} params={this.props.params}/></Element>);

            })
        }


        let Root = antd[this.props.node.title];
        let parsedProps = this.parseProp(this.props.node.props, this.props.params)
        return (<Root key={this.props.node.key} {...parsedProps}>{childNodes}</Root>)
    }
}

export default View4;