import React from 'react';

function Writer(props) {
    return (<>

        <div>
            {props.name} {props.lastName}
            <hr />
        </div>

    </>)
}




function Key(props) {
    var writers = [
        { id: 1, name: 'Dan', lastName: 'Brown' },
        { id: 2, name: 'Joanne', lastName: 'Rownling' },
        { id: 3, name: 'Stephen', lastName: 'King' }
      ];


    return (<>

        <div>
            {
                props.data.map(function (item) {
                    <Writer name={item.name} lastName={item.lastName} />
                })
            }
        </div>

    </>);
}
export default Key;