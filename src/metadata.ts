/* eslint-disable */
export default async () => {
    const t = {
        ["./features/about-us/models/about-us.model"]: await import("./features/about-us/models/about-us.model")
    };
    return { "@nestjs/swagger": { "models": [[import("./common/dto/find-all.dto"), { "FindAllDto": { page: { required: false, type: () => String }, perPage: { required: false, type: () => String }, orderBy: { required: false, type: () => String } } }], [import("./features/about-us/dto/create-about-us.dto"), { "CreateAboutUsDto": { uuid: { required: true, type: () => String }, name: { required: true, type: () => String }, lastName: { required: true, type: () => String }, scientificCategory: { required: true, type: () => String }, teachingCategory: { required: true, enum: t["./features/about-us/models/about-us.model"].TeachingCategory }, investigativeCategory: { required: true, enum: t["./features/about-us/models/about-us.model"].InvestigativeCategory }, specialty: { required: true, type: () => String }, specialtyDegree: { required: true, enum: t["./features/about-us/models/about-us.model"].SpecialtyDegree }, yearsOfWorkExperience: { required: true, type: () => Number }, teachingExperience: { required: true, type: () => String } } }], [import("./features/about-us/dto/update-about-us.dto"), { "UpdateAboutUsDto": {} }], [import("./features/admin/dto/create-admin.dto"), { "CreateAdminDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./features/admin/dto/update-admin.dto"), { "UpdateAdminDto": { refreshToken: { required: false, type: () => String } } }], [import("./features/admin/dto/update-crud-admin.dto"), { "UpdateApiAdminDto": {} }], [import("./features/anniversary/dto/create-anniversary.dto"), { "CreateAnniversaryDto": { uuid: { required: true, type: () => String } } }], [import("./features/anniversary/dto/update-anniversary.dto"), { "UpdateAnniversaryDto": {} }], [import("./features/auth/dto/login-auth.dto"), { "LoginAuthDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./features/auth/dto/login-auth-response.dto"), { "LoginAuthResponseDto": { accessToken: { required: true, type: () => String }, refreshToken: { required: true, type: () => String } } }], [import("./features/auth/dto/refresh-auth.dto"), { "RefreshAuthDto": { refreshToken: { required: true, type: () => String } } }], [import("./features/auth/dto/refresh-auth-response.dto"), { "RefreshAuthResponseDto": { accessToken: { required: true, type: () => String } } }], [import("./features/auth/dto/logout-auth.dto"), { "LogoutAuthDto": {} }], [import("./features/event/dto/create-event.dto"), { "CreateEventDto": { uuid: { required: true, type: () => String }, name: { required: true, type: () => String }, date: { required: true, type: () => String }, campus: { required: true, type: () => String }, sponsors: { required: true, type: () => String }, rapporteurship: { required: true, type: () => String } } }], [import("./features/event/dto/update-event.dto"), { "UpdateEventDto": {} }], [import("./features/invitation/dto/create-invitation.dto"), { "CreateInvitationDto": {} }], [import("./features/invitation/dto/update-invitation.dto"), { "UpdateInvitationDto": {} }], [import("./features/social-networks/dto/create-social-networks.dto"), { "CreateSocialNetworksDto": { uuid: { required: true, type: () => String }, name: { required: true, type: () => String }, link: { required: true, type: () => String }, icon: { required: true, type: () => String } } }], [import("./features/social-networks/dto/update-social-networks.dto"), { "UpdateSocialNetworksDto": {} }], [import("./features/statute/dto/create-statute.dto"), { "CreateStatuteDto": { uuid: { required: true, type: () => String } } }], [import("./features/statute/dto/update-statute.dto"), { "UpdateStatuteDto": {} }], [import("./features/photo/dto/store-photo.dto"), { "StorePhotoDto": { name: { required: true, type: () => String }, buffers: { required: true, type: () => [Object] } } }], [import("./common/dto/exception.dto"), { "Unauthorized": { 'statusCode': { required: true, type: () => Object, default: 401 }, 'message': { required: true, type: () => Object, default: "Unauthorized" }, 'timestamp': { required: true, type: () => Object, default: "2023-10-14T15:00:53.687Z" }, 'path': { required: true, type: () => Object, default: "/auth/profile" }, 'method': { required: true, type: () => Object, default: "GET" } }, "Forbidden": { 'statusCode': { required: true, type: () => Object, default: 403 }, 'message': { required: true, type: () => Object, default: "Forbidden resource" }, 'error': { required: true, type: () => String }, 'timestamp': { required: true, type: () => Object, default: "2023-10-14T15:00:53.687Z" }, 'path': { required: true, type: () => Object, default: "/auth/profile" }, 'method': { required: true, type: () => Object, default: "GET" } } }], [import("./common/dto/serialize.dto"), { "SerializeDto": { response: { required: true, type: () => String }, ok: { required: true, type: () => Boolean }, data: { required: false } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./features/about-us/about-us.controller"), { "AboutUsController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/admin/admin.controller"), { "AdminController": { "findAll": {}, "findOneByUsername": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/anniversary/anniversary.controller"), { "AnniversaryController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/auth/auth.controller"), { "AuthController": { "login": {}, "refresh": {}, "profile": {} } }], [import("./features/event/event.controller"), { "EventController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/invitation/invitation.controller"), { "InvitationController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/social-networks/social-networks.controller"), { "SocialNetworksController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/statute/statute.controller"), { "StatuteController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }]] } };
};