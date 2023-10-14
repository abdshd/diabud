/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SugarUpdateFormInputValues = {
    timestamp?: string;
    sugar?: number;
};
export declare type SugarUpdateFormValidationValues = {
    timestamp?: ValidationFunction<string>;
    sugar?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SugarUpdateFormOverridesProps = {
    SugarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    sugar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SugarUpdateFormProps = React.PropsWithChildren<{
    overrides?: SugarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sugar?: any;
    onSubmit?: (fields: SugarUpdateFormInputValues) => SugarUpdateFormInputValues;
    onSuccess?: (fields: SugarUpdateFormInputValues) => void;
    onError?: (fields: SugarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SugarUpdateFormInputValues) => SugarUpdateFormInputValues;
    onValidate?: SugarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SugarUpdateForm(props: SugarUpdateFormProps): React.ReactElement;
