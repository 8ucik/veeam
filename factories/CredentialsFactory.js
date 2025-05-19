export class CredentialsFactory {
  static setCredentials() {
    const username = 'InterviewUser';
    const password = 'InterviewUser';
    const email = 'InterviewUser@gmail.com';

    return {
      username,
      password,
      confirmPassword: password,
      email,
    };
  }

  static setEdgeCaseCredentials() {
    const username = faker.internet.username();
    const password = faker.internet.password();
    const email = faker.internet.email();

    return {
      username,
      password,
      confirmPassword: password,
      email,
    };
  }
}
