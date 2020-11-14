import * as React from 'react';
import * as antd from 'antd';
import 'antd/dist/antd.css'
import { ipcRenderer } from 'electron';
import Liu from './data/Liu'

interface Plot {
    name: string;
    props: unknown[];
    chilren: unknown;
}

const Subs = () => {
    const [loading, setLoading] = React.useState(false);
    const [com, setCom] = React.useState<Plot>({ name: '', props: [], chilren: null });


    const ret = () => {
        if (com.name == '') {
            return <div></div>
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return React.createElement(antd[com.name], {id:com.props[0].title,  title: com.props[0].title }, (<div>{com.props[0].title}</div>));
    }


    const onClick = () => {
        setCom({
            name: 'Card',
            props: [{ title: 'sssss' }],
            chilren: null
        })
        
    }
    const onClick1 = () => {

        setCom({
            name: 'Card',
            props: [{ title: 'ttt' }],
            chilren: null
        });
    }
    const onClick2 = () => {

        document.getElementById("sssss").style.border = '1px solid #d9363e'
    }
    return (
        <div>
            <antd.Button onClick={onClick}>写入文件</antd.Button>
            <antd.Button onClick={onClick1}>回复了</antd.Button>
            <antd.Button onClick={onClick2}>选中</antd.Button>
            <br />
            {ret()}s
            <antd.Spin spinning={loading}></antd.Spin>
        </div>
    )
}

export default Subs;