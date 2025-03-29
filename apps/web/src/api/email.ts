import { fetchApi } from './fetchApi'

interface EmailResponse {
  message: string
}

export const sendEmail = async (
  sender: string,
  subject: string,
  content: string,
): Promise<EmailResponse> =>
  fetchApi({
    endpoint: '/api/email/send',
    method: 'POST',
    body: {
      recipient: process.env.NEXT_PUBLIC_EMAIL,
      subject: `📌 ${subject} - ${sender}`,
      content,
    },
  })
