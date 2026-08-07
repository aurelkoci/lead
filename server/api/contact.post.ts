import { z } from 'zod'

// 1. Përcakto skemën për filtrim/validim
const contactSchema = z.object({
  emeri_dhe_mbiemeri: z.string().min(2).max(100).trim(), // .trim() heq hapesirat e panevojshme
  email: z.string().email(), // Validim automatik i formatit email
  telefon: z.coerce
    .string()
    .transform(val => val.replace(/[^\d+]/g, '')) // Heq çdo gjë që nuk është shifër ose '+'
    .pipe(z.string().min(5).max(20)), // Lejon vetem numra dhe simbole telefoni
  mesazh: z.string().min(10).max(2000).trim() // Pastrimi i mesazhit
})
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const token = body.token

  if (!token) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Token not provided.'
    })
  }

  const verifyCloudflare = await verifyTurnstileToken(token)

  if (!verifyCloudflare.success) {
    throw createError({
      statusCode: 401,
      statusMessage: 'CAPTCHA e pavlefshme'
    })
  }
  // 1. Merr IP-në e përdoruesit
  const headers = getRequestHeaders(event)
  const ip
    = headers['cf-connecting-ip']
      || headers['x-forwarded-for']
      || event.node.req.socket.remoteAddress
  const realIp = typeof ip === 'string' ? ip.split(',')[0]?.trim() : ip
  // 2. Merr User-Agent (për pajisjen/browser-in)
  const userAgent = getRequestHeader(event, 'user-agent')
  const result = contactSchema.safeParse(body)

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors

    return {
      success: false,
      errors: fieldErrors
    }
  }

  const cleanData = result.data
  const dërguarMe = new Date().toLocaleString('sq-AL', {
    timeZone: 'Europe/Tirane',
    dateStyle: 'full',
    timeStyle: 'medium'
  })
  const sendEmail = async () => {
    return await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.NUXT_BREVO || '',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: 'KKG Project',
          email: 'aviaweb@kkg.al'
        },
        htmlContent: `
<html>
<head></head>
<body style="margin: 0; padding: 0; background-color: #eff6ff;">
  <div style="font-family: 'Inter', Arial, sans-serif; color: #0f172a; line-height: 1.6; max-width: 600px; margin: 20px auto; border: 1px solid #dbeafe; border-radius: 10px; overflow: hidden; background-color: #ffffff;">

    <div style="background-color: #1d4ed8; padding: 25px; text-align: center;">
      <img src="https://imagedelivery.net/9TCuC-C_N5mU3CIF2lbNyQ/01b60ce2-23b4-48b7-d533-d2dece497a00/public" alt="LEAD Consulting" style="width: 60px; height: 60px; margin-bottom: 10px;">
      <h1 style="color: #ffffff; font-family: 'Montserrat', sans-serif; margin: 0; font-size: 20px;">Kontakt i ri nga website!</h1>
    </div>

    <div style="padding: 30px;">
      <p style="font-size: 16px;"><strong>Dërguar më:</strong> ${dërguarMe}</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 120px;">Emri:</td>
          <td style="padding: 8px 0;">${cleanData.emeri_dhe_mbiemeri}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${cleanData.email}" style="color: #1d4ed8;">${cleanData.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Telefon:</td>
          <td style="padding: 8px 0;"><a href="tel:${cleanData.telefon}" style="color: #1d4ed8;">${cleanData.telefon}</a></td>
        </tr>
      </table>

      <div style="margin-top: 25px; padding: 15px; background-color: #f8fbff; border-left: 4px solid #2563eb;">
        <p style="margin: 0 0 5px 0; font-weight: bold;">Mesazhi:</p>
        <p style="margin: 0;">${cleanData.mesazh.replace(/\n/g, '<br>')}</p>
      </div>
    </div>

    <div style="margin: 20px 0; text-align: center; padding-bottom: 30px;">
      <a href="mailto:${cleanData.email}" style="background-color: #1d4ed8; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px; display: inline-block;">Email</a>
      <a href="tel:${cleanData.telefon}" style="background-color: #2563eb; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px; display: inline-block;">Telefon</a>
      <a href="https://wa.me/${cleanData.telefon.replace(/\D/g, '')}" style="background-color: #0ea5e9; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px; display: inline-block;">WhatsApp</a>
    </div>

    <div style="background-color: #f8fbff; border-top: 1px solid #dbeafe; padding: 20px; text-align: center; font-size: 11px; color: #475569;">
      <p style="margin: 0 0 10px 0;">Ky email është dërguar nga sistemi automatik i <strong>lead.al</strong></p>
      <p style="margin: 0 0 10px 0;">
        <a href="https://lead.al/politika-e-privatesis" style="color: #1d4ed8; text-decoration: underline;">Politika e Privatësisë</a> |
        <a href="https://lead.al" style="color: #475569; text-decoration: none;">lead.al</a>
      </p>
      <p style="margin: 4px 0; text-transform: uppercase; letter-spacing: 0.05em; font-weight: bold;">Detajet teknike të kërkesës</p>
      <div style="margin-top: 10px; border-top: 1px solid #dbeafe; padding-top: 10px;">
        <p style="margin: 2px 0;">IP Address: ${realIp}</p>
        <p style="margin: 2px 0;">Agent: ${userAgent}</p>
      </div>
    </div>
  </div>
</body>
</html>
          `,
        to: [{ email: 'aurelkoci@gmail.com', name: 'Aurel Koci' }],
        subject: 'KKG Project website'
      })
    })
  }
  const mailMessage = await sendEmail()

  return {
    success: true,
    message: 'Mesazhi u dërgua me sukses!',
    mailStatus: mailMessage.status
  }
})
