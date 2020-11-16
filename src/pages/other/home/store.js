import {   action, observable} from 'mobx';


class AppStore {

       treeData = {
        key: '1',
        title: 'Card',
        props: { title: 'mysql' },
        children: [
            {
                key: '232323',
                title: 'Space',
                children: [
                    {
                        key: '2323',
                        title: 'Button',
                        props: {type: 'primary'},

                    },
                    {
                        key: 2,
                        title: 'Input',
                        props: { defaultValue: 'input1' , style: {width: 400}, onChange: function(e) {
                            window.set('firstr', e.target.value)
                        }},
                    }, {
                        key: 3,
                        title: 'Input',
                        props: { defaultValue: 'input2', value: '#{first}' },

                    }
                ]
            }

        ],
    };


     name = "ssss";


      params = {
        first: 'sss'
    }


    add2() {
        console.log("22222")
      console.log(this.name)
        this.name = "dddd"
    }

    set1(paramName, paramValue) {
        console.log('call set params： ', paramName, paramValue)
        this.params = {...this.params, paramName: paramValue}

    }
    callq(method, ...params) {
        console.log('call method')
    }
}
export default AppStore;
