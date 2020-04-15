import { google } from "googleapis";

const auth = new google.auth.OAuth2(
    process.env.G_CLIENT_ID,
    process.env.G_CLIENT_SECRET,
    `${process.env.PUBLIC_URL}/login`
  );

export const Google = {
    authUrl: auth.generateAuthUrl({
        access_type: "online",
        scope: [
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/userinfo.profile"
        ]
      }),
    logIn: async (code: string) => {
        const { tokens } = await auth.getToken(code);


        console.log(tokens)
        auth.setCredentials(tokens);
    }
  };