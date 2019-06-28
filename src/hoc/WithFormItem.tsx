import React from 'react'
import FormItemFeedback from '../components/FormItemFeedback';

interface WithFormITemProps {
    label: string;
    required?: boolean;
}

export const withFormItem = <P extends object>(
    Field: React.ComponentType<P>
): React.FC<P & WithFormITemProps> => (props: any) => (
    <FormItemFeedback name={props.name} label={props.label} required={props.required}>
        <Field {...props}/>
    </FormItemFeedback>
)
