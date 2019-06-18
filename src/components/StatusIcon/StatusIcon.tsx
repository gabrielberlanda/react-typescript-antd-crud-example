import React from 'react'
import Icon, { IconProps } from 'antd/lib/icon';
import { green, red } from '@ant-design/colors';

interface Props extends IconProps {
    isActived?: boolean
}

const StatusIcon: React.SFC<Props> = (props: Props) => {
    
    const { isActived, ...iconProps } = props;
    
    const statusProps: IconProps = {
        theme: 'twoTone',
        type: isActived ? 'check-circle' : 'close-circle',
        twoToneColor: isActived ? green.primary : red.primary
    };

    return (
        <Icon {...iconProps} {...statusProps} ></Icon>
    )
}

export default StatusIcon;

