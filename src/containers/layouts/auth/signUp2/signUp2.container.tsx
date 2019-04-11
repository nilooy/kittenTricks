import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignUpForm2Type } from '@src/components/auth';
import { SignUp2 } from './signUp2.component';

export class SignUp2Container extends React.Component<NavigationScreenProps> {


  private onSignUpPress = (formValue: SignUpForm2Type) => {
    this.props.navigation.goBack();
  };

  private onSignInPress = () => {
    this.props.navigation.navigate('Sign In 2');
  };


  private onPhotoPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignUp2
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
