import React from 'react';
import Moment from 'react-moment';
import './../css/test.css';
export default class Test extends React.PureComponent{
    componentDidMount() {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        console.log(date);
    }

    render() {
        return (
            <div>
                <Moment format="YYYY/MM/DD">
                    1976-04-19T12:59-0500
                </Moment>
            </div>
        )
    }

}
