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
export declare type SugarCreateFormInputValues = {
    timestamp?: string;
    sugar?: number;
};
export declare type SugarCreateFormValidationValues = {
    timestamp?: ValidationFunction<string>;
    sugar?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SugarCreateFormOverridesProps = {
    SugarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    sugar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SugarCreateFormProps = React.PropsWithChildren<{
    overrides?: SugarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SugarCreateFormInputValues) => SugarCreateFormInputValues;
    onSuccess?: (fields: SugarCreateFormInputValues) => void;
    onError?: (fields: SugarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SugarCreateFormInputValues) => SugarCreateFormInputValues;
    onValidate?: SugarCreateFormValidationValues;
} & React.CSSProperties>;
export default function SugarCreateForm(props: SugarCreateFormProps): React.ReactElement;
