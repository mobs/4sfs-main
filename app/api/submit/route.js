import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const dynamic = 'force-dynamic';

const CREDENTIALS = {
  "type": "service_account",
  "project_id": "private-limited-registration",
  "private_key_id": "899c21de913c0ab5b2846eda814d47503266ce94",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzXp6NTHX9KklY\nRFRbw2N7a/KxW/DJkWXYLD4kKl790hLycThkjBj0yac1Smot5QgyxvZ0Wwq12dP6\nYRZrhcDUIw9dNkU2Sa/RVbdLVI8ggMVsSaB522m4BoeEWLFaFhj2nCz7wskkkBd+\nAbfGv9LBdCgabah7YrnIdA9PQrRX5/f/1A37VWky6V8CYI25bqSYCQZZJv/dQ/Vv\nmaz1piaAHEmF59PcHF3gltkl6euZlChr4H9a8NqEbW/Qq2Rfkla88MkR6C5tGjZ9\ntNkH0fN85L71S5ghZFy3QXgZysCRnmI5SPgioo4jq5l/fWM92x3/lBSk1u8r3Y2e\nrlpJx2l1AgMBAAECggEAASjmtgutRKCKHl28vOYnxcPGKzLovOjpg2sP0MyMVjBO\nSo6EWpQUUjrej6fmRVsygR+Ltudiy5e3uOn5SuMvwr9iSUxBSM9TqXMYLw7CKSfj\n/uX/+WG7joLOTAMFzIsRiMCsQsl44vliiYBJ16lkW7dcTgVw/jE+eccUVUMdZucY\nhA4m/KcYdX2oG9bhhT19QVKnAVRiUM5OeomjOGA8UdS6JPAnEzf2ZS5kUvACMJaH\nk/1RE9J2qZhUFaM/vmW1yu4dknYLCZ8rSUKc3wuzpAnx6Sl2849GoG+9l848SWkT\nROl2jVNkMeimI6Fo3wLkP0NW9YpCq6QKHpIsBAwLMQKBgQD5cML0f7GMzmnAD5JA\nGxOh8CoqBd0cdjlRDVawbN+m8DOXa98zZdShV6xhuSMtQb/7WrLyf/BBHri91hD/\nGhYhmfbig6u4rKGym6+9a55DqFf7vcwI8GineZO0y/KruYHqOoGiU48Ec79WzIVq\nlYDFRHr3KBNnTVpO/jdzhjJg5QKBgQC4FiOmqkJgpRIP7FFVP4BRdQdKSbCAqeAH\ntM5ieRg9XqTlp6x9Mr77uwlGI+3ItLt1GRhdf5pcCvDZRI79HyabwQL2EM9DqRY/\nqLBMmZcaxFZr2v2aWmE9frPv+1U7RPAbkjJwXfy4LMUdOaj6+IsgABFHPrU03Gwh\naSlejSytUQKBgQCT9lJ+q/xK9On/1ny/cBBOP+MS+FV3m51WOd5RWtOz98nyqTdG\nCsJ9Tj9f3G1EXDsgQ2XguQlv52RYn1GHsRatqeGr7cUAD87+3qD5cIv5wDMojiYo\nq0q5BUIbvdreCHVK1petDXnJf0thloIRfktbOMrkLy6LWXQXZW7JJTJfDQKBgErc\nHfVZyZJ5rkWxaUXMhAccGzHXk6JO8p7PpRogen4CbfZCYH+tUkMWRWgzljAHZy/w\nW5syF/iULmt8WNWQhGfUbrrYDSFLspOCqucLkoo9C5Piwzywwlh6nPvbbkai+y2L\nH13YqrvO4P3Ig/JDfngt7tjVJGVxubtAg6VCrcdxAoGBAKEnsskNc5T/YxKZMrjw\ncHfJaMMbPWG+0kM+t44J0BI1SXDucQPH8G8AxmQDC3xET9ofglzuddNIMHhejNsx\n1PMEsenC0C/eldsXaUWTnCay3UmZJf8LiFybHo5qLHnqoIA+tdkQaZdBCY/6IWAI\nhUD74WoMjNoXYbNtEEJp1jX5\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
  "client_email": "pvt-ltd-registration@private-limited-registration.iam.gserviceaccount.com",
  "client_id": "105389057435379907598",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/pvt-ltd-registration%40private-limited-registration.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

const SPREADSHEET_ID = '1tBkbTU1xXc1uE38frj2uZN0LJzF3gJMqJh5IeOLPr0M';
const SHEET_ID = 1215956186;

export async function POST(req) {
  try {
    const formData = await req.json();
    console.log(formData);

    // Create auth client
    const serviceAccountAuth = new JWT({
      email: CREDENTIALS.client_email,
      key: CREDENTIALS.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create new document instance
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    
    // Load the document properties and sheets
    await doc.loadInfo();
    
    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      'Full Name': formData.fullname,
      'Email': formData.email,
      'Phone Number': formData.phonenumber
    });

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ message: 'Error submitting form' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 