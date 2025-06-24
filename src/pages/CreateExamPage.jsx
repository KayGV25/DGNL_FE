// src/pages/CreateExamPage.jsx
import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const subjects = ["Toán học", "Vật lý", "Hóa học"];
const chapters = ["Chương 1. Hàm số", "Chương 2. Hình học"];
const durations = ["15 phút", "30 phút", "45 phút", "60 phút"];

const questionSections = [
    {
        title: "Phần 1. Trắc nghiệm khách quan",
        description: "Tùy chỉnh số câu hỏi và độ khó phù hợp",
        fields: ["Mức độ nhận biết", "Mức độ thông hiểu", "Mức độ vận dụng"],
    },
    {
        title: "Phần 2. Trắc nghiệm đúng sai",
        description: "Tùy chỉnh số câu hỏi và độ khó",
        fields: ["Mức độ nhận biết", "Mức độ thông hiểu", "Mức độ vận dụng"],
    },
    {
        title: "Phần 3. Tự luận ngắn",
        description: "Tùy chỉnh số câu hỏi và độ khó",
        fields: ["Mức độ nhận biết", "Mức độ thông hiểu", "Mức độ vận dụng"],
    },
];

export default function CreateExamPage() {
    const [form, setForm] = useState({
        subject: "",
        chapter: "",
        duration: "",
        questions: [
            { nhanBiet: 0, thongHieu: 0, vanDung: 0 },
            { nhanBiet: 0, thongHieu: 0, vanDung: 0 },
            { nhanBiet: 0, thongHieu: 0, vanDung: 0 },
        ],
    });

    // Tính tổng số token (tổng số câu hỏi)
    const totalToken = form.questions.reduce(
        (sum, q) => sum + q.nhanBiet + q.thongHieu + q.vanDung,
        0
    );

    const handleSelectChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleInputChange = (sectionIdx, fieldIdx, value) => {
        const updatedQuestions = [...form.questions];
        const keys = ["nhanBiet", "thongHieu", "vanDung"];
        updatedQuestions[sectionIdx][keys[fieldIdx]] = Number(value);
        setForm({ ...form, questions: updatedQuestions });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle submit logic (call API, etc.)
        alert("Exam created! (Demo)");
    };

    return (
        <div className="bg-background text-foreground min-h-screen p-8 pt-0">
            <form
                onSubmit={handleSubmit}
                className="mx-auto p-4 sm:p-6 md:p-8 rounded-lg"
            >
                <h2 className="text-2xl font-bold mb-1">Khởi tạo đề thi</h2>
                <p className="mb-6 text-gray-600">
                    Hãy tùy chỉnh đề thi bạn muốn khởi tạo. Mỗi câu hỏi bạn tạo sẽ tốn 01 token.<br />
                    Token của tôi: <b>0</b>
                </p>
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Môn học</label>
                        <select
                            name="subject"
                            value={form.subject}
                            onChange={handleSelectChange}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 bg-background text-foreground"
                        >
                            <option value="">Chọn môn học</option>
                            {subjects.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Chương</label>
                        <select
                            name="chapter"
                            value={form.chapter}
                            onChange={handleSelectChange}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 bg-background text-foreground"
                        >
                            <option value="">Chọn chương</option>
                            {chapters.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Thời gian</label>
                        <select
                            name="duration"
                            value={form.duration}
                            onChange={handleSelectChange}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 bg-background text-foreground"
                        >
                            <option value="">Chọn thời gian</option>
                            {durations.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    {questionSections.map((section, sectionIdx) => (
                        <div key={section.title} className="mb-8 last:mb-0">
                            <b className="block mb-1">{section.title}</b>
                            <p className="mb-3 text-gray-500">{section.description}</p>
                            <div className="flex flex-col md:flex-row gap-4">
                                {section.fields.map((field, fieldIdx) => (
                                    <div key={field} className="flex-1 mb-4 md:mb-0">
                                        <label className="block mb-1 text-sm">{field}</label>
                                        <Input
                                            type="number"
                                            min={0}
                                            value={form.questions[sectionIdx][["nhanBiet", "thongHieu", "vanDung"][fieldIdx]]}
                                            onChange={(e) =>
                                                handleInputChange(sectionIdx, fieldIdx, e.target.value)
                                            }
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <Button
                        type="submit"
                        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 w-full sm:w-auto cursor-pointer"
                    >
                        Tạo đề thi {totalToken > 0 ? `(${totalToken} token)` : ""}
                    </Button>
                </div>
            </form>
        </div>
    );
}