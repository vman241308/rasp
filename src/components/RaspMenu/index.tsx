
import React from 'react';

export type MenuComponentsProps = {
    menu: {
        icon: any;
        name: string
    }
}

const RaspMenu: React.FC<MenuComponentsProps> = (props) => {
    return (
        <div className="flex rounded h-32 w-32">
            <div className='flex flex-col justify-between w-7'>
                <p>{props.menu.icon}</p>
                <p>{props.menu.name}</p>
            </div>
        </div>
    );
};

export default RaspMenu;