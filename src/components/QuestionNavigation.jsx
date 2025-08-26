import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const QuestionNavigation = ({ 
    totalQuestions = 34, 
    currentQuestion = 1, 
    answeredQuestions = [], 
    onQuestionSelect 
}) => {
    const getQuestionStatus = (questionNumber) => {
        if (questionNumber === currentQuestion) {
            return 'current';
        }
        if (answeredQuestions.includes(questionNumber)) {
            return 'answered';
        }
        return 'unanswered';
    };

    const getButtonVariant = (status) => {
        switch (status) {
            case 'current':
                return 'default';
            case 'answered':
                return 'secondary';
            case 'unanswered':
            default:
                return 'outline';
        }
    };

    const getButtonClassName = (status) => {
        switch (status) {
            case 'current':
                return 'bg-primary text-primary-foreground';
            case 'answered':
                return 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200';
            case 'unanswered':
            default:
                return 'border-2';
        }
    };

    return (
        <Card className="w-full">
            <CardContent className="p-4">
                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-center">
                        Danh sách câu hỏi
                    </h3>
                    
                    <div className="grid grid-cols-6 gap-2">
                        {Array.from({ length: totalQuestions }, (_, index) => {
                            const questionNumber = index + 1;
                            const status = getQuestionStatus(questionNumber);
                            
                            return (
                                <Button
                                    key={questionNumber}
                                    variant={getButtonVariant(status)}
                                    size="sm"
                                    className={`h-8 w-8 p-0 text-xs font-medium ${getButtonClassName(status)}`}
                                    onClick={() => onQuestionSelect && onQuestionSelect(questionNumber)}
                                >
                                    {questionNumber}
                                </Button>
                            );
                        })}
                    </div>

                    <div className="space-y-2 text-xs">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-primary rounded"></div>
                            <span>Câu đang làm</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                            <span>Đã hoàn thành</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 border-2 border-gray-300 rounded"></div>
                            <span>Chưa làm</span>
                        </div>
                    </div>

                    <Button 
                        variant="destructive" 
                        className="w-full mt-4"
                        onClick={() => {
                            if (window.confirm('Bạn có chắc chắn muốn nộp bài?')) {
                                // Handle submit exam
                                alert('Nộp bài thành công!');
                            }
                        }}
                    >
                        Nộp bài
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuestionNavigation;
