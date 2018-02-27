import React from "react";


class Toogle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <div className={ 'news__full_descr' }>
                <a href="#" onClick={ (e) => this.handleClick(e) }>
                    { this.state.visible ? 'Скрыть...' : this.props.title }
                </a>
                { this.state.visible ? this.props.children : null }
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();

        this.setState({
            visible: !this.state.visible
        });
    }
}

export default Toogle;
