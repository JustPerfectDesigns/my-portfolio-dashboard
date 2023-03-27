export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: "name",
        maxLength: 90,
      }
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: "overviewSubTitle",
          title: "Overview Sub Title",
          type: "string"
        },
        {
          name: "overviewTitle",
          title: "Overview Title",
          type: "string"
        },
        {
          name: "overviewDesc",
          title: "Overview Description",
          type: "string"
        },
        {
          name: 'overviewImg01',
          title: 'Overview Image 01',
          type: 'image',
        },
        {
          name: 'overviewImg02',
          title: 'Overview Image 02',
          type: 'image',
        },
        {
          name: 'overviewImg03',
          title: 'Overview Image 03',
          type: 'image',
        },
        {
          name: "challengeSubTitle",
          title: "Challenge Sub Title",
          type: "string"
        },
        {
          name: "challengeTitle",
          title: "Challenge Title",
          type: "string"
        },
        {
          name: "challengeDesc",
          title: "Challenge Description",
          type: "string"
        },
        {
          name: 'challengeVideo',
          title: 'Challenge Video',
          type: 'file',
          options: {
            accept: 'video/*'
          },
        },
        {
          name: 'challengeImg01',
          title: 'Challenge Image 01',
          type: 'image',
        },
        {
          name: "solutionSubTitle",
          title: "Solution Sub Title",
          type: "string"
        },
        {
          name: "solutionTitle",
          title: "Solution Title",
          type: "string"
        },
        {
          name: "solutionDesc",
          title: "Solution Description",
          type: "string"
        },
        {
          name: 'solutionImg01',
          title: 'Solution Image 01',
          type: 'image',
        },
        {
          name: 'solutionImg02',
          title: 'Solution Image 02',
          type: 'image',
        },
        {
          name: 'solutionImg03',
          title: 'Solution Image 03',
          type: 'image',
        },
        {
          name: 'solutionImg04',
          title: 'Solution Image 04',
          type: 'image',
        },
        {
          name: "littleDescSubTitle",
          title: "Case Little Description Sub Title",
          type: "string"
        },
        {
          name: "littleDescTitle",
          title: "Case Little Description Title",
          type: "string"
        },
        {
          name: 'littleDescImg',
          title: 'Case Little Description Image',
          type: 'image',
        },
        {
          name: "impactSubTitle",
          title: "Impact Sub Title",
          type: "string"
        },
        {
          name: "impactTitle",
          title: "Impact Title",
          type: "string"
        },
      ]
    },
  ],
}
