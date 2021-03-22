import React from 'react';
import data from '../../api';
import { Helmet } from 'react-helmet';

class List extends React.Component {
    constructor(props) {
        super(props);
        let initialData = null;
        console.log('process.env.BABEL_ENV', process.env.BABEL_ENV);
        if(process.env.BABEL_ENV === 'node'){
            initialData = props.staticContext.initialData || {};
        }else{
            initialData = props.initialData || {};
        }
        this.state= {
            ...initialData,
            page: {
                tdk: {
                    title: '列表页',
                    description: '列表页展示',
                    keywords: '列表页的关键字'
                }
            }
        };
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
        const { code, data, page } = this.state;
        const { tdk = {}} = page;
        return (
            <div>
                <Helmet>
                    <title>{tdk.title}</title>
                    <meta name="description" content={tdk.description} />
                    <meta name="keywords" content={tdk.keywords} />
                </Helmet>
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