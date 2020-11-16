import * as antd from 'antd';

const componentName = {
  Layout: 'Layout',
};
const components = [
  { name: 'Layout', icon: '', desc: '' },
  { name: 'Header', icon: '', desc: '' },
];
const link = {
  Layout: {
    icon: '',
    desc: '',
    plot: <Layout></Layout>,
    label: `<Layout ${props}>${chilren}</Layout>`,
  },
  Header: {
    icon: '',
    desc: '',
    plot: <Header></Header>,
    label: `<Header ${props}>${chilren}</Header>`,
  },
  Content: {
    icon: '',
    desc: '',
    plot: <Content></Content>,
    label: `<Content ${props}>${chilren}</Content>`,
  },
};

const getComponent = name => {
  let component = link[name];
  if (component == null) {
    return '';
  }

  return link[name].plot;
};

export default getComponent;
