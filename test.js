function updateState(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}

class Store {
    constructor(updateState, state) {
        this._updateState = updateState;
        this._state = state;
        this._callback = [];
    }

    get state() {
        return this._state;
    }

    update(action) {
        this._state = this._updateState(this._state, action);
        this._callback.forEach(callback => callback());
    }

    subscribe(callback) {
        this._callback.push(callback);
    }
}

const store = new Store(updateState, 0);

const incrementAction = { type: 'INCREMENT', amount: 10 };
const incrementAction2 = { type: 'INCREMENT', amount: 12 };
const decrementAction = { type: 'DECREMENT', amount: 7 };

store.subscribe(() => console.log('State changed ', store.state));

store.update(incrementAction);
store.update(decrementAction);

store.update(incrementAction2);

store.update({});
