import React from 'react';

const HeaderLayout = () => {
    return (
        <div className="flex items-center justify-between fixed top-0 left-0 w-full py-4 px-20 text-sm">
            <div className="flex-shrink-0 flex justify-start items-center">
                <img src="/src/assets/images/logo-qualixsoft-header.png" alt="Logo QualixSoft 2024" className="h-8" />
            </div>
            <div className="flex-grow flex justify-end gap-10 items-center font-semibold">
                <p className="text-primary">Acasă</p>
                <p className="text-primary">Servicii</p>
                <p className="text-primary">Portofoliu</p>
                <p className="text-primary">Mai multe</p>
                <p className="bg-primary text-textWhite px-5 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg">Contactează-ne</p>
            </div>
        </div>
    );
};

export default HeaderLayout;
