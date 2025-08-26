import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const ShortAnswerQuestion = ({ 
    question, 
    questionNumber, 
    onAnswerChange,
    selectedAnswer 
}) => {
    const [answer, setAnswer] = useState(selectedAnswer || '');

    const handleInputChange = (e) => {
        const value = e.target.value;
        
        // Validate float number with max 6 digits (including . and -)
        // Allow empty string, negative numbers, decimals
        const floatRegex = /^-?\d{0,6}(\.\d{0,6})?$|^-?\.?\d{0,6}$/;
        
        if (value === '' || floatRegex.test(value)) {
            setAnswer(value);
            onAnswerChange && onAnswerChange(value);
        }
    };

    const formatPlaceholder = (text) => {
        // Replace blanks with input fields
        return text.split('_____').map((part, index, array) => (
            <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && (
                    <span className="inline-block mx-2 relative">
                        <Input
                            type="text"
                            value={answer}
                            onChange={handleInputChange}
                            className="w-24 h-8 text-center border-b-2 border-primary bg-transparent rounded-none"
                            placeholder="..."
                            maxLength={8} // Max length to accommodate 6 digits + decimal + minus
                        />
                    </span>
                )}
            </React.Fragment>
        ));
    };

    return (
        <Card className="w-full">
            <CardContent className="p-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                        Câu hỏi {questionNumber}
                    </h3>
                    <div className="text-base text-foreground">
                        {question?.text ? (
                            formatPlaceholder(question.text)
                        ) : (
                            <>
                                Nội dung câu hỏi tự luận
                                <div className="mt-4">
                                    <Label htmlFor={`answer-${questionNumber}`} className="text-sm text-muted-foreground">
                                        Đáp án của bạn (chỉ nhập số thực, tối đa 6 chữ số):
                                    </Label>
                                    <Input
                                        id={`answer-${questionNumber}`}
                                        type="text"
                                        value={answer}
                                        onChange={handleInputChange}
                                        className="mt-2 w-48"
                                        placeholder="Nhập đáp án..."
                                        maxLength={8}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    
                    {question?.hint && (
                        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                            <strong>Gợi ý:</strong> {question.hint}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ShortAnswerQuestion;
