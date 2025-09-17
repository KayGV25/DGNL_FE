import React, { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeftIcon, Loader2Icon, InfoIcon } from 'lucide-react'
import { examService } from '../services/examService'

const ExamCreatePage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const examConfig = location.state?.examConfig
  const totalQuestions = location.state?.totalQuestions || 0

  const [testData, setTestData] = useState({
    title: '',
    description: '',
    duration: examConfig?.duration || '60 phút',
    questionCount: totalQuestions || 10,
    difficulty: 'medium',
    subject: examConfig?.subject || '',
    chapter: examConfig?.chapter || ''
  })

  const [isLoading, setIsLoading] = useState(false)

  const difficulties = [
    { value: 'easy', label: 'Dễ' },
    { value: 'medium', label: 'Trung bình' },
    { value: 'hard', label: 'Khó' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTestData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await examService.createExam(testData)
      navigate('/exams/success', {
        state: {
          testData: testData
        }
      })
    } catch (error) {
      console.error('Failed to create exam:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    navigate('/exams/setup')
  }

  return (
    <div className='bg-background'>
      <div className='mx-auto max-w-[75vw] px-4 pt-8'>
        {/* Header */}
        <header className='mb-4'>
          <h1 className='text-foreground mb-2 text-3xl font-bold'>Tạo đề thi</h1>
          <p className='text-muted-foreground'>Hoàn thiện thông tin đề thi để bắt đầu tạo</p>
        </header>

        {/* Main Form */}
        <main>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='bg-card rounded-lg border p-6'>
              {/* Configuration Summary */}
              {examConfig && (
                <section className='mb-6'>
                  <h2 className='mb-4 text-lg font-semibold'>Cấu hình đề thi</h2>
                  <div className='grid grid-cols-2 gap-4 text-sm md:grid-cols-4'>
                    <div>
                      <span className='font-medium'>Môn học:</span>
                      <p className=''>{examConfig.subject || 'Chưa chọn'}</p>
                    </div>
                    <div>
                      <span className='font-medium'>Chương:</span>
                      <p className=''>{examConfig.chapter || 'Chưa chọn'}</p>
                    </div>
                    <div>
                      <span className='font-medium'>Thời gian:</span>
                      <p>{examConfig.duration || 'Chưa chọn'}</p>
                    </div>
                    <div>
                      <span className='font-medium'>Tổng câu hỏi:</span>
                      <p className=''>{totalQuestions} câu</p>
                    </div>
                  </div>
                </section>
              )}
              {/* Basic Information */}
              <section className='mb-6 space-y-4'>
                <h2 className='text-foreground text-xl font-semibold'>Thông tin đề thi</h2>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='title'
                      className='text-foreground mb-2 block text-sm font-medium'
                    >
                      Tên đề thi *
                    </label>
                    <Input
                      type='text'
                      id='title'
                      name='title'
                      value={testData.title}
                      onChange={handleInputChange}
                      placeholder='Nhập tên đề thi'
                      required
                      className='w-full'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='difficulty'
                      className='text-foreground mb-2 block text-sm font-medium'
                    >
                      Độ khó
                    </label>
                    <select
                      id='difficulty'
                      name='difficulty'
                      value={testData.difficulty}
                      onChange={handleInputChange}
                      className='border-input bg-background focus:ring-ring w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none'
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
                  <label
                    htmlFor='description'
                    className='text-foreground mb-2 block text-sm font-medium'
                  >
                    Mô tả đề thi
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    value={testData.description}
                    onChange={handleInputChange}
                    placeholder='Mô tả ngắn về đề thi (tùy chọn)'
                    rows='3'
                    className='border-input bg-background focus:ring-ring resize-vertical w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none'
                  />
                </div>
              </section>

              {/* Test Instructions */}
              <section className='mb-6 space-y-4'>
                <h2 className='text-foreground text-xl font-semibold'>Hướng dẫn làm bài</h2>
                <div className='bg-muted/80 rounded-lg'>
                  <ul className='text-muted-foreground space-y-2 p-6 text-sm'>
                    <li>Đề thi sẽ được tạo tự động dựa trên cấu hình bạn đã chọn</li>
                    <li>Thời gian làm bài: {testData.duration}</li>
                    <li>Tổng số câu hỏi: {totalQuestions} câu</li>
                    <li>Bạn có thể xem lại và chỉnh sửa đề thi sau khi tạo</li>
                  </ul>
                </div>
              </section>

              {/* Token Information */}
              <section className='rounded-lg border p-4'>
                <div className='flex items-start gap-3'>
                  <InfoIcon className='mt-1 h-5 w-5' />
                  <div>
                    <h3 className='font-medium'>Thông tin Token</h3>
                    <p className='mt-1 text-sm'>
                      Tạo đề thi này sẽ sử dụng <strong>{totalQuestions} token</strong>. Token hiện
                      tại của bạn: <strong>0</strong>
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Action Buttons */}
            <section className='mb-4 flex flex-col gap-3 sm:flex-row sm:justify-end'>
              <Button onClick={handleBack} disabled={isLoading} className='bg-primary'>
                <ChevronLeftIcon />
                Quay lại
              </Button>
              <Button
                type='submit'
                className='bg-primary'
                disabled={isLoading || !testData.title.trim()}
              >
                {isLoading ? (
                  <>
                    <Loader2Icon className='animate-spin' />
                    Đang tạo đề thi...
                  </>
                ) : (
                  `Tạo đề thi (${totalQuestions} token)`
                )}
              </Button>
            </section>
          </form>
        </main>
      </div>
    </div>
  )
}

export default ExamCreatePage
