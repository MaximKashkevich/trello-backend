import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthDto } from 'src/dto/auth.dto'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private user: UserService,
  ) {}

  async login(dto: AuthDto) {
    return dto
  }
}
