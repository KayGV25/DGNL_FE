import React, { cloneElement } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "./ui/form"

export default function FormFieldItem({
    control,
    name,
    label,
    children,
    description,
    ...props
}) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        {children && React.isValidElement(children)
                            ? cloneElement(children, { ...field, ...props })
                            : children}
                    </FormControl>
                    {description && (
                        <FormDescription>
                            {description}
                        </FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}