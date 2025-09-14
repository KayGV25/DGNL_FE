export const examService = {
  async createExam(examData) {
    setTimeout((resolve) => resolve, 1500)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 'mock-id'
        })
      }, 1500)
    })
  }
}
