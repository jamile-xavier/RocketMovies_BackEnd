const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService {
  async execute({ name, email, password }) {
    const userRepository = new UserRepository();

    const checkUsersExists = await userRepository.findByEmail(email);

    if (checkUsersExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    const userCreated = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return userCreated;
  }
}

module.exports = UserCreateService;
