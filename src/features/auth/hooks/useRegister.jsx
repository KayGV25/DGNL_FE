import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRegister() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        setIsLoading(true);
        try {
            console.log(values);
            // const response = await authService.register(values);
            // console.log(response)
            alert("Đăng ký thành công!");
            navigate("/login");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Có lỗi xảy ra khi đăng ký";
            alert(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        onSubmit,
    };
}