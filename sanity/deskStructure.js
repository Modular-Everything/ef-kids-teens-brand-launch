import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title("Content")
    .items([
      // Homepage item
      S.listItem()
        .title("Landing")
        .child(S.editor().schemaType("page").documentId("homepage")),
      // Quiz item
      S.listItem()
        .title("Quiz")
        .child(
          S.list()
            .title("Quiz")
            .items([
              S.listItem().title("Quiz Page"),
              S.listItem()
                .title("Questions")
                .schemaType("quizQuestions")
                .child(S.documentTypeList("quizQuestions")),
            ])
        ),
    ]);
    