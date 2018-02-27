import React from "react";

import Toogle from '../toogle/toogle';

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
                    <Toogle title={ 'Читать далее...' }>
                        <p>
                            Полное описание...
                        </p>
                    </Toogle>
                </div>
            );
        });
    }

}

export default News;