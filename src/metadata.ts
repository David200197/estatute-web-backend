/* eslint-disable */
export default async () => {
    const t = {
        ["./common/dto/find-all.dto"]: await import("./common/dto/find-all.dto"),
        ["./features/about-us/models/about-us.model"]: await import("./features/about-us/models/about-us.model"),
        ["./features/social-network/models/social-network.model"]: await import("./features/social-network/models/social-network.model")
    };
    return { "@nestjs/swagger": { "models": [[import("./common/dto/find-all.dto"), { "FindAllDto": { page: { required: false, type: () => String }, perPage: { required: false, type: () => String }, order: { required: false, enum: t["./common/dto/find-all.dto"].Order }, orderBy: { required: false, type: () => String } } }], [import("./features/about-us/dto/create-about-us.dto"), { "CreateAboutUsDto": { name: { required: true, type: () => String }, lastName: { required: true, type: () => String }, scientificCategory: { required: true, type: () => String }, teachingCategory: { required: true, enum: t["./features/about-us/models/about-us.model"].TeachingCategoryEnum }, investigativeCategory: { required: true, enum: t["./features/about-us/models/about-us.model"].InvestigativeCategoryEnum }, specialty: { required: true, type: () => String }, specialtyDegree: { required: true, enum: t["./features/about-us/models/about-us.model"].SpecialtyDegreeEnum }, yearsOfWorkExperience: { required: true, type: () => Number }, teachingExperience: { required: true, type: () => String } } }], [import("./features/about-us/dto/update-about-us.dto"), { "UpdateAboutUsDto": {} }], [import("./features/about-us/orm-entities/about-us-mikro.entity"), { "AboutUsMikroEntity": { uuid: { required: true, type: () => String }, name: { required: true, type: () => String }, lastName: { required: true, type: () => String }, scientificCategory: { required: true, type: () => String }, specialty: { required: true, type: () => String }, yearsOfWorkExperience: { required: true, type: () => Number }, teachingExperience: { required: true, type: () => String }, teachingCategory: { required: true, enum: t["./features/about-us/models/about-us.model"].TeachingCategoryEnum }, investigativeCategory: { required: true, enum: t["./features/about-us/models/about-us.model"].InvestigativeCategoryEnum }, specialtyDegree: { required: true, enum: t["./features/about-us/models/about-us.model"].SpecialtyDegreeEnum } } }], [import("./features/admin/dto/create-admin.dto"), { "CreateAdminDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./features/admin/dto/update-admin.dto"), { "UpdateAdminDto": { refreshToken: { required: false, type: () => String } } }], [import("./features/admin/orm-entities/admin-mikro.entity"), { "AdminMikroEntity": { uuid: { required: true, type: () => String }, username: { required: true, type: () => String }, password: { required: true, type: () => String }, refreshToken: { required: false, type: () => String } } }], [import("./features/admin/dto/update-crud-admin.dto"), { "UpdateApiAdminDto": {} }], [import("./features/anniversary/dto/create-anniversary.dto"), { "CreateAnniversaryDto": {} }], [import("./features/anniversary/dto/update-anniversary.dto"), { "UpdateAnniversaryDto": {} }], [import("./features/anniversary/orm-entities/anniversary-mikro.entity"), { "AnniversaryMikroEntity": { uuid: { required: true, type: () => String } } }], [import("./features/auth/dto/login-auth.dto"), { "LoginAuthDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./features/auth/dto/login-auth-response.dto"), { "LoginAuthResponseDto": { accessToken: { required: true, type: () => String }, refreshToken: { required: true, type: () => String } } }], [import("./features/auth/dto/refresh-auth.dto"), { "RefreshAuthDto": { admin: { required: true, type: () => Object }, refreshToken: { required: true, type: () => String } } }], [import("./features/auth/dto/refresh-auth-response.dto"), { "RefreshAuthResponseDto": { accessToken: { required: true, type: () => String }, refreshToken: { required: true, type: () => String } } }], [import("./features/auth/dto/logout-auth.dto"), { "LogoutAuthDto": { admin: { required: true, type: () => Object } } }], [import("./features/event/orm-entities/event-mikro.entity"), { "EventMikroEntity": { uuid: { required: true, type: () => String }, name: { required: true, type: () => String }, date: { required: true, type: () => String }, campus: { required: true, type: () => String }, sponsors: { required: true, type: () => String }, rapporteurship: { required: true, type: () => String }, photos: { required: true, type: () => [String] } } }], [import("./features/event/dto/create-event.dto"), { "CreateEventDto": { name: { required: true, type: () => String }, date: { required: true, type: () => String }, campus: { required: true, type: () => String }, sponsors: { required: true, type: () => String }, rapporteurship: { required: true, type: () => String }, photos: { required: true, type: () => [String] } } }], [import("./features/event/dto/update-event.dto"), { "UpdateEventDto": { name: { required: false, type: () => String }, date: { required: false, type: () => String }, campus: { required: false, type: () => String }, sponsors: { required: false, type: () => String }, rapporteurship: { required: false, type: () => String }, photos: { required: false, type: () => [String] } } }], [import("./features/invitation/dto/create-invitation.dto"), { "CreateInvitationDto": {} }], [import("./features/invitation/dto/update-invitation.dto"), { "UpdateInvitationDto": {} }], [import("./features/invitation/orm-entities/invitation-mikro.entity"), { "InvitationMikroEntity": { uuid: { required: true, type: () => String } } }], [import("./features/social-network/dto/create-social-network.dto"), { "CreateSocialNetworkDto": { link: { required: true, type: () => String }, type: { required: true, enum: t["./features/social-network/models/social-network.model"].TypeSocialNetworkEnum } } }], [import("./features/social-network/dto/update-social-network.dto"), { "UpdateSocialNetworkDto": {} }], [import("./features/social-network/orm-entities/social-network-mikro.entity"), { "SocialNetworkMikroEntity": { uuid: { required: true, type: () => String }, link: { required: true, type: () => String }, type: { required: true, enum: t["./features/social-network/models/social-network.model"].TypeSocialNetworkEnum } } }], [import("./features/statute/orm-entities/statute-mikro.entity"), { "StatuteMikroEntity": { uuid: { required: true, type: () => String } } }], [import("./features/photo/dto/store-photo.dto"), { "StorePhotoDto": { photos: { required: true, type: () => [Object] } } }], [import("./features/photo/dto/update-photo.dto"), { "UpdatePhotoDto": { urls: { required: true, type: () => [String] }, photos: { required: true, type: () => [Object] } } }], [import("./features/photo/dto/delete-photo.dto"), { "DeletePhotoDto": { urls: { required: true, type: () => [String] } } }], [import("./common/dto/exception.dto"), { "Unauthorized": { 'statusCode': { required: true, type: () => Object, default: 401 }, 'message': { required: true, type: () => Object, default: "Unauthorized" }, 'timestamp': { required: true, type: () => Object, default: "2023-10-14T15:00:53.687Z" }, 'path': { required: true, type: () => Object, default: "/auth/profile" }, 'method': { required: true, type: () => Object, default: "GET" } }, "Forbidden": { 'statusCode': { required: true, type: () => Object, default: 403 }, 'message': { required: true, type: () => Object, default: "Forbidden resource" }, 'error': { required: true, type: () => String }, 'timestamp': { required: true, type: () => Object, default: "2023-10-14T15:00:53.687Z" }, 'path': { required: true, type: () => Object, default: "/auth/profile" }, 'method': { required: true, type: () => Object, default: "GET" } } }], [import("./common/dto/serialize.dto"), { "SerializeDto": { response: { required: true, type: () => String }, ok: { required: true, type: () => Boolean }, data: { required: false } } }], [import("./features/statute/dto/create-statute.dto"), { "CreateStatuteDto": {} }], [import("./features/statute/dto/update-statute.dto"), { "UpdateStatuteDto": {} }]], "controllers": [[import("./features/about-us/about-us.controller"), { "AboutUsController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/admin/admin.controller"), { "AdminController": { "findAll": {}, "findOneByUsername": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/anniversary/anniversary.controller"), { "AnniversaryController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/auth/auth.controller"), { "AuthController": { "login": {}, "refresh": {}, "logout": {}, "profile": {} } }], [import("./features/event/event.controller"), { "EventController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/invitation/invitation.controller"), { "InvitationController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/social-network/social-network.controller"), { "SocialNetworksController": { "findAll": {}, "getAllTypeSocialNetworks": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }], [import("./features/statute/statute.controller"), { "StatuteController": { "findAll": {}, "findOneByUuid": {}, "create": {}, "update": {}, "remove": {} } }]] } };
};