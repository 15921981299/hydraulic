const FROM = 'Hydraulic Match <rfq@hydraulicmatch.com>';

export async function sendResendEmail(resendKey, { to, subject, text, replyTo }) {
  const payload = {
    from: FROM,
    to,
    subject,
    text,
  };
  if (replyTo) payload.reply_to = replyTo;

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const detail = await resp.text();
    throw new Error(`Resend failed (${resp.status}): ${detail}`);
  }

  return resp;
}

export function buildCustomerAutoReply({ name, siteUrl }) {
  return [
    `Hi ${name},`,
    '',
    'Thank you for submitting your hydraulic component inquiry to Hydraulic Match.',
    '',
    'We have received your inquiry. Our team will review the original model code, technical details, photos, quantity, and destination before quotation.',
    '',
    'What happens next:',
    '1. Complete model-code and inquiry review',
    '2. Technical parameter and supplier confirmation',
    '3. Follow-up if replacement or compatibility details need confirmation',
    '',
    'Helpful resources:',
    `- Hydraulic product categories: ${siteUrl}/products/`,
    `- Matching process: ${siteUrl}/matching-process/`,
    '',
    'Questions before we reply? Email sales@hydraulicmatch.com - we respond within one business day.',
    '',
    'Best regards,',
    'Hydraulic Match Team',
  ].join('\n');
}
