import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const BasicLoginScreen = props => {
  const { theme } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewll}
        enabled={true}
        behavior={'padding'}
      >
        <View style={styles.ViewIA} pointerEvents={'auto'}>
          <Image
            style={styles.ImagemU}
            resizeMode={'cover'}
            source={Images._062812}
          />
          <Text style={[styles.Textsa, { color: theme.colors.strong }]}>
            {'Welcome Back!'}
          </Text>

          <Text style={[styles.TextK5, { color: theme.colors.medium }]}>
            {'Sign in to get started.'}
          </Text>
        </View>

        <View style={styles.ViewKf} pointerEvents={'auto'}>
          <TextField
            onChangeText={newEmailValue => {
              const email = newEmailValue;
              try {
                setEmail(email);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextField_8J, { borderColor: theme.colors.light }]}
            placeholder={'Email'}
            type={'underline'}
            value={email}
          />
          <TextField
            onChangeText={newPasswordValue => {
              const password = newPasswordValue;
              try {
                setPassword(password);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextField_39, { borderColor: theme.colors.light }]}
            placeholder={'Password'}
            type={'underline'}
            value={password}
            secureTextEntry={true}
          />
          <Touchable style={styles.Touchablei0}>
            <Text style={[styles.TextiI, { color: theme.colors.primary }]}>
              {'Lost Password?'}
            </Text>
          </Touchable>
        </View>

        <View pointerEvents={'auto'}>
          <ButtonSolid
            style={[
              styles.ButtonSolidac,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Sign In'}
          />
          <Text style={[styles.TextEs, { color: theme.colors.light }]}>
            {
              'By signing in you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
            }
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagemU: {
    width: 100,
    height: 100,
  },
  Textsa: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
  },
  TextK5: {
    textAlign: 'center',
  },
  ViewIA: {
    alignItems: 'center',
  },
  TextField_8J: {
    borderBottomWidth: 1,
  },
  TextField_39: {
    borderBottomWidth: 1,
  },
  TextiI: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
  Touchablei0: {
    marginTop: 16,
  },
  ViewKf: {
    marginBottom: 36,
  },
  ButtonSolidac: {
    borderRadius: 24,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  TextEs: {
    textAlign: 'center',
  },
  KeyboardAvoidingViewll: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(BasicLoginScreen);
