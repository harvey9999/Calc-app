import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator} from '../core/utils';
import { Navigation } from '../types';
import firebase from 'firebase';
import { LoginScreen } from '.';


type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  // const [confirmPassword, setConfirmPassword] = useState({
  //   value: '',
  //   error: '',
  // });

  const _onSignUpPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    // const confirmPasswordError = confirmPasswordValidator(
    // password.value,
    // confirmPassword.value)

    if (emailError || passwordError ) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      // setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
      return;
    }
    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(() => navigation.navigate('Dashboard'))
    .catch((err) => alert(err));
  };

  return (
    <Background>
      <Logo />

      <Header>Welcome</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed}>
        Register
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Home')}>
        Back
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
