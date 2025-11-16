"use client"

import { useState, useEffect } from "react"
import { getContactMessages, updateContactMessageStatus, deleteContactMessage } from "@/lib/cms-storage"
import { Button } from "@/components/ui/button"
import { Trash2, Mail, MailOpen } from "lucide-react"

export default function ContactMessagesManager() {
  const [messages, setMessages] = useState<any[]>([])

  useEffect(() => {
    loadMessages()
  }, [])

  const loadMessages = () => {
    const data = getContactMessages()
    setMessages(data.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()))
  }

  const handleStatusChange = (id: string, status: "unread" | "read") => {
    updateContactMessageStatus(id, status)
    loadMessages()
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      deleteContactMessage(id)
      loadMessages()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Messages ({messages.length})</h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            Unread: {messages.filter((m) => m.status === "unread").length}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
            Read: {messages.filter((m) => m.status === "read").length}
          </span>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-12 bg-muted rounded-lg">
          <p className="text-muted-foreground">No contact messages received yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`bg-card border rounded-lg p-6 shadow-sm ${
                message.status === "unread" ? "border-l-4 border-l-blue-500" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{message.subject}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        message.status === "unread" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.status === "unread" ? (
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" /> Unread
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <MailOpen className="w-3 h-3" /> Read
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>From:</strong> {message.fullName}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>Email:</strong> {message.email}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>Phone:</strong> {message.phone}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Submitted:</strong> {new Date(message.submittedAt).toLocaleString()}
                  </p>
                  <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                {message.status === "unread" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusChange(message.id, "read")}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <MailOpen className="w-4 h-4 mr-1" />
                    Mark as Read
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusChange(message.id, "unread")}
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <Mail className="w-4 h-4 mr-1" />
                    Mark as Unread
                  </Button>
                )}
                <Button size="sm" variant="destructive" onClick={() => handleDelete(message.id)} className="ml-auto">
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
