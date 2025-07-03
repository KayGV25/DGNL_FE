import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <div className="flex items-center p-6 border-b">
        <Link to="/" className="text-xl font-semibold hover:text-primary transition-colors">DGNL WEB</Link>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Xác thực OTP</h2>
            <p className="text-muted-foreground text-base">
              Nhập mã xác thực gồm 6 chữ số đã gửi đến email/số điện thoại của bạn
            </p>
          </div>
          <div className="bg-card rounded-lg border shadow-sm p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setOtp}
                  containerClassName="gap-2"
                  className="text-xl"
                >
                  <InputOTPGroup>
                    {[...Array(6)].map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full h-11 text-base active:scale-95 transition-all ease-in-out duration-75 hover:scale-[1.01] cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang xác thực..." : "Xác thực"}
                </Button>
              </div>
              <div className="text-center">
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  Quay lại
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage; 