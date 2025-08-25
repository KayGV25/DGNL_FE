import React from 'react';
import { Button } from '../components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const TestCreatedPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const testData = location.state?.testData;
    const examConfig = location.state?.examConfig;

    const handleCreateAnother = () => {
        navigate('/create-exam');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    const handleViewTest = () => {
        // TODO: Navigate to test view/edit page
        alert('Chức năng xem đề thi sẽ được phát triển sớm!');
    };

    const handleEditTest = () => {
        // TODO: Navigate to test edit page
        alert('Chức năng chỉnh sửa đề thi sẽ được phát triển sớm!');
    };

    const handleTakeTest = () => {
        // TODO: Navigate to test taking page
        alert('Chức năng vào thi sẽ được phát triển sớm!');
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4 text-center">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-10 h-10 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                {/* Success Message */}
                <h1 className="text-3xl font-bold text-foreground mb-4">
                    Tạo đề thi thành công!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Đề thi "{testData?.title || 'Untitled'}" đã được tạo và lưu vào hệ thống.
                </p>

                {/* Test Summary */}
                {testData && (
                    <div className="bg-card rounded-lg border p-6 mb-8 text-left">
                        <h2 className="text-xl font-semibold text-foreground mb-4 text-center">Thông tin đề thi</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div>
                                    <span className="text-sm text-muted-foreground">Tên đề thi:</span>
                                    <p className="font-medium text-foreground">{testData.title}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-muted-foreground">Môn học:</span>
                                    <p className="font-medium text-foreground">{testData.subject || examConfig?.subject || 'Chưa xác định'}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-muted-foreground">Chương:</span>
                                    <p className="font-medium text-foreground">{testData.chapter || examConfig?.chapter || 'Chưa xác định'}</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <span className="text-sm text-muted-foreground">Thời gian:</span>
                                    <p className="font-medium text-foreground">{testData.duration}</p>
                                </div>
                                <div>
                                    <span className="text-sm text-muted-foreground">Số câu hỏi:</span>
                                    <p className="font-medium text-foreground">{testData.questionCount} câu</p>
                                </div>
                                <div>
                                    <span className="text-sm text-muted-foreground">Độ khó:</span>
                                    <p className="font-medium text-foreground">
                                        {testData.difficulty === 'easy' ? 'Dễ' :
                                            testData.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                                    </p>
                                </div>
                            </div>
                            {testData.description && (
                                <div className="md:col-span-2 mt-4 pt-4 border-t">
                                    <span className="text-sm text-muted-foreground">Mô tả:</span>
                                    <p className="font-medium text-foreground mt-1">{testData.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button
                        onClick={handleTakeTest}
                        className="bg-green-600 hover:bg-green-700 text-white"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Vào thi
                    </Button>
                    <Button
                        onClick={handleViewTest}
                        className="bg-primary hover:bg-primary/90"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Xem đề thi
                    </Button>
                    <Button
                        onClick={handleEditTest}
                        variant="outline"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Chỉnh sửa
                    </Button>
                </div>

                {/* Secondary Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                    <Button
                        onClick={handleCreateAnother}
                        variant="outline"
                    >
                        Tạo đề thi khác
                    </Button>
                    <Button
                        onClick={handleGoHome}
                        variant="outline"
                    >
                        Về trang chủ
                    </Button>
                </div>

                {/* Additional Actions */}
                <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Hành động khác</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Bạn có thể chia sẻ đề thi này với học sinh hoặc xuất ra file để sử dụng
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => alert('Chức năng chia sẻ sẽ được phát triển sớm!')}
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                            Chia sẻ
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => alert('Chức năng xuất PDF sẽ được phát triển sớm!')}
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Xuất PDF
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => alert('Chức năng sao chép sẽ được phát triển sớm!')}
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Sao chép đề
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCreatedPage;
