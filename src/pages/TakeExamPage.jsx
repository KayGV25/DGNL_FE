import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import ExamTimer from '../components/ExamTimer';
import QuestionNavigation from '../components/QuestionNavigation';
import MultipleChoiceQuestion from '../components/questions/MultipleChoiceQuestion';
import TrueFalseQuestion from '../components/questions/TrueFalseQuestion';
import ShortAnswerQuestion from '../components/questions/ShortAnswerQuestion';

const TakeExamPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const testData = location.state?.testData;
    
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState({});
    
    // Sample questions data - replace with actual data from props/API
    const sampleQuestions = [
        {
            id: 1,
            type: 'multiple-choice',
            text: 'Nội dung câu hỏi trắc nghiệm: Ai béo nhất trong DXH?',
            options: [
                { id: 'A', text: 'Lam Fong béo' },
                { id: 'B', text: 'Nhật Lam béo' },
                { id: 'C', text: 'Dáng Cương béo' },
                { id: 'D', text: 'Nhi Gia béo' }
            ]
        },
        {
            id: 2,
            type: 'true-false',
            text: 'Nội dung câu hỏi đúng sai:',
            statements: [
                { id: 'a', text: 'Nội dung câu a' },
                { id: 'b', text: 'Nội dung câu b' },
                { id: 'c', text: 'Nội dung câu c' },
                { id: 'd', text: 'Nội dung câu d' }
            ]
        },
        {
            id: 3,
            type: 'short-answer',
            text: 'Nội dung câu hỏi tự luận',
            hint: 'Đáp án cần tính toán'
        }
    ];

    const totalQuestions = testData?.questionCount || 34;
    const answeredQuestions = Object.keys(answers).map(Number);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleQuestionSelect = (questionNumber) => {
        setCurrentQuestion(questionNumber);
    };

    const handlePrevious = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleTimeUp = () => {
        alert('Hết thời gian! Bài thi sẽ được nộp tự động.');
        // Handle auto-submit
        navigate('/');
    };

    const handleSubmitExam = () => {
        if (window.confirm('Bạn có chắc chắn muốn nộp bài?')) {
            // Handle exam submission
            alert('Nộp bài thành công!');
            navigate('/');
        }
    };

    const getCurrentQuestionData = () => {
        // In a real app, this would fetch the actual question data
        const questionIndex = (currentQuestion - 1) % sampleQuestions.length;
        return sampleQuestions[questionIndex];
    };

    const renderQuestion = () => {
        const questionData = getCurrentQuestionData();
        const questionId = currentQuestion;

        switch (questionData.type) {
            case 'multiple-choice':
                return (
                    <MultipleChoiceQuestion
                        question={questionData}
                        questionNumber={currentQuestion}
                        selectedAnswer={answers[questionId]}
                        onAnswerChange={(answer) => handleAnswerChange(questionId, answer)}
                    />
                );
            case 'true-false':
                return (
                    <TrueFalseQuestion
                        question={questionData}
                        questionNumber={currentQuestion}
                        selectedAnswer={answers[questionId]}
                        onAnswerChange={(answer) => handleAnswerChange(questionId, answer)}
                    />
                );
            case 'short-answer':
                return (
                    <ShortAnswerQuestion
                        question={questionData}
                        questionNumber={currentQuestion}
                        selectedAnswer={answers[questionId]}
                        onAnswerChange={(answer) => handleAnswerChange(questionId, answer)}
                    />
                );
            default:
                return <div>Unknown question type</div>;
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-card">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold">
                                Bài thi ({totalQuestions} phút) (Toán)
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Mã đề thi: #{testData?.id || '00000000'}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm">
                                <span className="text-muted-foreground">Số câu hỏi:</span>
                                <span className="font-medium ml-1">{totalQuestions}</span>
                            </div>
                            <div className="text-sm">
                                <span className="text-muted-foreground">Kiểu câu hỏi:</span>
                                <span className="font-medium ml-1">12 trắc nghiệm, 4 đúng sai, 6 tự luận ngắn</span>
                            </div>
                            <div className="text-sm">
                                <span className="text-muted-foreground">Độ khó:</span>
                                <span className="font-medium ml-1">12 dễ, 6 trung bình, 4 khó</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Question */}
                        {renderQuestion()}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center">
                            <Button
                                variant="outline"
                                onClick={handlePrevious}
                                disabled={currentQuestion === 1}
                            >
                                ← Câu trước
                            </Button>
                            
                            <span className="text-sm text-muted-foreground">
                                Câu {currentQuestion} / {totalQuestions}
                            </span>
                            
                            <Button
                                variant="outline"
                                onClick={handleNext}
                                disabled={currentQuestion === totalQuestions}
                            >
                                Câu sau →
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Timer */}
                        <ExamTimer 
                            initialTime={45 * 60} // 45 minutes
                            onTimeUp={handleTimeUp}
                        />

                        {/* Question Navigation */}
                        <QuestionNavigation
                            totalQuestions={totalQuestions}
                            currentQuestion={currentQuestion}
                            answeredQuestions={answeredQuestions}
                            onQuestionSelect={handleQuestionSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeExamPage;
