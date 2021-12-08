import * as nodemailer from 'nodemailer';

class MailService {
  transporter: any;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
      },
    });
  }
  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
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

export default new MailService();
