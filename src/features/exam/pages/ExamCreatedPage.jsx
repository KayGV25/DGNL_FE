import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CircleCheck, Copy, Eye, FileDown, SquarePen } from 'lucide-react'

const ExamCreatedPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const testData = location.state?.testData

  const handleCreateAnother = () => {
    navigate('/exams/setup')
  }

  const handleGoHome = () => {
    navigate('/')
  }

  const handleViewTest = () => {
    // TODO: Navigate to test view/edit page
    alert('Chức năng xem đề thi sẽ được phát triển sớm!')
  }

  const handleEditTest = () => {
    // TODO: Navigate to test edit page
    alert('Chức năng chỉnh sửa đề thi sẽ được phát triển sớm!')
  }

  const handleTakeTest = () => {
    // TODO: Navigate to test taking page
    alert('Chức năng vào thi sẽ được phát triển sớm!')
  }

  return (
    <div className='bg-background flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8'>
      <div className='mx-auto w-full max-w-3xl text-center'>
        {/* Success Icon */}
        <CircleCheck className='mx-auto mb-4 h-16 w-16 text-green-600 sm:mb-6 sm:h-20 sm:w-20' />

        {/* Success Message */}
        <h1 className='text-foreground mb-4 text-2xl font-bold sm:text-3xl'>
          Tạo đề thi thành công!
        </h1>
        <p className='text-muted-foreground mb-6 text-base sm:mb-8 sm:text-lg'>
          Đề thi "{testData?.title || 'Untitled'}" đã được tạo và lưu vào hệ thống.
        </p>

        {/* Test Summary */}
        {testData && (
          <section className='bg-card mb-6 rounded-lg border p-4 text-left sm:mb-8 sm:p-6'>
            <h2 className='text-foreground mb-4 text-center text-lg font-semibold sm:mb-6 sm:text-xl'>
              Thông tin đề thi
            </h2>
            <div className='grid grid-cols-1 gap-4 sm:place-items-center md:grid-cols-2 md:gap-6'>
              <div className='space-y-3'>
                <div>
                  <span className='text-muted-foreground text-sm'>Tên đề thi:</span>
                  <p className='text-foreground font-medium'>{testData.title}</p>
                </div>
                <div>
                  <span className='text-muted-foreground text-sm'>Môn học:</span>
                  <p className='text-foreground font-medium'>
                    {testData.subject || 'Chưa xác định'}
                  </p>
                </div>
                <div>
                  <span className='text-muted-foreground text-sm'>Chương:</span>
                  <p className='text-foreground font-medium'>
                    {testData.chapter || 'Chưa xác định'}
                  </p>
                </div>
              </div>
              <div className='space-y-3'>
                <div>
                  <span className='text-muted-foreground text-sm'>Thời gian:</span>
                  <p className='text-foreground font-medium'>{testData.duration}</p>
                </div>
                <div>
                  <span className='text-muted-foreground text-sm'>Số câu hỏi:</span>
                  <p className='text-foreground font-medium'>{testData.questionCount} câu</p>
                </div>
                <div>
                  <span className='text-muted-foreground text-sm'>Độ khó:</span>
                  <p className='text-foreground font-medium'>
                    {testData.difficulty === 'easy'
                      ? 'Dễ'
                      : testData.difficulty === 'medium'
                        ? 'Trung bình'
                        : 'Khó'}
                  </p>
                </div>
              </div>
              {testData.description && (
                <div className='mt-4 border-t pt-4 md:col-span-2 md:mt-6 md:pt-6'>
                  <span className='text-muted-foreground text-sm'>Mô tả:</span>
                  <p className='text-foreground mt-1 font-medium md:mt-2'>{testData.description}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Action Buttons */}
        <section className='mb-6 flex flex-col justify-center gap-3 sm:mb-8 sm:flex-row sm:gap-4'>
          <Button onClick={handleTakeTest} className='bg-green-600 text-white hover:bg-green-700'>
            <CircleCheck className='mr-2 h-4 w-4' />
            Vào thi
          </Button>
          <Button onClick={handleViewTest} variant='outline'>
            <Eye className='mr-2 h-4 w-4' />
            Xem đề thi
          </Button>
          <Button onClick={handleEditTest} variant='outline'>
            <SquarePen className='mr-2 h-4 w-4' />
            Chỉnh sửa
          </Button>
        </section>

        {/* Secondary Actions */}
        <section className='mb-6 flex flex-col justify-center gap-3 sm:mb-8 sm:flex-row'>
          <Button onClick={handleCreateAnother} variant='outline'>
            Tạo đề thi khác
          </Button>
          <Button onClick={handleGoHome} variant='outline'>
            Về trang chủ
          </Button>
        </section>

        {/* Additional Actions */}
        <section className='bg-muted/50 rounded-lg p-4 sm:p-6'>
          <h3 className='text-foreground mb-3 text-lg font-semibold'>Hành động khác</h3>
          <p className='text-muted-foreground mb-4 text-sm sm:mb-6'>
            Bạn có thể chia sẻ đề thi này với học sinh hoặc xuất ra file để sử dụng
          </p>
          <div className='flex flex-wrap justify-center gap-2 sm:gap-3'>
            <Button
              size='sm'
              variant='outline'
              onClick={() => alert('Chức năng chia sẻ sẽ được phát triển sớm!')}
            >
              <SquarePen className='mr-1.5 h-4 w-4' />
              Chia sẻ
            </Button>
            <Button
              size='sm'
              variant='outline'
              onClick={() => alert('Chức năng xuất PDF sẽ được phát triển sớm!')}
            >
              <FileDown className='mr-1.5 h-4 w-4' />
              Xuất PDF
            </Button>
            <Button
              size='sm'
              variant='outline'
              onClick={() => alert('Chức năng sao chép sẽ được phát triển sớm!')}
            >
              <Copy className='mr-1.5 h-4 w-4' />
              Sao chép đề
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ExamCreatedPage
