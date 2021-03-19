import React from 'react';
import data from '../../api';

class List extends React.Component {
    constructor(props) {
        super(props);
        let initialData = null;
        if(__SERVER__){
            initialData = props.staticContext.initialData||{};
        }else{
            initialData = props.initialData || {};
        }
        this.state=initialData;
    }

    static getInitialProps = async () => {
        const fetchapi = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        code: 0,
                        data: data
                    })
                }, 100);
            })
        }
        let res = await fetchapi();
        return res;
    }

    componentDidMount(){
        if(!this.state.data){
            //如果没有数据，则进行数据请求
            List.getInitialProps().then(res=>{
                this.setState({
                    data: res.data||[]
                })
            })
        }
    }

    render() {
        const { code, data } = this.state;
        return (
            <div>
                {
                    data && data.map((item, index) => {
                        return (
                            <div key={index}>
                                <span>{item.title}</span>
                                <span>{item.desc}</span>
                                <img src={item.img} style={{width: '20px', height: '20px'}}/>
                            </div>
                        );
                    })
                }
                {!data && <div>暂无数据</div>}
            </div>
        );
    }
}

export default List;