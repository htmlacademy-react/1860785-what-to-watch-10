export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films/',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Review = '/review',
  Players = '/player/',
  Player = '/player/:id',
  NotFound = '/error',
}

export enum AuthStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}
