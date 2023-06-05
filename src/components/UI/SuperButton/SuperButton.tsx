import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import s from './SuperButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & { title: string };

export const SuperButton: FC<SuperButtonPropsType> = ({
                                                          title,
                                                          ...restProps
                                                      }) => {
    return (
        <button className={s.btn} {...restProps}>
            {title}
        </button>
    );
};
