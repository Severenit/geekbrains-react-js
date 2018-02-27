import { bindActionCreators } from 'redux';
import React from "react";
import { connect } from 'react-redux';

import * as newsActions from '../../action/newsActions';

import News from '../news/news';

function mapState(state) {
    const {
        user,
        news
    } = state;

    return {
        user,
        news
    };
}

function mapAction(dispatch) {
    return {
        newsActions: bindActionCreators(newsActions, dispatch)
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputNewsTitle;
    }

    componentDidMount() {
        this.props.newsActions.showNews();
    }

    render() {
        if (this.props.news.isBusy) {
            return (
                <div>
                    Loading....
                </div>
            );
        }

        return (
            <div className="container">
                <h1>ReactJs Разработка от АльфаБанк</h1>
                <p className="lead">
                    Привет, меня зовут { this.props.user.name }
                </p>
                <p className="lead">
                    И я могу отобразить новости за { this.props.news.year } год!
                </p>

                <div className="row">
                    <div className="col-xs-2">
                        <input type="text" ref={ (input) => {
                            this.inputNewsTitle = input;
                        } }/>
                    </div>
                    <div className="col-xs-2">
                        <button
                            className={ 'btn btn-primary' }
                            onClick={ () => this.handleClick() }
                        >
                            Добавить новость
                        </button>
                    </div>
                </div>


                <News items={ this.props.news.items } onHandleClick={ this.handleNewsClick }/>
            </div>
        );
    }

    handleClick() {
        console.log('####: handleClick: ');
        let {
            news: {
                items
            },
            newsActions: {
                newsAdd
            }
        } = this.props;

        items.push({
            title: this.inputNewsTitle.value,
            descr: 'Еще больше...'
        });

        this.inputNewsTitle.value = '';
        this.inputNewsTitle.focus();


        newsAdd(items);
    }

    handleNewsClick(params) {
        console.log('####: params: ', params);
    }
}

export default connect(mapState, mapAction)(App);
