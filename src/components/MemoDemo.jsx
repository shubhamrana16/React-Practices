import React from 'react'

function MemoDemo(props) {
    return (
        <div>
            {props.name}
        </div>
    )
}

export default React.memo(MemoDemo);
