import { get } from 'mobx';
// import AntdMobileLib from './antd-mobile/_lib';
import AntdLib from './antd/_lib'
export const ComponentLib = [
    { name: 'antd', components: AntdLib },
    // { name: 'antd-mobile', components: AntdMobileLib },
];

const getLib = name => {
    for (let lib of ComponentLib) {
        debugger
        if (lib.name == name) {
            return lib.components
        }
    }
    return null;
}

export default getLib
