import { FormItem as UIFormItem, FormLabel, FormControl, FormMessage } from "./ui/form"

export default function CustomFormItem({ children, label, ...props }) {
    return (
        <UIFormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                {children}
            </FormControl>
            <FormMessage />
        </UIFormItem>
    )
}