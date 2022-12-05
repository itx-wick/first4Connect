import React from 'react';
import {View, Pressable, FlatList, RefreshControl} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, END_POINT, ROUTES} from '../constants';
import AppText from './AppText';
import {Styles} from '../styles';
import Icon from './Icon';
import {setLoader} from '../redux/common/commonAction';
import {postApiCall} from '../services/ApiServices';
import {
  setTeacherAttendanceDetails,
  setTeacherAttendanceID,
} from '../redux/tabs/tabsAction';
import {logout} from '../redux/auth/authAction';
import {Commons} from '../utils';

const TeacherAttendanceList = props => {
  const dispatch = useDispatch();
  const tabBarHeight = useBottomTabBarHeight();
  const user = useSelector(state => state.user.currentUser);
  const userType = useSelector(state => state.common.userType);

  const getAttendanceDetails = (id, instance) => {
    dispatch(setLoader(true));
    let params = {
      ID: user.ID,
      APIAccessToken: user.APIAccessToken,
      Type: userType,
      AttendanceID: id,
    };
    postApiCall(END_POINT.T_ATTENDANCE_DETAILS, params)
      .then(res => {
        dispatch(setTeacherAttendanceID(id));
        if (res.Code === 2) {
          Commons.snackBar(res.Message, COLORS.danger);
          dispatch(logout());
          Commons.reset(instance.navigation, ROUTES.LOGIN);
        } else if (res.Code === 1) {
          if (Object.keys(res.Data).length === 0) {
            Commons.snackBar(res.Message, COLORS.green);
          } else {
            dispatch(setTeacherAttendanceDetails(res.Data.Attendance));
            Commons.navigate(instance.navigation, ROUTES.T_ATTENDANCE_DETAILS);
          }
        } else if (res.Code === 0) {
          Commons.snackBar(res.Message, COLORS.primary);
        }
        dispatch(setLoader(false));
      })
      .catch(err => {
        console.warn(err);
        dispatch(setLoader(false));
      });
  };

  const ListItem = ({attendance, index, instance}) => (
    <>
      <Pressable
        onPress={() => {
          getAttendanceDetails(attendance.ID, instance);
        }}
        style={[
          Styles.test_list_item_card,
          {
            marginTop: index === 0 ? RFValue(5) : RFValue(5),
          },
        ]}>
        <View>
          <AppText
            children={attendance.Subject}
            style={{fontWeight: 'bold', fontSize: RFValue(16)}}
          />
          <View style={{flexDirection: 'row'}}>
            <AppText
              children={attendance.Class}
              style={{fontSize: RFValue(12)}}
            />
            <AppText
              children={` [${attendance.Batch}]`}
              style={{fontSize: RFValue(12)}}
            />
          </View>
          <AppText
            children={`${moment(attendance.Timestamp).format('DD MMM yyyy')}`}
            style={{fontSize: RFValue(12)}}
          />
        </View>
        <Icon
          iconType={'materialCommunity'}
          icon="chevron-right"
          iconSize={30}
          iconColor={COLORS.black}
          onClick={() => {
            getAttendanceDetails(attendance.ID, instance);
          }}
        />
      </Pressable>
    </>
  );

  const renderItem = ({item, index}) => (
    <ListItem attendance={item} index={index} instance={props.instance} />
  );

  return (
    <FlatList
      contentContainerStyle={{
        alignItems: 'center',
      }}
      showsVerticalScrollIndicator={false}
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item.ID}
      refreshControl={
        <RefreshControl
          //refresh control used for the Pull to Refresh
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
      ListFooterComponent={
        <View style={{height: tabBarHeight + RFValue(115)}} />
      }
    />
  );
};

export default TeacherAttendanceList;
