import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDto } from 'src/dto/auth.dto'
import { PrismaService } from './prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        taasks: true,
      },
    })
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        taasks: true,
      },
    })
  }

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      name: '',
      password: await hash(dto.password),
    }

    return this.prisma.user.create({
      data: user,
    })
  }
}
