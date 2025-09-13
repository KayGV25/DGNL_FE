import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const subjects = ['Toán học', 'Vật lý', 'Hóa học']
const chapters = ['Chương 1. Hàm số', 'Chương 2. Hình học']
const durations = ['15 phút', '30 phút', '45 phút', '60 phút']

const questionSections = [
  {
    title: 'Phần 1. Trắc nghiệm khách quan',
    description: 'Tùy chỉnh số câu hỏi và độ khó phù hợp',
    fields: ['Mức độ nhận biết', 'Mức độ thông hiểu', 'Mức độ vận dụng']
  },
  {
    title: 'Phần 2. Trắc nghiệm đúng sai',
    description: 'Tùy chỉnh số câu hỏi và độ khó',
    fields: ['Mức độ nhận biết', 'Mức độ thông hiểu', 'Mức độ vận dụng']
  },
  {
    title: 'Phần 3. Tự luận ngắn',
    description: 'Tùy chỉnh số câu hỏi và độ khó',
    fields: ['Mức độ nhận biết', 'Mức độ thông hiểu', 'Mức độ vận dụng']
  }
]

const ExamSetup = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    subject: '',
    chapter: '',
    duration: '',
    questions: [
      { nhanBiet: 0, thongHieu: 0, vanDung: 0 },
      { nhanBiet: 0, thongHieu: 0, vanDung: 0 },
      { nhanBiet: 0, thongHieu: 0, vanDung: 0 }
    ]
  })

  const totalToken = form.questions.reduce(
    (sum, q) => sum + q.nhanBiet + q.thongHieu + q.vanDung,
    0
  )

  const handleSelectChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleInputChange = (sectionIdx, fieldIdx, value) => {
    const updatedQuestions = [...form.questions]
    const keys = ['nhanBiet', 'thongHieu', 'vanDung']
    const numericValue = value.replace(/[^0-9]/g, '')
    updatedQuestions[sectionIdx][keys[fieldIdx]] = numericValue === '' ? 0 : Number(numericValue)
    setForm({ ...form, questions: updatedQuestions })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate that at least some questions are configured
    if (totalToken === 0) {
      alert('Vui lòng cấu hình ít nhất 1 câu hỏi!')
      return
    }

    if (!form.subject || !form.chapter || !form.duration) {
      alert('Vui lòng điền đầy đủ thông tin môn học, chương và thời gian!')
      return
    }

    // Navigate to test creation screen with configuration
    navigate('/exams/create', {
      state: {
        examConfig: form,
        totalQuestions: totalToken
      }
    })
  }

  return (
    <div className='bg-background text-foreground p-8 pt-0'>
      <form onSubmit={handleSubmit} className='mx-auto rounded-lg p-4 sm:p-6 md:p-8'>
        <h2 className='mb-1 text-2xl font-bold'>Khởi tạo đề thi</h2>
        <p className='mb-6 text-gray-600'>
          Hãy tùy chỉnh đề thi bạn muốn khởi tạo. Mỗi câu hỏi bạn tạo sẽ tốn 01 token.
          <br />
          Token của tôi: <b>0</b>
        </p>
        <div className='mb-8 flex flex-col gap-4 md:flex-row'>
          <div className='flex-1'>
            <label className='mb-1 block font-medium'>Môn học</label>
            <select
              name='subject'
              value={form.subject}
              onChange={handleSelectChange}
              className='bg-background text-foreground w-full rounded border px-3 py-2 focus:border-blue-300 focus:ring focus:outline-none'
            >
              <option value=''>Chọn môn học</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className='flex-1'>
            <label className='mb-1 block font-medium'>Chương</label>
            <select
              name='chapter'
              value={form.chapter}
              onChange={handleSelectChange}
              className='bg-background text-foreground w-full rounded border px-3 py-2 focus:border-blue-300 focus:ring focus:outline-none'
            >
              <option value=''>Chọn chương</option>
              {chapters.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className='flex-1'>
            <label className='mb-1 block font-medium'>Thời gian</label>
            <select
              name='duration'
              value={form.duration}
              onChange={handleSelectChange}
              className='bg-background text-foreground w-full rounded border px-3 py-2 focus:border-blue-300 focus:ring focus:outline-none'
            >
              <option value=''>Chọn thời gian</option>
              {durations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='mb-4'>
          {questionSections.map((section, sectionIdx) => (
            <div key={section.title} className='mb-8 last:mb-0'>
              <b className='mb-1 block'>{section.title}</b>
              <p className='mb-3 text-gray-500'>{section.description}</p>
              <div className='flex flex-col gap-4 md:flex-row'>
                {section.fields.map((field, fieldIdx) => (
                  <div key={field} className='mb-4 flex-1 md:mb-0'>
                    <label className='mb-1 block text-sm'>{field}</label>
                    <Input
                      value={
                        form.questions[sectionIdx][
                          ['nhanBiet', 'thongHieu', 'vanDung'][fieldIdx]
                        ] === 0
                          ? ''
                          : form.questions[sectionIdx][
                              ['nhanBiet', 'thongHieu', 'vanDung'][fieldIdx]
                            ]
                      }
                      placeHolder={0}
                      onChange={(e) => handleInputChange(sectionIdx, fieldIdx, e.target.value)}
                      className='w-full rounded border px-3 py-2 focus:border-blue-300 focus:ring focus:outline-none'
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='mt-6'>
          <Button
            type='submit'
            className='bg-primary w-full cursor-pointer rounded px-6 py-2 sm:w-auto'
          >
            Tạo đề thi {totalToken > 0 ? `(${totalToken} token)` : ''}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ExamSetup
