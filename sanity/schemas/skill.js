export default{
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
    
        name: 'title',
        title: 'Title',
        description: 'Title of the skill',
        type: 'string',
      },
      {
  
        name: 'progress',
        title: 'Progress',
        type: 'number',
        description:'Progress od skill from 0 to 100%',
        validation: (Rule) => Rule.min(0).max(100),
        
      },
      
     
      {
     
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot:true
        },
      },
     
    ],
  
  }
  