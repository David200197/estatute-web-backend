export const enum EmitterKey {
  authValidateAdmin = 'auth.validate-admin',
  authUpdateRefreshToken = 'auth.update-refresh-token',
  eventStorePhotos = 'event.store-photos',
  eventUpdatePhotos = 'event.update-photos',
  eventDeletePhotos = 'event.delete-photos',
}

export const enum ListenerKey {
  adminAuthValidateAdmin = 'admin.auth.validate-admin',
  adminAuthUpdateRefreshToken = 'admin.auth.update-refresh-token',
  photoEventStorePhotos = 'photo.event.store-photos',
  photoEventUpdatePhotos = 'photo.event.update-photos',
  photoEventDeletePhotos = 'photo.event.delete-photos',
}
