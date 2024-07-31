import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await gmail.users.messages.list({
    userId: 'www.aditya1115.ar@gmail.com', // Use 'me' for the authenticated user's email address
    maxResults: 5,
  });

  const messageIds = response.data.messages?.map((message) => message.id) || [];

  const messages = await Promise.all(
    messageIds.map(async (messageId) => {
      const messageRes = await gmail.users.messages.get({
        userId: 'www.aditya1115.ar@gmail.com',
        id: messageId as string,
      });

      const { id, snippet, labelIds, payload } = messageRes.data;
      const senderHeader = payload?.headers?.find(
        (header: any) => header.name === 'From'
      );
      const senderName = senderHeader ? senderHeader.value : 'Unknown Sender';
      const senderEmail = senderHeader
        ? senderHeader.value?.match(/<([^>]+)>/)?.[1]
        : 'Unknown Email';
      const label = labelIds?.[0];

      return {
        id,
        snippet,
        label,
        senderName,
        senderEmail,
      };
    })
  );

  console.log('Messages: ', messages);

  res.status(200).json(messages);
}

export { handler as GET, handler as POST };
