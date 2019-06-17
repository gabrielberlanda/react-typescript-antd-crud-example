import React from 'react'
import { FormItemProps, FormItem } from '@jbuschke/formik-antd';

const FormItemFeedback: React.SFC<FormItemProps> = (props) => {
    const { children, ...restProps } = props;

    return <FormItem {...restProps} hasFeedback showValidateSuccess>{ children }</FormItem>
}

export default FormItemFeedback;