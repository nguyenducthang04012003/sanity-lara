import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  // console.log('API HIT')

  try {
    const {name, email, phone, address, message} = await req.json()

    console.log('DATA:', {name, email, phone, address, message})

    const emailResult = await resend.emails.send({
      from: 'LARA Acrylic <contact@laraacrylic.com>',
      to: ['thangconconhung@gmail.com', 'nguyenddungg357@gmail.com'],
      replyTo: email,
      subject: 'Khách hàng mới liên hệ',
      html: `
    <h2>Thông tin khách hàng</h2>
    <p><strong>Họ tên:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>SĐT:</strong> ${phone}</p>
    <p><strong>Địa chỉ:</strong> ${address}</p>
    <p><strong>Nội dung:</strong> ${message}</p>
  `,
    })

    console.log('EMAIL RESULT:', emailResult)

    return Response.json({success: true})
  } catch (err) {
    console.error('API ERROR:', err)
    return Response.json({success: false}, {status: 500})
  }
}
