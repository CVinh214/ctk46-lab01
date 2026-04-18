"use client";
import { useActionState, useState } from "react";
import { sendContactMessage, ContactFormState } from "./actions";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const initialState: ContactFormState = {
  success: false,
};

export default function ContactPage() {
  const [resetKey] = useState(0);
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  return (
    <div key={resetKey} className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <section className="rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-6 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/20 dark:to-gray-950">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Liên hệ
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Thông tin liên hệ */}
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Email</h3>
            <a
              href="mailto:volamchivinh@sv.dlu.edu.vn"
              className="text-sm text-emerald-600 hover:underline dark:text-emerald-400"
            >
              volamchivinh@sv.dlu.edu.vn
            </a>
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <h3 className="font-semibold mb-1">GitHub</h3>
            <a
              href="https://github.com/CVinh214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-600 hover:underline dark:text-emerald-400"
            >
              github.com/CVinh214
            </a>
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <h3 className="font-semibold mb-1">Địa chỉ</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
            </p>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="md:col-span-2">
          {state.success ? (
            <div className="flex h-full flex-col justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900 dark:bg-emerald-950/20">
              <h3 className="mb-2 text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                Gửi thành công!
              </h3>
              <p className="mb-4 text-emerald-600 dark:text-emerald-500">
                Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
              </p>
              <div>
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                >
                  Gửi tin nhắn khác
                </Button>
              </div>
            </div>
          ) : (
            <form
              action={formAction}
              className="space-y-4 rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Họ và tên</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nguyễn Văn A"
                  required
                />
                {state.errors?.name && (
                  <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
                {state.errors?.email && (
                  <p className="text-red-500 text-sm">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Tiêu đề</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Chủ đề bạn muốn trao đổi"
                  required
                />
                {state.errors?.subject && (
                  <p className="text-red-500 text-sm">
                    {state.errors.subject[0]}
                  </p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="message">Nội dung</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Viết nội dung tin nhắn..."
                  required
                  rows={5}
                />
                {state.errors?.message && (
                  <p className="text-red-500 text-sm">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>
              <SubmitButton className="w-full">Gửi tin nhắn</SubmitButton>
            </form>
          )}
        </div>
      </div>

      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Câu hỏi thường gặp
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Thời gian phản hồi thông thường là bao lâu?
            </AccordionTrigger>
            <AccordionContent>
              Tôi thường phản hồi các tin nhắn liên hệ trong vòng 24-48 giờ làm
              việc.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Bạn có nhận làm dự án freelance không?
            </AccordionTrigger>
            <AccordionContent>
              Có, tôi luôn sẵn lòng thảo luận về các dự án freelance thú vị, đặc
              biệt là các dự án liên quan đến Next.JS và React.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Làm thế nào để kết nối với bạn nhanh nhất?
            </AccordionTrigger>
            <AccordionContent>
              Gửi email trực tiếp hoặc điền vào form liên hệ trên là cách tốt
              nhất để bắt đầu một cuộc trò chuyện với tôi.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
