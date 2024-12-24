import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// smtp mailer
const transporter = nodemailer.createTransport({
  host: `${process.env.SMTP_HOST}`,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: `${process.env.SMTP_USERNAME}`,
    pass: `${process.env.SMTP_PASSWORD}`,
  },
});

// anti-dos agent tracking
interface Agent {
  ip: string;
  req_count: number;
  stamp: number;
}

const agents: Agent[] = [];

const cleanAgents = () => {
  const toRemove = [];
  for (const agent of agents) {
    if (Date.now() > agent.stamp + 1000 * 60 * 10) {
      const index = agents.indexOf(agent, 0);
      toRemove.push(index);
    }
  }
  for (const rem of toRemove) {
    agents.splice(rem, 1);
  }
};

const agentPassSpamCheck = (
  req: NextApiRequest,
  res: NextApiResponse
): boolean => {
  // clean agents
  cleanAgents();
  // get agent from request headers
  const forwarded = req.headers["x-forwarded-for"] as string;
  const ip = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;
  const fAgent = agents.find((a) => a.ip == ip);
  if (!fAgent) {
    // add new agent
    if (ip != undefined) {
      const accessor: Agent = {
        ip,
        req_count: 0,
        stamp: Date.now(),
      };
      agents.push(accessor);
    }
  } else {
    // decrement counter when valid req
    if (Date.now() > fAgent.stamp + 1000 * 10 && fAgent.req_count > 0) {
      fAgent.req_count -= 3;
    }
    if (Date.now() > fAgent.stamp + 1000 * 20 && fAgent.req_count > 0) {
      fAgent.req_count -= 5;
    }
    if (Date.now() > fAgent.stamp + 1000 * 40 && fAgent.req_count > 0) {
      fAgent.req_count -= 8;
    }
    if (Date.now() > fAgent.stamp + 1000 * 60 && fAgent.req_count > 0) {
      fAgent.req_count -= 13;
    }

    // increment counter if too often
    if (Date.now() - 400 < fAgent.stamp) {
      fAgent.req_count++;
    }
    if (Date.now() - 1000 * 1 < fAgent.stamp) {
      fAgent.req_count++;
    }
    if (Date.now() - 1000 * 3 < fAgent.stamp) {
      fAgent.req_count++;
    }
    if (Date.now() - 1000 * 5 < fAgent.stamp) {
      fAgent.req_count++;
    }

    fAgent.stamp = Date.now();

    // rate error
    if (fAgent.req_count > 3) {
      res.status(200).json({
        statusCode: 218,
        message: "rate-error",
      });
      return false;
    }
  }
  return true;
};

// =========================

// send email api function
async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (!agentPassSpamCheck(req, res)) {
    console.log(agents);
    return;
  }

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${process.env.SMTP_USERNAME}`, // sender address
      to: "inquiries@cryptech.services", // list of receivers
      subject: `[CT Services] : ${req.body.subject}`, // Subject line
      // text: `${req.body.message}`, // plain text body
      html: `<html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Cryptech Services</title>
        <style>
    @media only screen and (max-width: 620px) {
      table.body h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
    
      table.body p,
    table.body ul,
    table.body ol,
    table.body td,
    table.body span,
    table.body a {
        font-size: 16px !important;
      }
    
      table.body .wrapper,
    table.body .article {
        padding: 10px !important;
      }
    
      table.body .content {
        padding: 0 !important;
      }
    
      table.body .container {
        padding: 0 !important;
        width: 100% !important;
      }
    
      table.body .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
    
      table.body .btn table {
        width: 100% !important;
      }
    
      table.body .btn a {
        width: 100% !important;
      }
    
      table.body .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }
    @media all {
      .ExternalClass {
        width: 100%;
      }
    
      .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
      }
    
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
    
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
    
      .btn-primary table td:hover {
        background-color: #34495e !important;
      }
    
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
      }
    }
    </style>
      </head>
      <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
        <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Hi, ${req.body.fullname} sent an email.</span>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
          <tr>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 75%; padding: 10px; width: 75%; margin: 0 auto;" width="580" valign="top">
              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 75%; padding: 10px;">
    
                <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
    
                  <tr>
                    <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tr>
                          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi there,</p>
                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">You've got a new mail from <b>${req.body.fullname}</b>, sender's email is: <b> ${req.body.email}</b>.</p>
                            <hr>
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Message: </p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${req.body.message}</p>
                      </td>
                    </tr>
                  </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
  
                </table>
    
                <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                    <tr>
                      <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                        <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Cryptech Services 2023</span>
                      </td>
                    </tr>
                  </table>
                </div>
    
              </div>
            </td>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>`, // html body
    });

    // send mail to user with defined transport object
    const infotoUser = await transporter.sendMail({
      from: `${process.env.SMTP_USERNAME}`, // sender address
      to: `${req.body.email}`, // list of receivers
      subject: `Receipt Confirmation: Your Inquiry to Cryptech Services`, // Subject line
      // text: `${req.body.message}`, // plain text body
      html: `<html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Cryptech Services</title>
            <style>
        @media only screen and (max-width: 620px) {
          table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important;
          }
        
          table.body p,
        table.body ul,
        table.body ol,
        table.body td,
        table.body span,
        table.body a {
            font-size: 16px !important;
          }
        
          table.body .wrapper,
        table.body .article {
            padding: 10px !important;
          }
        
          table.body .content {
            padding: 0 !important;
          }
        
          table.body .container {
            padding: 0 !important;
            width: 100% !important;
          }
        
          table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
          }
        
          table.body .btn table {
            width: 100% !important;
          }
        
          table.body .btn a {
            width: 100% !important;
          }
        
          table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important;
          }
        }
        @media all {
          .ExternalClass {
            width: 100%;
          }
        
          .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
          }
        
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
        
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
        
          .btn-primary table td:hover {
            background-color: #34495e !important;
          }
        
          .btn-primary a:hover {
            background-color: #34495e !important;
            border-color: #34495e !important;
          }
        }
        </style>
          </head>
          <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Hi, ${req.body.fullname} sent an email.</span>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
              <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 75%; padding: 10px; width: 75%; margin: 0 auto;" width="580" valign="top">
                  <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 75%; padding: 10px;">
        
                    <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
        
                      <tr>
                        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                            <tr>
                              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi <b>${req.body.fullname}</b>,</p>
                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This is an automated message to confirm that we have received your inquiry submitted through the <b>Cryptech Services</b> website.</p>
                                <hr>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;" width="100%">
                              <tbody>
                                <tr>
                                  <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Please note that this email address is not monitored for replies. Your inquiry has been registered and will be reviewed by our team promptly. If necessary, we will be in touch with you using the contact details you provided.</p>
                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">If you need further assistance or have any updates related to your inquiry, please contact us at <a href="mailto:inquiries@cryptech.services."><b>inquiries@cryptech.services</b>.</a></p>
                            <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Thank you for considering Cryptech Services.</p>
                          </td>
                        </tr>
                      </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
      
                    </table>
        
                    <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tr>
                          <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Cryptech Services 2023</span>
                          </td>
                        </tr>
                      </table>
                    </div>
        
                  </div>
                </td>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
              </tr>
            </table>
          </body>
        </html>`, // html body
    });

    //console.log("Message sent: %s", info.messageId);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: "An unexpected error occurred" });
  }

  return res.status(200).json({ error: undefined });
}

export default sendEmail;
