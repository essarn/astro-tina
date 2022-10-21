import { defineStaticConfig } from "tinacms";

export default defineStaticConfig({
  // @ts-ignore
  branch: process.env.CF_PAGES_BRANCH,
  // @ts-ignore
  clientId: process.env.CLIENT_ID,  
  // @ts-ignore 
  token: process.env.TOKEN,     
  build: {
   outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
