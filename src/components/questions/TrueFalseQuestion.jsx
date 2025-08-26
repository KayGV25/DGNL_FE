import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const TrueFalseQuestion = ({ 
    question, 
    questionNumber, 
    onAnswerChange,
    selectedAnswer 
}) => {
    const [answers, setAnswers] = useState(selectedAnswer || {});

    const handleAnswerSelect = (statementId, value) => {
        const newAnswers = {
            ...answers,
            [statementId]: value
        };
        setAnswers(newAnswers);
        onAnswerChange && onAnswerChange(newAnswers);
    };

    const DropdownSelect = ({ statementId, value, options, placeholder }) => {
        return (
            <select
                value={value || ''}
                onChange={(e) => handleAnswerSelect(statementId, e.target.value)}
                className="px-3 py-1 border border-input bg-background rounded-md text-sm min-w-[120px] focus:outline-none focus:ring-2 focus:ring-ring"
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    };

    return (
        <Card className="w-full">
            <CardContent className="p-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                        Câu hỏi {questionNumber}
                    </h3>
                    <p className="text-base text-foreground mb-4">
                        {question?.text || "Nội dung câu hỏi đúng sai:"}
                    </p>
                    
                    <div className="space-y-3">
                        {(question?.statements || [
                            { id: 'a', text: 'Nội dung câu a' },
                            { id: 'b', text: 'Nội dung câu b' },
                            { id: 'c', text: 'Nội dung câu c' },
                            { id: 'd', text: 'Nối dung câu d' }
                        ]).map((statement) => (
                            <div key={statement.id} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex-1">
                                    <span className="font-medium">{statement.id}) </span>
                                    {statement.text}
                                </div>
                                <div className="ml-4">
                                    <DropdownSelect
                                        statementId={statement.id}
                                        value={answers[statement.id]}
                                        options={[
                                            { value: 'true', label: 'Đúng' },
                                            { value: 'false', label: 'Sai' },
                                            { value: 'not_selected', label: 'Chọn câu trả lời' }
                                        ]}
                                        placeholder="Chọn câu trả lời"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TrueFalseQuestion;
