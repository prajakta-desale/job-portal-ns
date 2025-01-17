import { Module } from '@nestjs/common';
import { UserLoginController } from './user-login.controller';
import { UserLoginService } from './user-login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/users/user.schema';
import {
  UserSeeker,
  UserSeekerSchema,
} from 'src/schema/users/seeker.user.schema';
import {
  UserProvider,
  UserProviderSchema,
} from 'src/schema/users/provider.user.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: UserSeeker.name,
        schema: UserSeekerSchema,
      },
      {
        name: UserProvider.name,
        schema: UserProviderSchema,
      },
    ]),
    JwtModule.register({
      secret: 'your_secret_key_here',
      signOptions: { expiresIn: '1d' }, // Token expiration time (optional)
    }),
  ],
  controllers: [UserLoginController],
  providers: [UserLoginService],
})
export class UserLoginModule {}
