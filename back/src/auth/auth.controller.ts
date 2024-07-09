import * as crypto from 'node:crypto'
import { Controller, Get, Inject, Param, Post, Req, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request, Response } from 'express'
import { isEmail, isStrongPassword } from 'class-validator'
import type { OAuthStrategyResponse } from './auth'
import { AuthService } from './auth.service'
import { JwtAuthGuard, JwtRefreshAuthGuard } from './guards'
import { AuthServicePassword } from './auth.service.password'
import { AuthServiceTokens } from './auth.service.tokens'

@Controller('auth')
export class AuthController {
  constructor (
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    private readonly authServicePassword: AuthServicePassword,
    private readonly authServiceTokens: AuthServiceTokens
  ) {}

  // api/auth/email/register
  @Post('email/register')
  async emailRegister (@Req() req: Request, @Res() res: Response) {
    const passOptions = {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
      // returnScore: false,
      // pointsPerUnique: 1,
      // pointsPerRepeat: 0.5,
      // pointsForContainingLower: 10,
      // pointsForContainingUpper: 10,
      // pointsForContainingNumber: 10,
      // pointsForContainingSymbol: 10
    }
    const { email, password } = req.body
    if (!isEmail(email)) {
      res.json({ success: false, message: 'Mauvais format d\'email' })
      res.end()
    }
    else if (!isStrongPassword(password, passOptions)) {
      res.json({ success: false, message: 'Le mot de passe doit contenir au moins 6 charactères et:\n1 minuscule\n1 majuscule\n1 chiffre\n1 symbole ex: $,& ...' })
      res.end()
    }
    else {
      const user = await this.authService.validateUserEmail(req.body, res, 'register')
      const payload = { user, accessToken: user.accessToken } as any
      const jwt = await this.authService.login(payload)
      res.set('authorization', jwt.accessToken)
      res.json(jwt)
      res.end()
    }
  }

  // api/auth/email/login
  @Post('email/login')
  @UseGuards()
  async emailLogin (@Req() req: Request, @Res() res: Response) {
    const user = await this.authService.validateUserEmail(req.body, res, 'login') // null provider accessToken
    const payload = { user, accessToken: user.accessToken } as any
    const jwt = await this.authService.login(payload)
    res.set('authorization', jwt.accessToken)
    res.json(jwt)
    res.end()
  }

  // api/auth/email/reset/sendEmail'
  @Post('email/reset/sendEmail')
  @UseGuards()
  async emailReset (@Req() req: Request, @Res() res: Response) {
    const otp = crypto.randomBytes(40).toString('hex')
    await this.authServicePassword.sendResetEmail(req, otp, res)
    res.end()
  }

  // api/auth/email/reset/forgot'
  @Post('email/reset/forgot')
  @UseGuards()
  async resetPasswordForgot (@Req() req: Request, @Res() res: Response) {
    const { password, otp } = req.body
    const passOptions = {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
      // returnScore: false,
      // pointsPerUnique: 1,
      // pointsPerRepeat: 0.5,
      // pointsForContainingLower: 10,
      // pointsForContainingUpper: 10,
      // pointsForContainingNumber: 10,
      // pointsForContainingSymbol: 10
    }
    if (!isStrongPassword(password, passOptions)) {
      res.json({ success: false, message: 'Le mot de passe doit contenir au moins 6 charactères et:\n1 minuscule\n1 majuscule\n1 chiffre\n1 symbole ex: $,& ...' })
      res.end()
    }
    else {
      await this.authServicePassword.resetPasswordForgot(password, otp, res)
      res.end()
    }
  }

  // api/auth/email/reset/intentional'
  @Post('email/reset/intentional')
  @UseGuards()
  async resetPasswordIntentional (@Req() req: Request, @Res() res: Response) {
    const { newPassword, oldPassword, email } = req.body
    const passOptions = {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
      // returnScore: false,
      // pointsPerUnique: 1,
      // pointsPerRepeat: 0.5,
      // pointsForContainingLower: 10,
      // pointsForContainingUpper: 10,
      // pointsForContainingNumber: 10,
      // pointsForContainingSymbol: 10
    }
    if (!isStrongPassword(oldPassword, passOptions)) {
      res.json({ success: false, message: 'Le mot de passe doit contenir au moins 6 charactères et:\n1 minuscule\n1 majuscule\n1 chiffre\n1 symbole ex: $,& ...' })
      res.end()
    }
    else {
      await this.authServicePassword.resetPasswordIntentional(newPassword, email, oldPassword, res)
      res.end()
    }
  }

  // api/auth/google/login
  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  googleLogin () {
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleRedirect (@Req() req: Request, @Res() res: Response) {
    const payload = req.user as OAuthStrategyResponse
    const jwt = await this.authService.login(payload)
    this.authService.sendAccessToken(jwt, payload, req, res)
  }

  // api/auth/facebook/login
  @Get('facebook/login')
  @UseGuards(AuthGuard('facebook'))
  facebookLogin () {
  }

  // api/auth/facebook/redirect
  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookRedirect (@Req() req: Request, @Res() res: Response) {
    const payload = req.user as OAuthStrategyResponse
    const jwt = await this.authService.login(payload)
    this.authService.sendAccessToken(jwt, payload, req, res)
  }

  // api/auth/discord/login
  @Get('discord/login')
  @UseGuards(AuthGuard('discord'))
  discordLogin () {
  }

  // api/auth/discord/redirect
  @Get('discord/redirect')
  @UseGuards(AuthGuard('discord'))
  async discordRedirect (@Req() req: Request, @Res() res: Response) {
    const payload = req.user as OAuthStrategyResponse
    const jwt = await this.authService.login(payload)
    this.authService.sendAccessToken(jwt, payload, req, res)
  }

  // api/auth/github/login
  @Get('github/login')
  @UseGuards(AuthGuard('github'))
  githubLogin () {

  }

  // api/auth/github/redirect
  @Get('github/redirect')
  @UseGuards(AuthGuard('github'))
  async githubRedirect (@Req() req: Request, @Res() res: Response) {
    const payload = req.user as OAuthStrategyResponse
    const jwt = await this.authService.login(payload)
    this.authService.sendAccessToken(jwt, payload, req, res)
  }

  // api/auth/gitlab/login
  @Get('gitlab/login')
  @UseGuards(AuthGuard('gitlab'))
  gitlabLogin () {

  }

  // api/auth/gitlab/redirect
  @Get('gitlab/redirect')
  @UseGuards(AuthGuard('gitlab'))
  async gitlabRedirect (@Req() req: Request, @Res() res: Response) {
    const payload = req.user as OAuthStrategyResponse
    const jwt = await this.authService.login(payload)
    this.authService.sendAccessToken(jwt, payload, req, res)
  }

  // api/auth/figma/login
  @Get('figma/login')
  @UseGuards(AuthGuard('figma'))
  figmaLogin () {

  }

  // api/auth/figma/redirect
  @Get('figma/redirect')
  @UseGuards(AuthGuard('figma'))
  async figmaRedirect (@Req() req: Request, @Res() res: Response) {
    const payload = req.user as OAuthStrategyResponse
    const jwt = await this.authService.login(payload)
    this.authService.sendAccessToken(jwt, payload, req, res)
  }

  // api/auth/twitch/login
  @Get('twitch/login')
  @UseGuards(AuthGuard('twitch'))
  twitchLogin () {

  }

  // api/auth/twitch/redirect
  @Get('twitch/redirect')
  @UseGuards(AuthGuard('twitch'))
  async twitchRedirect (@Req() req: Request, @Res() res: Response) {
    const payload = req.user as OAuthStrategyResponse
    const jwt = await this.authService.login(payload)
    this.authService.sendAccessToken(jwt, payload, req, res)
  }

  // GET api/auth/status
  // Retrieve the auth status
  @Get('status')
  @UseGuards(JwtAuthGuard)
  status (@Req() req: Request, @Res() res: Response) {
    if (req.user) return res.json('authenticated')
  }

  // GET api/auth/logout
  // Logging the user out
  @Get('logout/:accessToken')
  @UseGuards(JwtAuthGuard)
  async logout (@Param('accessToken') accessToken: string) {
    return await this.authService.logout(accessToken)
  }

  // GET api/auth/:accessToken
  @Get(':accessToken')
  @UseGuards(JwtAuthGuard)
  async getUserByAccessToken (@Param('accessToken') accessToken: string) {
    return await this.authService.getUserByAccessToken(accessToken)
  }

  // Post api/auth/refresh
  @Post('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  async refreshToken (@Req() req: Request, @Res() res: Response) {
    res.json(req.user)
    res.end()
  }

  // GET api/auth/revoke
  @Post('revoke')
  @UseGuards(JwtAuthGuard)
  async revokeToken (@Req() req: Request, @Res() res: Response) {
    const { email } = req.body
    await this.authServiceTokens.revokeUserRefreshToken(email)
    res.json({ success: true, message: 'Token revoked' })
    res.end()
  }

  // @Patch('updateUser')
  // @UseGuards(JwtAuthGuard)
  // async updateUser (@Req() req: Request, @CurrentUser() user: User) {
  //   return await this.authService.updateUser(req.body, user)
  // }
}
