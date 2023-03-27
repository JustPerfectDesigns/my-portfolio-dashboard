const textEditorStyles = [
  {title: "Paragraph", value: "normal"},
  {title: "Heading 1", value: "h1"},
  {title: "Heading 2", value: "h2"},
  {title: "Heading 3", value: "h3"},
  {title: "Heading 4", value: "h4"},
  {title: "Bullet", value: "bullet"},
  {title: "Numbered", value: "number"},
  {title: "Quote", value: "blockquote"},
]

export default {
   name: 'post',
   title: 'Post',
   type: 'document',
   fields: [
     {
       name: 'title',
       title: 'Title',
       type: 'string',
     },
     {
       name: 'slug',
       title: 'Slug',
       type: 'slug',
       options: {
         source: "title",
         maxLength: 90,
       }
     },
     {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
     {
       name: 'mainImage',
       title: 'Main Image',
       type: 'image',
     },
     {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: textEditorStyles
        },
        {
          type: "image"
        },
      ],
    },
   ],
 }
 