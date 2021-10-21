import prismaClient from "../prisma";

class ProfileUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      //Onde o id seja igual ao user_id
      where: {
        id: user_id,
      }
    });

    return user;
  }
}

export { ProfileUserService };