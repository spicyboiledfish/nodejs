import React from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {
                tdk: {
                    title: '首页',
                    description: '首屏展示',
                    keywords: '首页的关键字'
                }
            }
        }
    }

    static getInitialProps() {
        return {}
    }

    render() {
        const { tdk = {}} = this.state.page;
        return (
            <div className="default">
                <Helmet>
                    <title>{tdk.title}</title>
                    <meta name="description" content={tdk.description} />
                    <meta name="keywords" content={tdk.keywords} />
                </Helmet>
                首页
            </div>
        );
    }
}

export default Index;