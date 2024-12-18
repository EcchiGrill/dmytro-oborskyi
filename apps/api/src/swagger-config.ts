import { DocumentBuilder } from '@nestjs/swagger'

export const config = new DocumentBuilder()
  .setTitle('Projects | Dmytro Oborskyi')
  .setDescription(
    `<p>Projects API.</p>
    <h3>Looking for graphql api?</h3>
    Go to <a href="/graphql" target="_blank">/graphql</a>
    <h4>Or</h4>
    You might also use <a href="https://studio.apollographql.com/sandbox/explorer" target="_blank">Apollo explorer</a> for better user experience.`,
  )
  .setVersion('1.0')
  .addTag('projects')
  .build()
