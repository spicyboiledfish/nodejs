import React from 'react';
import data from '../../api';

class List extends React.Component {
    constructor(props) {
        this.state = {
            list: []
        }
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

    render() {
        const { list } = this.state;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index}>
                                <span>{item.title}</span>
                                <span>{item.desc}</span>
                                <img src={item.img} style={{width: '20px', height: '20px'}}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default List;