import {Layout}  from 'antd'

const proxyClass = (props, children) => {
    return class wrapper extends React.Component {
        render() {
            <Layout {...props}>{children}</Layout>
        }
    }
}

const iLayout =  {
    icon: '',
    desc: '',
    plot: proxyClass,
    label: '<Layout ${props}>${chilren}</Layout>'
}
export default iLayout;