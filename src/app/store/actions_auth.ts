import { UserWithFields } from "../model/UserWithFields";

export class SetToken{
  static readonly type='[Auth] SetToken';
  constructor(public data:string |null){
  }
}

export class SetUser{
  static readonly type='[Auth] SetUser';
  constructor(public data:UserWithFields | null){
  }
  }

  export class SetIsAuth{
    static readonly type='[Auth] SetIsAuth';
    constructor(public data:boolean){
    }
    }

    export class LogoutUser{
      static readonly type='[Auth] LogoutUser';
    }


