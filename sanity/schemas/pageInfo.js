export default{
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name:"name",
      title:"Name",
      type:"string",

    },

    {
      name:"role",
      title:"Role",
      type:"string",

    },

    {
      name:"heroImage",
      title:"Image",
      type:"image",
      options: {
        hostpot:true,

      }

    },

    {
      name:"backgroundInformation",
      title:"BackgroundInformation",
      type:"string",

    },

    {
      name:"profilePic",
      title:"ProfilePic",
      type:"image",
      options: {
        hostpot:true,
      }

    },

    {
      name:"phoneNumber",
      title:"PhoneMunber",
      type:"string",

    },

    {
      name:"email",
      title:"Email",
      type:"string",

    },

    {
      name:"adress",
      title:"Adress",
      type:"string",

    },

    {
      name:"socials",
      title:"Socials",
      type:"array",
      of:[{ type:"reference", to: {type:"social"}}],

    },

    

  ],

}
