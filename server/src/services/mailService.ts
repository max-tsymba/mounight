import nodemailer from 'nodemailer';

export default class MailService {
  transporter: any;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Activation account on ' + process.env.API_URL,
      text: '',
      html: `
        <div>
          <h1>For activation please click on link</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
    });
  }
}

// export default new MailService();
