import { action } from 'mobx';
import { createContext } from 'react';

export const ctx = createContext();

export const reducer = (state, action) => {
  if (action.type == null) {
    return state;
  }

  let type = action.type;
  delete action.type;

  let ret = methods[type](state, action);

  return { ...state, ...ret };
};

// 以上代码不用动，固定套路

export const defaultState = {
  name: '1',
  params: { first: 'first' },
  treeData: {
    key: '2',
    title: 'Card',
    props: { title: 'mysql' },
    children: [
      {
        key: '4',
        title: 'Space',
        props: { direction: 'vertical' },
        children: [
          {
            key: '5',
            title: 'Button',
            props: { type: 'primary' },
          },
          {
            key: '6',
            title: 'Input',
            props: {
              defaultValue: 'input1',
              style: { width: 400 },
              onChange: function(e) {
                window.set('f', e.target.value);
              },
            },
          },
          {
            key: '7',
            title: 'Input',
            props: { defaultValue: 'input2', value: '#{f}' },
          },
          {
            key: '8',
            title: 'Input',
            props: { defaultValue: 'input3', value: '#{f}' },
          },
        ],
      },
    ],
  },
};

const methods = {
  set: function(state, action) {
    return { ...state, params: { ...state.params, ...action } };
  },
  call: function(state, acton) {},
  addElement: (state, action) => {
    let temp = state.treeData;
    temp.children[0].children.push({
      id: '' + Math.random(),
      title: 'Input',
      props: { value: '#{f}' },
    });
  },
};
