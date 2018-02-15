import React from "react";

import './news.css';

class News extends React.Component {

    constructor(props) {
        super(props);
        console.log('####: constructor: ');

        this.state = {
            visible: false
        }
    }


    render() {
        console.log('####: render: ');
        const { items } = this.props;

        return items.length === 0
            ? <div>У вас нет новостей!</div>
            : this.renderContent()
    }

    renderContent() {
        return (
            <div>
                { this.renderNews() }
                <p>
                    У вас есть { this.props.items.length } новости!
                </p>
            </div>
        );
    }

    renderNews() {
        return this.props.items.map((item, index) => {
            return (
                <div className={ 'news' } key={ index }>
                    <h2 className={ 'news__title' }>
                        { item.title }
                    </h2>
                    <div className={ 'news__descr' }>
                        { item.descr }
                    </div>
                    <a href="#" onClick={ (e) => this.handleClick(e) }>
                        { this.state.visible ? 'Скрыть...' : 'Подробнее...' }
                    </a>
                    { this.state.visible ? <div className={ 'news__full_descr' }>Полное описание...</div> : null }
                </div>
            );
        });
    }

    handleClick(e) {
        e.preventDefault();

        this.setState({
            visible: !this.state.visible
        });

        this.props.onHandleClick(this.state.visible);
    }

}

export default News;