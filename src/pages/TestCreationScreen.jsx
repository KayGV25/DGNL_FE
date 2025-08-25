import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useNavigate, useLocation } from 'react-router-dom';

const TestCreationScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const examConfig = location.state?.examConfig;
    const totalQuestions = location.state?.totalQuestions || 0;

    const [testData, setTestData] = useState({
        title: '',
        description: '',
        duration: examConfig?.duration || '60 phút',
        questionCount: totalQuestions || 10,
        difficulty: 'medium',
        subject: examConfig?.subject || '',
        chapter: examConfig?.chapter || ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const difficulties = [
        { value: 'easy', label: 'Dễ' },
        { value: 'medium', label: 'Trung bình' },
        { value: 'hard', label: 'Khó' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTestData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Simulate API call
            console.log('Creating test with data:', testData);
            console.log('Exam configuration:', examConfig);

            // Simulate loading time
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Navigate to success page
            navigate('/test-created', {
                state: {
                    testData: testData,
                    examConfig: examConfig
                }
            });
        } catch (error) {
            console.error('Error creating test:', error);
            alert('Có lỗi xảy ra khi tạo đề thi. Vui lòng thử lại!');
        } finally {
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        navigate('/create-exam');
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={handleBack}
                        className="mb-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Quay lại
                    </button>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Tạo đề thi</h1>
                    <p className="text-muted-foreground">Hoàn thiện thông tin đề thi để bắt đầu tạo</p>
                </div>

                {/* Configuration Summary */}
                {examConfig && (
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6 mb-8">
                        <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            Cấu hình đề thi
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span className="text-blue-700 dark:text-blue-300 font-medium">Môn học:</span>
                                <p className="text-blue-900 dark:text-blue-100">{examConfig.subject || 'Chưa chọn'}</p>
                            </div>
                            <div>
                                <span className="text-blue-700 dark:text-blue-300 font-medium">Chương:</span>
                                <p className="text-blue-900 dark:text-blue-100">{examConfig.chapter || 'Chưa chọn'}</p>
                            </div>
                            <div>
                                <span className="text-blue-700 dark:text-blue-300 font-medium">Thời gian:</span>
                                <p className="text-blue-900 dark:text-blue-100">{examConfig.duration || 'Chưa chọn'}</p>
                            </div>
                            <div>
                                <span className="text-blue-700 dark:text-blue-300 font-medium">Tổng câu hỏi:</span>
                                <p className="text-blue-900 dark:text-blue-100">{totalQuestions} câu</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-card rounded-lg border p-6 space-y-6">
                        {/* Basic Information */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-foreground">Thông tin đề thi</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                                        Tên đề thi *
                                    </label>
                                    <Input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={testData.title}
                                        onChange={handleInputChange}
                                        placeholder="Nhập tên đề thi"
                                        required
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="difficulty" className="block text-sm font-medium text-foreground mb-2">
                                        Độ khó
                                    </label>
                                    <select
                                        id="difficulty"
                                        name="difficulty"
                                        value={testData.difficulty}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                                    >
                                        {difficulties.map((diff) => (
                                            <option key={diff.value} value={diff.value}>
                                                {diff.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                                    Mô tả đề thi
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={testData.description}
                                    onChange={handleInputChange}
                                    placeholder="Mô tả ngắn về đề thi (tùy chọn)"
                                    rows="3"
                                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-vertical"
                                />
                            </div>
                        </div>

                        {/* Test Instructions */}
                        <div className="space-y-4 border-t pt-6">
                            <h2 className="text-xl font-semibold text-foreground">Hướng dẫn làm bài</h2>
                            <div className="bg-muted/50 rounded-lg p-4">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Đề thi sẽ được tạo tự động dựa trên cấu hình bạn đã chọn</li>
                                    <li>• Thời gian làm bài: {testData.duration}</li>
                                    <li>• Tổng số câu hỏi: {totalQuestions} câu</li>
                                    <li>• Bạn có thể xem lại và chỉnh sửa đề thi sau khi tạo</li>
                                </ul>
                            </div>
                        </div>

                        {/* Token Information */}
                        <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800 p-4">
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h3 className="text-yellow-800 dark:text-yellow-200 font-medium">Thông tin Token</h3>
                                    <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                                        Tạo đề thi này sẽ sử dụng <strong>{totalQuestions} token</strong>.
                                        Token hiện tại của bạn: <strong>0</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleBack}
                            className="sm:w-auto"
                            disabled={isLoading}
                        >
                            Quay lại
                        </Button>
                        <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 sm:w-auto"
                            disabled={isLoading || !testData.title.trim()}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Đang tạo đề thi...
                                </>
                            ) : (
                                `Tạo đề thi (${totalQuestions} token)`
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TestCreationScreen;
