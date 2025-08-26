import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const MultipleChoiceQuestion = ({ 
    question, 
    questionNumber, 
    onAnswerChange,
    selectedAnswer 
}) => {
    const [selected, setSelected] = useState(selectedAnswer || '');

    const handleAnswerSelect = (value) => {
        setSelected(value);
        onAnswerChange && onAnswerChange(value);
    };

    return (
        <Card className="w-full">
            <CardContent className="p-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                        Câu hỏi {questionNumber}
                    </h3>
                    <p className="text-base text-foreground">
                        {question?.text || "Nội dung câu hỏi trắc nghiệm: Ai béo nhất trong DXH?"}
                    </p>
                    
                    <div className="space-y-3">
                        {(question?.options || [
                            { id: 'A', text: 'Lam Fong béo' },
                            { id: 'B', text: 'Nhật Lam béo' },
                            { id: 'C', text: 'Dáng Cương béo' },
                            { id: 'D', text: 'Nhi Gia béo' }
                        ]).map((option) => (
                            <div key={option.id} className="flex items-center space-x-3">
                                <Button
                                    variant={selected === option.id ? "default" : "outline"}
                                    className={`w-8 h-8 rounded-full p-0 flex items-center justify-center ${
                                        selected === option.id 
                                            ? 'bg-primary text-primary-foreground' 
                                            : 'border-2'
                                    }`}
                                    onClick={() => handleAnswerSelect(option.id)}
                                >
                                    {option.id}
                                </Button>
                                <label 
                                    className="text-sm font-medium cursor-pointer flex-1"
                                    onClick={() => handleAnswerSelect(option.id)}
                                >
                                    {option.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MultipleChoiceQuestion;
