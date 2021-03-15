import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        alert('一起来玩 react ssr 呀,点我有反应吗？');
    }

    render() {
        return (
            <div onClick={this.handleClick}>Hello World!</div>
        );
    }
}

export default Index;