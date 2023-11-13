import React from 'react';

class Variable extends React.Component {
    render() { 
        let x = 2,y = 4;
        return (
            // JSX chỉ return được 1 block.Khi muốn return nhiều block thì cần có 1 block bọc bên ngoài
            <>
                <div className='variable' > 
                    Tổng của {x} và {y} là {x+y}
                </div>
                <div className='variable' > 
                    Đây là block thứ 2
                </div>
            </>
        );
    }
}
 
export default Variable;