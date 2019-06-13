import React from 'react'
import { LinkProps, Link } from 'react-router-dom';
import Button, { ButtonProps } from 'antd/lib/button';

const LinkButton: React.SFC<LinkProps & ButtonProps> = (props) => {
    const { to, replace, innerRef, children, ...buttonProps } = props;

    return (
        <Link to={to} replace={replace} innerRef={innerRef}>
            <Button {...buttonProps}>
                {children}
            </Button>
        </Link>
    )
}

export default LinkButton;