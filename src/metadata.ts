/* eslint-disable */
export default async () => {
  const t = {};
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./common/dto/find-all.dto'),
          {
            FindAllDto: {
              page: { required: false, type: () => String },
              perPage: { required: false, type: () => String },
              orderBy: { required: false, type: () => String },
            },
          },
        ],
        [
          import('./features/about-us/dto/create-about-us.dto'),
          { CreateAboutUsDto: {} },
        ],
        [
          import('./features/about-us/dto/update-about-us.dto'),
          { UpdateAboutUsDto: {} },
        ],
        [
          import('./features/admin/dto/create-admin.dto'),
          {
            CreateAdminDto: {
              username: { required: true, type: () => String },
              password: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./features/admin/dto/update-admin.dto'),
          { UpdateAdminDto: {} },
        ],
        [
          import('./features/anniversary/dto/create-anniversary.dto'),
          { CreateAnniversaryDto: {} },
        ],
        [
          import('./features/anniversary/dto/update-anniversary.dto'),
          { UpdateAnniversaryDto: {} },
        ],
        [
          import('./features/auth/dto/login-auth.dto'),
          {
            LoginAuthDto: {
              username: { required: true, type: () => String },
              password: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./features/auth/dto/login-auth-response.dto'),
          {
            LoginAuthResponseDto: {
              accessToken: { required: true, type: () => String },
              refreshToken: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./features/auth/dto/refresh-auth.dto'),
          { RefreshAuthDto: { admin: { required: true, type: () => Object } } },
        ],
        [
          import('./features/auth/dto/refresh-auth-response.dto'),
          {
            RefreshAuthResponseDto: {
              accessToken: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./features/event/dto/create-event.dto'),
          { CreateEventDto: {} },
        ],
        [
          import('./features/event/dto/update-event.dto'),
          { UpdateEventDto: {} },
        ],
        [
          import('./features/invitation/dto/create-invitation.dto'),
          { CreateInvitationDto: {} },
        ],
        [
          import('./features/invitation/dto/update-invitation.dto'),
          { UpdateInvitationDto: {} },
        ],
        [
          import('./features/social-networks/dto/create-social-networks.dto'),
          { CreateSocialNetworksDto: {} },
        ],
        [
          import('./features/social-networks/dto/update-social-networks.dto'),
          { UpdateSocialNetworksDto: {} },
        ],
        [
          import('./features/statute/dto/create-statute.dto'),
          { CreateStatuteDto: {} },
        ],
        [
          import('./features/statute/dto/update-statute.dto'),
          { UpdateStatuteDto: {} },
        ],
        [
          import('./common/dto/exception.dto'),
          {
            Unauthorized: {
              statusCode: { required: true, type: () => Object, default: 401 },
              message: {
                required: true,
                type: () => Object,
                default: 'Unauthorized',
              },
              timestamp: {
                required: true,
                type: () => Object,
                default: '2023-10-14T15:00:53.687Z',
              },
              path: {
                required: true,
                type: () => Object,
                default: '/auth/profile',
              },
              method: { required: true, type: () => Object, default: 'GET' },
            },
            Forbidden: {
              statusCode: { required: true, type: () => Object, default: 403 },
              message: {
                required: true,
                type: () => Object,
                default: 'Forbidden resource',
              },
              error: { required: true, type: () => String },
              timestamp: {
                required: true,
                type: () => Object,
                default: '2023-10-14T15:00:53.687Z',
              },
              path: {
                required: true,
                type: () => Object,
                default: '/auth/profile',
              },
              method: { required: true, type: () => Object, default: 'GET' },
            },
          },
        ],
        [
          import('./common/dto/serialize.dto'),
          {
            SerializeDto: {
              response: { required: true, type: () => String },
              ok: { required: true, type: () => Boolean },
              data: { required: false },
            },
          },
        ],
      ],
      controllers: [
        [
          import('./app.controller'),
          { AppController: { getHello: { type: String } } },
        ],
        [
          import('./features/about-us/about-us.controller'),
          {
            AboutUsController: {
              findAll: {},
              findOneByUuid: {},
              create: {},
              update: {},
              remove: {},
            },
          },
        ],
        [
          import('./features/admin/admin.controller'),
          {
            AdminController: {
              findAll: {},
              findOneByUuid: {},
              create: {},
              update: {},
              remove: {},
            },
          },
        ],
        [
          import('./features/anniversary/anniversary.controller'),
          {
            AnniversaryController: {
              findAll: {},
              findOneByUuid: {},
              create: {},
              update: {},
              remove: {},
            },
          },
        ],
        [
          import('./features/auth/auth.controller'),
          { AuthController: { login: {}, refresh: {}, profile: {} } },
        ],
        [
          import('./features/event/event.controller'),
          {
            EventController: {
              findAll: {},
              findOneByUuid: {},
              create: {},
              update: {},
              remove: {},
            },
          },
        ],
        [
          import('./features/invitation/invitation.controller'),
          {
            InvitationController: {
              findAll: {},
              findOneByUuid: {},
              create: {},
              update: {},
              remove: {},
            },
          },
        ],
        [
          import('./features/social-networks/social-networks.controller'),
          {
            SocialNetworksController: {
              findAll: {},
              findOneByUuid: {},
              create: {},
              update: {},
              remove: {},
            },
          },
        ],
        [
          import('./features/statute/statute.controller'),
          {
            StatuteController: {
              findAll: {},
              findOneByUuid: {},
              create: {},
              update: {},
              remove: {},
            },
          },
        ],
      ],
    },
  };
};
