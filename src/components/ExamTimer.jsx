import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

const ExamTimer = ({ initialTime = 45 * 60, onTimeUp }) => { // 45 minutes in seconds
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp && onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const getTimerColor = () => {
        if (timeLeft <= 300) return 'text-red-600'; // Last 5 minutes
        if (timeLeft <= 600) return 'text-orange-600'; // Last 10 minutes
        return 'text-foreground';
    };

    return (
        <Card className="w-full max-w-xs">
            <CardContent className="p-4 text-center">
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">
                        Thời gian
                    </h3>
                    <div className={`text-3xl font-bold ${getTimerColor()}`}>
                        {formatTime(timeLeft)}
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Chỉ mày kiểm cách</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                        Question navigation
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ExamTimer;
