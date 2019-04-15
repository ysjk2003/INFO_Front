import React, { Component } from 'react';

class Member extends Component {
    state = {
        information: [
            {
                id: 0,
                number: 'DSM2016',
                name: '이재석'
            },
            {
                id: 0,
                number: '30414',
                name: '이지후'
            },
            {
                id: 1,
                number: 'DSM2016',
                name: '이재빈'
            },
            {
                id: 1,
                number: '30401',
                name: '강민범'
            },
            {
                id: 1,
                number: '30402',
                name: '김민규',
            },
            {
                id: 1,
                number: '30405',
                name: '박보현'
            },
            {
                id: 1,
                number: '20401',
                name: '김경민'
            },
            {
                id: 1,
                number: '20418',
                name: '최지웅'
            }
        ]
    }

    render() {
        const { information } = this.state;
        const OperList = information.map(information => (
            information.id === 0 && (<p>{information.number} {information.name}</p>))
        );
        const MemberList = information.map(information => (
            information.id === 1 && (<p>{information.number} {information.name}</p>)
        ));
        return (
            <div>
                <h3 className="Introduce-title">운영진</h3>
                <p>{OperList}</p>
                <h3 className="Introduce-title">멤버</h3>
                <p>{MemberList}</p>
            </div>
        );
    }
}

export default Member;