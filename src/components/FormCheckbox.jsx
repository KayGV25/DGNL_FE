import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function FormCheckbox({
    control,
    name,
    label,
    id,
    className = "",
    disabled = false,
    ...props
}) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className="flex items-center space-x-2">
                        <FormControl>
                            <Checkbox
                                id={id || name}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={disabled}
                                className={`h-4 w-4 rounded border-gray-300 cursor-pointer ${className}`}
                                {...props}
                            />
                        </FormControl>
                        <Label 
                            htmlFor={id || name} 
                            className="text-sm text-muted-foreground leading-snug cursor-pointer"
                        >
                            {label}
                        </Label>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
