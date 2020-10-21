import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      // Make a new list item
      S.listItem()
        // Give it a title
        .title('Quiz')
        .child(
          S.list()
            .title('Quiz')
            .items([
              S.listItem().title('Quiz Page'),
              S.listItem()
                .title('Questions')
                .schemaType('quizQuestions')
                .child(S.documentTypeList('quizQuestions')),
            ])
        ),
    ]);

/*

  import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // Make a new list item
      S.listItem()
        // Give it a title
        .title('Portfolio')
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title('Portfolio')
            .items([
              // Add the first list item
              S.listItem()
                .title('Projects')
                // This automatically gives it properties from the project type
                .schemaType('sampleProject')
                // When you open this list item, list out the documents
                // of the type “project"
                .child(S.documentTypeList('sampleProject').title('Projects')),
              // Add a second list item
              S.listItem()
                .title('Categories')
                .schemaType('category')
                // When you open this list item, list out the documents
                // of the type category"
                .child(S.documentTypeList('category').title('Categories')),
              // Add a new parent list item
              S.listItem()
                .title('Projects by category')
                .child(
                  // List out the categories
                  S.documentTypeList('category')
                    .title('Projects by category')
                    // When a category is selected, pass its id down to the next pane
                    .child(categoryId =>
                      // load a new document list
                      S.documentList()
                        .title('Projects')
                        // Use a GROQ filter to get documents.
                        // This filter checks for sampleProjects that has the
                        // categoryId in its array of references
                        .filter('_type == "sampleProject" && $categoryId in categories[]._ref')
                        .params({categoryId})
                    )
                )      
            ])
        ),
      S.listItem()
        .title('Persons')
        .schemaType('person')
        .child(S.documentTypeList('person').title('Persons')),
      ...S.documentTypeListItems().filter(
        listItem =>
          !['siteSettings', 'sampleProject', 'category', 'person'].includes(
            listItem.getId()
          )
      )
    ])

*/
