import { bindActionCreators } from 'redux';
import React from "react";
import { connect } from 'react-redux';

import Heading from 'arui-feather/heading';
import Paragraph from 'arui-feather/paragraph';
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';

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
                <Heading>
                    ReactJs Разработка от АльфаБанк
                </Heading>
                <Paragraph>
                    Привет, меня зовут { this.props.user.name }<br/>
                    И я могу отобразить новости за { this.props.news.year } год!
                </Paragraph>
                <div className="row">
                    <div className="col-md-4">
                        <Input
                            label='Новость'
                            placeholder='Введите заголовок новости'
                            view='line'
                            width='available'
                            ref={ (input) => {
                                this.inputNewsTitle = input;
                            } }
                        />
                    </div>
                    <div className="col-md-4">
                        <Button
                            view='extra'
                            type='submit'
                            width='available'
                            onClick={ () => this.handleClick() }
                        >
                            Добавить новость
                        </Button>
                    </div>
                </div>
                <hr/>

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
