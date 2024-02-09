
import React from 'react';

export type MenuComponentsProps = {
    menu: {
        icon: any;
        name: string
    }
}

const RaspMenu: React.FC<MenuComponentsProps> = (props) => {
    return (
        <div className="flex rounded h-32 w-32 bg-white">
            <div className='flex flex-col justify-center m-auto'>
                <div className='m-auto w-12 h-12 mb-5'>
                    <img src={props.menu.icon} />
                </div>
                <p>{props.menu.name}</p>
            </div>
        </div>
    );
};

export default RaspMenu;