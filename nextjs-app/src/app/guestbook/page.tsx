import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function GuestbookPage() {
  const entries = guestbookEntries;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <section className="rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-6 shadow-sm dark:border-emerald-900/40 dark:from-emerald-950/20 dark:to-gray-950">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Sổ lưu bút
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Hãy để lại lời nhắn cho tôi nhé!
        </p>
      </section>

      <GuestbookForm />
      <Separator className="my-8" />
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-500">
          {entries.length} lời nhắn
        </p>
        {entries.map((entry) => (
          <Card
            key={entry.id}
            className="border-gray-200/80 shadow-sm transition-colors hover:border-emerald-300 dark:hover:border-emerald-800"
          >
            <CardContent className="pt-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    {entry.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      {entry.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400">
                        {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                      </span>
                      <DeleteButton id={entry.id} />
                    </div>
                  </div>
                  <p className="text-gray-600">{entry.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {entries.length === 0 && (
          <p className="text-center text-gray-400 py-8">
            Chưa có lời nhắn nào. Hãy là người đầu tiên!
          </p>
        )}
      </div>
    </div>
  );
}
