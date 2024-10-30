import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {styles} from './style';
import {DropDown} from 'shared/assets/svg/DropDown';
import {COLORS} from 'shared';
import {CustomInput} from 'common/custom-input';
import {CustomDialog} from 'common/custom-dialog';
import {getAppLanguage, t} from 'shared/localization';
import {AppContext} from 'shared/store';
import {ArrowLeft} from 'shared/assets/svg/LeftArrow';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/root/interface';

const profileImages: ProfileImageType[] = [
  {
    id: 1,
    image: require('shared/assets/images/profile_1.png'),
    color: '#D7D8E8',
  },
  {
    id: 2,
    image: require('shared/assets/images/profile_1.png'),
    color: '#4DF3A0',
  },
  {
    id: 3,
    image: require('shared/assets/images/profile_1.png'),
    color: '#C73692',
  },
  {
    id: 4,
    image: require('shared/assets/images/profile_2.png'),
    color: '#FFE100',
  },
  {
    id: 5,
    image: require('shared/assets/images/profile_2.png'),
    color: '#F52525',
  },
  {
    id: 6,
    image: require('shared/assets/images/profile_2.png'),
    color: '#407DEE',
  },
  {
    id: 7,
    image: require('shared/assets/images/profile_3.png'),
    color: '#80C8FF',
  },
  {
    id: 8,
    image: require('shared/assets/images/profile_3.png'),
    color: '#D5F158',
  },
  {
    id: 9,
    image: require('shared/assets/images/profile_3.png'),
    color: '#8D0000',
  },
  {
    id: 10,
    image: require('shared/assets/images/profile_4.png'),
    color: '#D767E8',
  },
  {
    id: 11,
    image: require('shared/assets/images/profile_4.png'),
    color: '#F37A29',
  },
  {
    id: 12,
    image: require('shared/assets/images/profile_4.png'),
    color: '#2B9EC8',
  },
  {
    id: 13,
    image: require('shared/assets/images/profile_5.png'),
    color: '#53F077',
  },
  {
    id: 14,
    image: require('shared/assets/images/profile_5.png'),
    color: '#9060DD',
  },
  {
    id: 15,
    image: require('shared/assets/images/profile_5.png'),
    color: '#FDFDCD',
  },
];

const LANGUAGES = [
  {key: 'ru', lang: 'Pyccкий'},
  {key: 'en', lang: 'English'},
  {key: 'es', lang: 'Español'},
  {key: 'it', lang: 'Italiano'},
  {key: 'de', lang: 'Deutsch'},
  {key: 'fr', lang: 'Français'},
  {key: 'pl', lang: 'Polski'},
];

type AccountScreenType = NativeStackScreenProps<RootStackParamList, 'Account'>;

type ProfileImageType = {
  id: number;
  image: any;
  color: string;
};

export const AccountScreen: React.FC<AccountScreenType> = ({navigation}) => {
  const context = useContext(AppContext);

  const appLang = context?.appLang;

  const [name, setName] = useState('');

  const [showProfileImageDialog, setShowProfileImageDialog] = useState(false);
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);

  const lang = getAppLanguage();
  console.log(lang, '--lang');
  const [selectedLang, setSelectedLang] = useState(lang);

  const userInputRef = useRef<TextInput>(null);

  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedProfileImage, setSelectedProfileImage] = useState(
    profileImages[0],
  );

  useLayoutEffect(() => {
    if (selectedLang) {
      const selectedLangObj =
        LANGUAGES.find(l => l.key === selectedLang)?.lang ?? 'English';
      setSelectedLanguage(selectedLangObj);
    }
  }, [selectedLang]);

  const onDismiss = () => {
    setShowLanguageDialog(false);
  };
  const onSelectLang = (lang: string, key: string) => {
    setSelectedLanguage(lang);
    context?.onChangeAppLang(key);
    setSelectedLang(key);
    onDismiss();
  };

  const onDismissProfileImage = () => {
    setShowProfileImageDialog(false);
  };

  const onSelectProfileImage = (profileImage: ProfileImageType) => {
    setSelectedProfileImage(profileImage);
    onDismissProfileImage();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (!showProfileImageDialog && !showLanguageDialog) {
        return;
      }
      e.preventDefault();
      setShowProfileImageDialog(false);
      setShowLanguageDialog(false);
    });
    return unsubscribe;
  }, [navigation, showProfileImageDialog, showLanguageDialog]);

  const handleProfileImageDialog = () => {
    setShowProfileImageDialog(true);
  };

  const handleLanguageDialog = () => {
    setShowLanguageDialog(true);
  };

  const handleChangeName = () => {
    console.log('handleChangeName');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={{
          backgroundColor: 'gray',
          width: 30,
          height: 30,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 12,
          marginHorizontal: 16,
        }}
        onPress={navigation.goBack}>
        <ArrowLeft />
      </Pressable>

      <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        {showLanguageDialog && (
          <LanguageDialog
            selectedLanguage={selectedLanguage}
            onDismiss={onDismiss}
            onSelect={onSelectLang}
          />
        )}
        {showProfileImageDialog && (
          <ProfileImageDialog
            onDismiss={onDismissProfileImage}
            onSelect={onSelectProfileImage}
          />
        )}
        <View style={styles.header}>
          <View
            style={[
              styles.profileImage,
              selectedProfileImage && {
                backgroundColor: selectedProfileImage.color,
              },
            ]}>
            <ImageBackground
              source={
                selectedProfileImage
                  ? selectedProfileImage.image
                  : require('shared/assets/images/camera.png')
              }
              resizeMode="contain">
              <View style={styles.imgContainer} />
            </ImageBackground>
            <EditIcon onPress={handleProfileImageDialog} />
          </View>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={handleChangeName} activeOpacity={0.95}>
            <CustomInput
              inputRef={userInputRef}
              wrapperStyle={styles.inputSpace}
              textStyle={styles.inputText}
              inputValue={name}
              onChangeInputValue={setName}
              placeholder={t.YourName}
            />
            <EditIcon
              width={30}
              height={30}
              bottom={-75}
              onPress={() => userInputRef.current?.focus()}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.languagePicker}
            onPress={handleLanguageDialog}>
            <Text style={styles.languagePickerText}>
              {selectedLanguage ? selectedLanguage : 'Язык'}
            </Text>
            <DropDown />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface LanguageDialogProps {
  selectedLanguage: string;
  onDismiss: () => void;
  onSelect: (lang: string, key: string) => void;
}

const LanguageDialog: React.FC<LanguageDialogProps> = ({
  selectedLanguage,
  onDismiss,
  onSelect,
}) => {
  return (
    <CustomDialog onDismiss={onDismiss}>
      <View style={styles.LanguageDialogContainer}>
        {LANGUAGES.map((lang, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.languageItem,
              selectedLanguage === lang.lang && {
                backgroundColor: COLORS.dark_000,
              },
            ]}
            onPress={() => onSelect(lang.lang, lang.key)}>
            <Text style={styles.languageItemText}>{lang.lang}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </CustomDialog>
  );
};

interface ProfileImageDialogProps {
  onDismiss: () => void;
  onSelect: (profileImage: ProfileImageType) => void;
}

const ProfileImageDialog: React.FC<ProfileImageDialogProps> = ({
  onDismiss,
  onSelect,
}) => {
  return (
    <CustomDialog onDismiss={onDismiss}>
      <View style={styles.profileImageDialogContainer}>
        {profileImages.map((profileImage, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.profileImageItem,
              {backgroundColor: profileImage.color},
            ]}
            onPress={() => onSelect(profileImage)}>
            <ImageBackground source={profileImage.image} resizeMode="contain">
              <View style={{width: 65, height: 65}} />
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </CustomDialog>
  );
};

const EditIcon = ({
  width = 50,
  height = 50,
  bottom = -30,
  right = -10,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.editBtn, {width, height, bottom, right}]}
      onPress={onPress}>
      <Image
        style={{width: width / 2, height: height / 2}}
        source={require('shared/assets/images/edit.png')}
      />
    </TouchableOpacity>
  );
};
