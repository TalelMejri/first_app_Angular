import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetToken, SetUser,LogoutUser,SetIsAuth } from './actions_auth';


export class AuthStateModel{
  isAuth:boolean=false;
  user:User |null |undefined;
  token:string |null |undefined;
}

@State<AuthStateModel>({
  name:"AuthStore",
  defaults:{
    isAuth:false,
    token:null,
    user:null
  },
})

@Injectable()
export class AuthStore{
  @Selector()
  static getIsAuth({isAuth}:AuthStateModel){
    return isAuth;
  }

  @Selector()
  static getToken({token}:AuthStateModel){
    return token;
  }

  @Selector()
  static getUser({user}:AuthStateModel){
    return user;
  }

  @Action(SetToken)
  SetToken({getState,patchState}:StateContext<AuthStateModel>,{data}:SetToken){
    patchState({
      token:data
    });
  }

  @Action(SetUser)
  SetUser({getState,patchState}:StateContext<AuthStateModel>,{data}:SetUser){
    patchState({
      user:data
    })
  }

  @Action(SetIsAuth)
  SetIsAuth({getState,patchState}:StateContext<AuthStateModel>,{data}:SetIsAuth){
    patchState({
      isAuth:data
    })
  }

  @Action(LogoutUser)
  Action({getState,patchState}:StateContext<AuthStateModel>){
    patchState({
      isAuth:false,
      user:null,
      token:null
    })
  }
}
